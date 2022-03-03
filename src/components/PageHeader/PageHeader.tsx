import React from "react";
import { Link } from "react-router-dom";

const PageHeader = () => (
  <header className="flex flex-col gap-4 text-center sm:gap-0 sm:text-left sm:flex-row justify-between px-4 py-8 bg-gradient-to-b from-blue-100 to-white drop-shadow-md">
    <h1 className="text-3xl">ACNH Wiki</h1>
    <nav>
      <Link className="text-xl border-2 px-8 py-2 rounded-md" to="/">
        Home
      </Link>
    </nav>
    <input type="search" className="p-2 rounded-md" placeholder="Search..." />
  </header>
);

export default PageHeader;
