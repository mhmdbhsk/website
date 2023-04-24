export type ContainerProps = {
  children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <main className="z-50 flex min-h-screen w-full flex-col items-center justify-center py-32">
      {children}
    </main>
  );
};
