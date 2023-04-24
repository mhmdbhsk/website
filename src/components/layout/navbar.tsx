"use client";

import { navigationConfig } from "@/configs";
import Link from "next/link";

export function NavBar() {
  return (
    <>
      <aside className="mx-5 flex w-full max-w-[150px] flex-col justify-center">
        {navigationConfig.map((item) => (
          <Link
          key={item.id}
            href={item.path}
            className="flex w-max items-center rounded-lg px-2 py-1 align-middle font-display font-bold text-neutral-500 transition-all duration-200 ease-in-out hover:bg-neutral-500 hover:text-neutral-200"
          >
            <p>{item.title}</p>
          </Link>
        ))}
        <Link
          href="/about"
          className="flex w-max items-center rounded-lg px-2 py-1 font-display text-neutral-500 transition-all  duration-200 ease-in-out hover:bg-neutral-500 hover:text-neutral-300"
        >
          <p>Tentang</p>
        </Link>
        <Link
          href="/project"
          className="flex w-max items-center rounded-lg px-2 py-1 font-display text-neutral-500 transition-all duration-200 ease-in-out hover:bg-neutral-500 hover:text-neutral-300"
        >
          <p>Proyek</p>
        </Link>
      </aside>
    </>
  );
}
