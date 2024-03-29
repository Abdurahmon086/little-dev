import Link from "next/link";
import navData from "@/database/navData";
import imgData from "@/database/imgData";
import Image from "next/image";

const Footer = () => {
  const fooCategory = "text-xl  font-bold ";
  return (
    <div className="container mx-auto">
      <div className="flex justify-between gap-20 py-10">
        <div className="flex flex-col gap-5">
          <Link href="/" className=" font-black text-4xl">
            Little-dev
          </Link>
          <p className=" w-96">
            When an unknown prnoto sans took a galley and scrambled it to make specimen book not only five When an unknown prnoto sans took a galley and scrambled it to five
            centurie.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h4 className={fooCategory}>Categories</h4>
          <ul className="flex flex-col gap-3">
            {navData &&
              navData.map((item) => {
                return (
                  <li>
                    <Link href={`#${item.title.toLocaleLowerCase()}`} key={item.id} className="text-small-light">
                      {item.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="flex flex-col gap-5 ">
          <h4 className={fooCategory}>Newsletter</h4>
          <p className=" w-96">Sign up to be first to receive the latest stories inspiring us, case studies, and industry news.</p>
          <form className="flex items-center gap-2">
            <div className="relative flex">
              <img src="/images/email.svg" alt="email icon" className="formInput-wrapper" />
              <input required type="email" placeholder="Email adress" className="formInput " />
            </div>
            <button className="formBtn bg-red-600">
              Subscribe <img src="/images/right.svg" alt="right icon" className="w-4 h-4" />
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-5 ">
          <h4 className={fooCategory}>Social</h4>
          <ul className="flex gap-4">
            {imgData &&
              imgData?.social.map((item) => {
                return (
                  <li
                    className="flex items-center justify-center rounded-full border border-red-600 w-9 h-9 shadow-md shadow-red-600 hover:border-gray-600 hover:border-transparent"
                    style={{ transition: ".5s ease" }}
                  >
                    <Link href={item.slug} target="_blank">
                      <Image src={item.img} alt={item.title} width={28} height={28} />
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="border-t-2">
        <p className=" opacity-85 py-2 text-center">
          © Developed by
          <Link href="https://github.com/Abdurahmon086" className="text-red-300 font-semibold">
            Abdurahmon
          </Link>
          . 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
