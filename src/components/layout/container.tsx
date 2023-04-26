export type ContainerProps = {
  children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <main className="z-50 mx-auto my-8 flex w-full max-w-[450px] px-4 md:my-16 md:max-w-[600px] lg:my-20">
      {children}
    </main>
  );
};
