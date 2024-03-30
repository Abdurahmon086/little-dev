import Link from "next/link";
import navData from "@/database/navData";
import Image from "next/image";
import menu from "/public/images/menu.svg";
import xIcon from "/public/images/x.svg";
import MenuModal from "./ui/menuModal";
type Props = {
  menuToggle: boolean;
  setMenuToggle: any;
};

const Navbar = (props: Props) => {
  const { menuToggle, setMenuToggle } = props;
  return (
    <div className="container mx-auto">
      <div className=" flex justify-between items-center py-2 ">
        <Link href="/" className=" font-black text-4xl">
          Little-dev
        </Link>

        <nav className="flex items-center">
          <Image src={!menuToggle ? menu : xIcon} alt="menu icon" width={40} height={40} className="lg:hidden" onClick={() => setMenuToggle(!menuToggle)} />
          <ul className="items-center gap-7 hidden lg:flex">
            {navData.map((item) => {
              return (
                <li key={item.id}>
                  <Link href={item.slug} className="text-small-light text-xl font-semibold">
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="">
        <MenuModal menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      </div>
    </div>
  );
};

export default Navbar;
