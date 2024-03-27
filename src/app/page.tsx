import { Metadata, NextPage } from "next";
import Image from "next/image";
import heroImage from "../../public/images/heroImage.png";

export const metadata: Metadata = {
  title: "Little dev | ♥",
};

const Home: NextPage = () => {
  const imgData = [
    {
      id: 1,
      img: "/images/javascript.png",
    },
    {
      id: 2,
      img: "/images/vue.png",
    },
    {
      id: 3,
      img: "/images/react.png",
    },
    {
      id: 4,
      img: "/images/ts-img.png",
    },
    {
      id: 5,
      img: "/images/nodejs.png",
    },
    {
      id: 6,
      img: "/images/postgrase.png",
    },
    {
      id: 5,
      img: "/images/github.png",
    },
  ];

  return (
    <div className="flex-1">
      <section className="container mx-auto">
        <div className="hero flex justify-between items-center">
          <div className="">
            <h1 className="font-bold text-green-600 text-6xl w-[700px]">
              Hi, I am <span className="text-blue-500">Abdurahmon </span> Software development
            </h1>
            <p className="mt-4 text- w-[600px] font-semibold text-xl">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
            <button className=" mt-5 main-btn bg-green-900">Download Resume</button>
          </div>
          <Image src={heroImage} alt="software development image" height={700} />
        </div>
      </section>
      <section className="container mx-auto">
        <ul className="flex items-center justify-between gap-4">
          {imgData.map((item) => {
            return (
              <li key={item.id}>
                <Image src={item.img} alt="a" width={100} height={100} />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Home;
