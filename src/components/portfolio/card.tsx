import { ReactNode, FC } from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

export interface CardProps {
  title: string;
  description: string;
  image: ReactNode;
}

export const Card: FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-neutral-900 p-6 shadow-md">
      <div className="flex h-60 items-center justify-center">
        <Image
          src={image as string}
          width={500}
          height={240}
          alt={title}
          className="h-60 rounded-xl object-cover"
        />
      </div>
      <div className="mx-auto max-w-md text-center">
        <h2 className="bg-clip-text font-display font-bold text-neutral-200 ">
          <Balancer>{title}</Balancer>
        </h2>
      </div>
    </div>
  );
};
