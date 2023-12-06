import { FaBagShopping } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className=" bg-slate-100 shadow-xl fixed top-0 left-0 right-0 z-10 ">
      <div className=" container m-auto flex p-5 justify-between uppercase">
        <a href="/" className=" flex gap-2 items-center text-amber-500 j mx-2">
          <FaBagShopping />
          shopcart
        </a>

        <ul className=" flex gap-5 ">
          <li>
            <a href="/" className="hover:text-orange-400 text-black ">
              home
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-orange-400 text-black ">
              about
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-orange-400 text-black ">
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
