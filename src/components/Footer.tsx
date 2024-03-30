import Link from "next/link";
import navData from "@/database/navData";
import imgData from "@/database/imgData";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center gap-5 py-10">
        <ul className="flex gap-4">
          {imgData &&
            imgData?.social.map((item) => {
              return (
                <li key={item.id}
                  className="flex items-center justify-center rounded-full border border-red-600 w-9 h-9 shadow-md shadow-red-600 hover:border-gray-600 hover:border-transparent"
                  style={{ transition: ".5s ease" }}
                >
                  <Link href={item.slug} target="_blank">
                    <Image src={item.img} alt={item.title} width={28} height={28} quality={70} />
                  </Link>
                </li>
              );
            })}
        </ul>
        <ul className="flex flex-col sm:flex-row items-center gap-7">
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
      </div>

      <p className="opacity-85 py-2 text-center">
        © Developed by
        <Link href="https://github.com/Abdurahmon086" className="text-red-300 font-semibold">
          Abdurahmon
        </Link>
        . 2024
      </p>
    </div>
  );
};

export default Footer;
