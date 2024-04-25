# NextJS Cheatsheet

## Getting start

```sh
cp .env.template .env.development
cp .env.template .env.production
```

```sh
npm run dev
```

## References

## Dev Diary

### Day 01 : Setup Structure

**create new project**

```sh
npx create-next-app@latest
```

**Debug nextjs on both server side and client side**

```sh
npm install cross-env --save-dev
```

Adjust your dev script

```json
{
  "scripts": {
    "dev": "cross-env NODE_OPTIONS='--inspect' next dev -p 3000"
  }
}
```

Add your debug config in vscode

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: Node",
      "type": "node",
      "request": "attach",
      "remoteRoot": "/src",
      "localRoot": "${workspaceFolder}",
      "port": 9229,
      "restart": true,
      "address": "0.0.0.0",
      "skipFiles": ["<node_internals>/**"]
    },
    {
      "name": "Next.js: Chrome",
      "type": "node",
      "request": "attach",
      "remoteRoot": "/src",
      "localRoot": "${workspaceFolder}",
      "port": 9230,
      "restart": true,
      "address": "0.0.0.0",
      "skipFiles": ["<node_internals>/**"]
    }
  ],
  "compounds": [
    {
      "name": "Next.js: Fullstack",
      "configurations": ["Next.js: Node", "Next.js: Chrome"]
    }
  ]
}
```

> Stylesheets

- styles

> Public

- Unprocessed Assets: robots.txt, favicon
- Direct Access File URL: yourdomain/policy.pdf

```ts
import Image from "next/image";
import Logo from "@public/images/logo.png";

export default function Home() {
  const isServerSide = true;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Image
          src="/images/logo.png"
          width={Logo.width}
          height={Logo.height}
          alt="NextJS Cheatsheet"
        />
        {isServerSide ? "ServerSide" : "Not Server Side"}
        <h1 className="font-bold">NextJS Cheatsheet</h1>
      </div>
    </main>
  );
}
```

Accessing Static Assets

```
public
    - images
    - css
    - fonts
```

```ts
- Images: <img src="/images/logo.png" alt="Logo">
- Fonts: you can reference it in your CSS with url('/fonts/Roboto-Regular.ttf').
- CSS: <link rel="stylesheet" href="/css/style.css">
```

> Assets

- Assets you wanna process through built workflow
- Versioning and caching
- Usage in component

> Configs

- environment: there are 2 kind of env variables: PRIVATE(SERVER SIDE ONLY), PUBLIC(FOR BOTH)

```env
# Server Side
API_KEY=yourapikeyhere
# Client Side
NEXT_PUBLIC_WEBSITE_URL=http://localhost:3000
```

```ts
const environment = {
  private: {
    apiKey: process.env.API_KEY,
    env: process.env.NODE_ENV,
  },
  public: {
    websiteUrl: process.env.NEXT_PUBLIC_WEBSITE_URL,
  },
};

export default environment;
```

> app

- The most interesting in NextJS is this folder. The route system is your folder structure, which will apply pages.jsx|tsx as the handler of the route.

For instance, here is your folder structure and the corresponding route:

- app/pages.tsx => /
- app/home/pages.tsx => /home
- app/posts/pages.tsx => /posts
- app/posts/[slug].tsx => /posts/a -> {slug:a} ( params )

And another special thing is your can have your own layout.tsx in each folder

```sh
app
  posts
    layout.tsx // this is the layout file
    page.tsx // this is the component which handle the route
```

And you may wanna organize your folder in group but doesn't want it includes in the route, NextJS provides us another interesting syntax

- app/(backoffice)/admin -> /admin
- app/(frontoffice) -> /

> Using external ui lib: [nextui](https://nextui.org/docs/frameworks/nextjs)

Steps:

1. Add dependencies

```sh
npm i @nextui-org/react framer-motion
```

2. TailwindCSS Setup

**tailwind.config.ts**

```ts
import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react"; // for nextui

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // for nextui
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class", // for nextui
  plugins: [nextui()], // for nextui
  corePlugins: {
    preflight: true,
  },
};
export default config;
```

3. Setup provider

```tsx
// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
```

4. Add provider to root

```scss
// ./src/styles/global.scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```tsx
import Favicon from "@/layouts/favicon";
import { Providers } from "./providers";
import "@/styles/global.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <Favicon />
      </head>
      <body className="text-foreground bg-background">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

5. Use NextUI Components

```tsx
// app/page.tsx
import { Button } from "@nextui-org/button";

export default function Page() {
  return (
    <div>
      <Button colors="primary">Click me</Button>
    </div>
  );
}
```
