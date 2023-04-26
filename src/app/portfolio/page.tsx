import { Card } from "@/components/portfolio";
import { Title } from "@/components/shared";
import { portfolioConfig } from "@/configs";

export default async function Portfolio() {
  return (
    <>
      <div className="flex w-full animate-fade-up flex-col">
        <Title title="Portofolio" />

        <div className="my-10 flex w-full flex-col gap-5">
          {portfolioConfig.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              description={item.description}
              title={item.title}
              path={item.href}
            />
          ))}
        </div>
      </div>
    </>
  );
}
