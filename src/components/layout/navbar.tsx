"use client";

import Link from "next/link";
import { navigationConfig } from "@/configs";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <>
      <aside className="mx-5 flex w-full max-w-[150px] flex-col justify-center">
        {navigationConfig.map((item) => (
          <Link
            key={item.id}
            href={item.path}
            className={`flex w-max items-center rounded-md px-2 py-1 align-middle font-serif font-bold text-neutral-500 transition-all duration-200 ease-in-out hover:text-neutral-200 ${
              isActive(item.path) && "bg-neutral-800 !text-neutral-200"
            }`}
          >
            <p>{item.title}</p>
          </Link>
        ))}
      </aside>
    </>
  );
}
