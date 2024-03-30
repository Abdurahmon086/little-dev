import navData from "@/database/navData";
import Link from "next/link";
type Props = {
  menuToggle: boolean;
  setMenuToggle: any;
};

const MenuModal = (props: Props) => {
  const { menuToggle, setMenuToggle } = props;

  return (
    <div className="lg:hidden shadow-red-600 shadow-md py-5" style={menuToggle ? { display: "block" } : { display: "none" }}>
      <div className="container mx-auto">
        <ul className="flex flex-col gap-3 lg:hidden">
          {navData.map((item) => {
            return (
              <li key={item.id} onClick={() => setMenuToggle(!menuToggle)}>
                <Link href={item.slug} className="text-small-light text-xl font-semibold">
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MenuModal;
