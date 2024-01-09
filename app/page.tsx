"use client";
import Image from "next/image";
import Link from "next/link";

import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="flex min-h-screen items-stretch justify-between">
      <div className="text-2xl font-semibold">
        The Current theme is : {theme}
      </div>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("cupcake")}>cupcake</button>
      <button onClick={() => setTheme("bumblebee")}>bumblebee</button>
      <button onClick={() => setTheme("emerald")}>emerald</button>
      <button onClick={() => setTheme("corporate")}>corporate</button>
      <button onClick={() => setTheme("cyberpunk")}>cyberpunk</button>
      <button onClick={() => setTheme("halloween")}>halloween</button>
      <button onClick={() => setTheme("mytheme")}>mytheme</button>
    </main>
  );
}
