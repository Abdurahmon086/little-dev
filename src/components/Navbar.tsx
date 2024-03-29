import Link from "next/link";
import navData from "@/database/navData";

const Navbar = () => {
  return (
    <div>
      <div className="container mx-auto flex justify-between items-center py-2">
        <Link href="/" className=" font-black text-4xl">
          Little-dev
        </Link>

        <nav>
          <ul className="flex items-center gap-7">
            {navData.map((item) => {
              return (
                <li>
                  <Link href={item.slug} className="text-small-light text-xl font-semibold">
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
