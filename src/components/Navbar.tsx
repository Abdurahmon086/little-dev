import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const navData = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Blog",
    },
    {
      id: 3,
      title: "Aboute",
    },
  ];
  return (
    <div >
      <div className="container mx-auto flex justify-between items-center py-2">
        <Link href="/">
          <Image width={50} height={50} src="/favicon.ico" alt="" />
        </Link>

        <nav>
          <ul className="flex items-center gap-3">
            {navData.map((item) => {
              return (
                <li>
                  <Link href={`#${item.title.toLocaleLowerCase()}`} className="text-small-light" > {item.title} </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
