import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { BsListStars } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="fixed top-3 right-3 z-[999]">
      <div className="bg-white shadow-lg rounded-md">
        <div className="flex px-3 pb-1">
          <div className="flex flex-col justify-center items-center group">
            <Link
              href="/"
              className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-slate-500 transition group-hover:text-pink-500 active:scale-95"
            >
              <span className="block">
                <FaHome className="mx-auto text-xl" />
                <span className="block text-sm">Home</span>
              </span>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center group transition">
            <Link
              href="/pricelist"
              className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-slate-500 transition group-hover:text-pink-500 active:scale-95"
            >
              <span className="block">
                <BsListStars className="mx-auto text-xl" />
                <span className="block text-sm">Pricelist</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
