import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

export interface SocialMediaCardProps {
  path: string;
  title: string;
}

export const SocialMediaCard: FC<SocialMediaCardProps> = ({ path, title }) => {
  return (
    <Link
      href={path}
      target="_blank"
      className="flex gap-1 rounded-md border border-neutral-800 px-4 py-2 text-neutral-500 transition duration-100 hover:text-neutral-200"
    >
      <ArrowUpRight />
      {title}
    </Link>
  );
};
