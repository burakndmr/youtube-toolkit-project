"use client";
import Image from "next/image";
import Link from "next/link";

import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="flex min-h-screen items-stretch justify-between text-primary">
      <div className="text-2xl font-semibold">
        The Current theme is : {theme}
      </div>

      <button onClick={() => setTheme("myLightTheme")}>mytheme</button>
    </main>
  );
}
