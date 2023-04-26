import { FC, ReactNode } from "react";

export interface ParagraphProps {
  children: ReactNode | string;
}

export const Paragraph: FC<ParagraphProps> = ({ children }) => {
  return (
    <span className="font-display leading-loose text-neutral-400">
      {children}
    </span>
  );
};
