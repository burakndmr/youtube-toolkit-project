"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarProps {
  children: React.ReactNode;
}

const links = [
  {
    name: "Home Page",
    path: "/",
  },
  {
    name: "Content Previewer",
    path: "/content-previewer",
  },
  {
    name: "Burak",
    path: "/burak",
  },
];

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathName = usePathname();

  return (
    <div className="drawer lg:drawer-open min-w-full">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-1 flex-col items-start justify-start">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        {/* CHILDREN CONTAINER */}
        <div className="w-full bg-base-100">{children}</div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {links.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={pathName === link.path ? "bg-slate-500" : ""}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
