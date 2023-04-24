export type ContainerProps = {
  children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <main className="z-50 mt-8 min-h-screen w-full justify-center md:mt-20 lg:mt-32">
      {children}
    </main>
  );
};
