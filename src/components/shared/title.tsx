import { FC } from "react";

export interface TitleProps {
  title: string;
}

export const Title: FC<TitleProps> = ({ title }) => {
  return (
    <span className="font-serif text-3xl font-bold text-neutral-100">
      {title}
    </span>
  );
};
