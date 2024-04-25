import Image from "next/image";
import Logo from "@/assets/s-logo.png";
import { environment } from "@/configs";

export default function HomePage() {
  const isServerSide = true;
  const apiKey = environment.private.apiKey;
  const env = environment.private.env;
  console.log(`do something with ${apiKey}`);
  const websiteUrl = environment.public.websiteUrl;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Image src={Logo} alt="NextJS Cheatsheet" />
        {isServerSide ? "ServerSide" : "Not Server Side"}
        <h1 className="font-bold">NextJS Cheatsheet</h1>
        <p>
          Website Url: {websiteUrl} ({env})
        </p>
      </div>
    </main>
  );
}
