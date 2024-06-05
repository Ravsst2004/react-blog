"use client";

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <nav className="flex justify-center md:justify-between md:px-32 font-bold py-3 bg-slate-300">
      <h1 className="hidden md:block">React Blog</h1>

      <div className="flex gap-x-8 mx-auto md:mx-0">
        <NavLink path="/" currentPath={currentPath}>
          Home
        </NavLink>
        <NavLink path="/add-blog" currentPath={currentPath}>
          Add Blog
        </NavLink>
      </div>
    </nav>
  );
};

const NavLink = ({ path, currentPath, children }) => {
  const isActive = currentPath === path;
  const activeClassName = isActive
    ? "underline underline-offset-4 decoration-2"
    : "";

  return (
    <a href={path} className={activeClassName}>
      {children}
    </a>
  );
};

export default Navbar;
