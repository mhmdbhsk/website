import { SocialMediaCard, Title } from "@/components/shared";
import { socialMediaConfig } from "@/configs";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <div className="flex w-full flex-col animate-fade-up">
        <Title title="Muhammad Bhaska" />

        <span className="my-5 font-display leading-loose tracking-tight text-neutral-400">
          Hi! saya Bhaska. Saya seorang{" "}
          <b>
            Mobile Engineer di{" "}
            <span className="cursor-pointer transition hover:underline">
              Mulo
            </span>
          </b>{" "}
          dan{" "}
          <b>
            Front-End Engineer di{" "}
            <span className="cursor-pointer transition hover:underline">
              KodingWorks.
            </span>
          </b>
        </span>

        <Image
          src="/photo-profile.jpg"
          alt="photo-profile"
          height={100}
          width={100}
          className="my-4 aspect-square rounded-full object-cover"
        />

        <span className="my-5 font-display leading-loose tracking-tight text-neutral-400">
          Saya tertarik di bidang Front End dan Mobile, terutama Next.js,
          Typescript, dan Flutter.
        </span>

        <div className="my-5 flex flex-wrap gap-4">
          {socialMediaConfig.slice(0, 1).map((item) => (
            <SocialMediaCard
              key={item.id}
              path={item.path}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}
