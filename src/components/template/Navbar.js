import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex md:justify-between px-32 py-3 bg-slate-300">
      <h1 className="hidden md:block">Navbar</h1>

      <div className="flex gap-x-8 mx-auto md:mx-0">
        <Link href={"/"}>Home</Link>
        <Link href={"/add-blog"}>Add Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
