import { ReactNode, FC } from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

export interface CardProps {
  title: string;
  description: string;
  image: ReactNode;
  path: string;
}

export const Card: FC<CardProps> = ({ title, description, image, path }) => {
  return (
    <Link
      href={path}
      className="flex cursor-pointer flex-col gap-4 rounded-xl bg-neutral-900 p-6 shadow-md"
      target="_blank"
    >
      <div className="flex h-60 items-center justify-center">
        <Image
          src={image as string}
          width={500}
          height={240}
          alt={title}
          className="h-60 w-full rounded-xl object-cover"
        />
      </div>
      <div className="mx-auto text-center">
        <h2 className="bg-clip-text font-display font-bold text-neutral-200 ">
          {title}
        </h2>
      </div>
    </Link>
  );
};
