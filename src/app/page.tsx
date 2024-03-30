"use client";
import { NextPage } from "next";
import Image from "next/image";
import heroImage from "../../public/images/4.jpg";
import imgData from "@/database/imgData";
import { RevealWrapper } from "next-reveal";
import { ReactTyped } from "react-typed";
import MainButton from "@/components/ui/mainButton";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="">
      <section className="container mx-auto min-h-[100vh] py-28 md:py-40 lg:py-56 " id="/">
        <div className="hero grid grid-cols-1 gap-24 lg:gap-0 lg:grid-cols-2 items-center">
          <RevealWrapper origin="top" delay={200} duration={500} distance="50px" reset={true}>
            <div className="tile">
              <div className="">
                <p className="font-bold text text-2xl md:text-4xl">Hello, It's Me</p>
                <h1 className="font-bold text-4xl md:text-6xl text-red-600 my-2">Abdurahmon</h1>
                <p className="font-bold text-2xl md:text-4xl">
                  And I'm a
                  <span className="text-red-600 px-1">
                    <ReactTyped strings={[" Full Stuck developer"]} typeSpeed={60} backSpeed={100} loop className="font-bold" />
                  </span>
                </p>
              </div>
              <p className="mt-4 lg:w-[400px] xl:w-[600px] font-semibold text-base md:text-2xl">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
                amet.
              </p>
              <ul className="mt-4 flex gap-4">
                {imgData &&
                  imgData?.social.map((item) => {
                    return (
                      <li
                        key={item.id}
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
              <a href="/images/cv.pdf" download className="block w-max mt-6 main-btn bg-red-600">
                Download CV
              </a>
            </div>
          </RevealWrapper>
          <RevealWrapper origin="top" delay={200} duration={500} distance="50px" reset={true}>
            <Image src={heroImage} alt="software development image" className="hero-img mx-auto lg:mx-0 lg:ml-auto shadow-2xl shadow-red-600" quality={80} />
          </RevealWrapper>
        </div>
      </section>
      <section className="container mx-auto min-h-[100vh]" id="aboute">
        <div className="sectionStyle justify-center lg:justify-between gap-8 flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-[50%]">
            <RevealWrapper origin="top" delay={200} duration={500} distance="50px" reset={true}>
              <Image src="/images/blog.png" alt="blog image" height={700} width={500} className="w-full" />
            </RevealWrapper>
          </div>
          <div className="w-full lg:w-[50%]">
            <RevealWrapper origin="top" delay={200} duration={500} distance="50px" reset={true}>
              <h4 className="category-title">
                About <span className="text-red-600"> Me</span>
              </h4>
            </RevealWrapper>
            <RevealWrapper origin="top" delay={400} duration={500} distance="50px" reset={true}>
              <h5 className="text-xl lg:text-3xl font-bold -mt-5">Full Stuck Developer</h5>
            </RevealWrapper>
            <RevealWrapper origin="top" delay={600} duration={500} distance="50px" reset={true}>
              <p className="text-sm md:text-base lg:text-xl shadow-transparent mt-4 lg:mt-9 mb-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quam aliquam cumque sunt dolor magnam impedit enim exercitationem dolores ratione qui laboriosam
                doloremque quidem facilis minus quae corporis quod, necessitatibus aspernatur voluptates vel consequuntur non tempora. Vitae aperiam ea, sed optio eum eaque fugit
                libero impedit cum in inventore aspernatur!
              </p>
              <MainButton title="Read more" />
            </RevealWrapper>
          </div>
        </div>
      </section>
      <section className="container mx-auto" id="project">
        <div className="sectionStyle w-full 2xl:w-[80%] mx-auto">
          <div className="">
            <RevealWrapper origin="top" delay={200} duration={1000} distance="50px" reset={true}>
              <h4 className="text-center category-title">
                Latest <span className="text-red-600 text-center"> Project</span>
              </h4>
            </RevealWrapper>
            <RevealWrapper origin="bottom" delay={300} duration={1200} distance="50px" reset={true}>
              <ul className="flex justify-center flex-wrap gap-5 mt-6">
                {imgData.skill &&
                  imgData?.skill.slice(0, 6).map((item) => {
                    return (
                      <li key={item.id} className="card shadow-lg">
                        <Image src="/images/blog.png" alt="d" width={500} height={500} quality={75} className="card-img w-full h-full object-cover" />
                        <div className="card-inner flex flex-col items-center p-5 pt-5">
                          <h4 className="text-2xl lg:text-4xl font-bold mt-auto">Title</h4>
                          <p className="text-sm lg:text-xl mt-2 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minus aperiam accusamus voluptates blanditiis deserunt.
                          </p>
                          <MainButton title="View" />
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </RevealWrapper>
          </div>
        </div>
      </section>
      <section className="container mx-auto min-h-[100vh]" id="skill">
        <div className="sectionStyle flex-col justify-center">
          <RevealWrapper origin="top" delay={200} duration={500} distance="50px" reset={true}>
            <h4 className="category-title">
              My <span className="text-red-600"> skill</span>
            </h4>
          </RevealWrapper>
          <RevealWrapper
            rotate={{ x: 12, y: 40, z: 0 }}
            origin="top"
            delay={300}
            duration={700}
            distance="100px"
            reset={true}
            viewOffset={{ top: 0, right: 20, bottom: 0, left: 5 }}
          >
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-8">
              {imgData.skill &&
                imgData?.skill.map((item) => {
                  return (
                    <li key={item.id} className="skill-card">
                      <Image src={item.img} alt={item.title} width={100} height={100} quality={80} />
                      <h4 className="text-base lg:text-2xl font-bold mt-3">{item.title}</h4>
                    </li>
                  );
                })}
            </ul>
          </RevealWrapper>
        </div>
      </section>
      <section className="container mx-auto min-h-[100vh]" id="contact">
        <div className="sectionStyle flex-col justify-center">
          <RevealWrapper origin="top" delay={200} duration={500} distance="50px" reset={true} viewOffset={{ top: 0, right: 25, bottom: 0, left: 0 }}>
            <h4 className="category-title">
              Contact <span className="text-red-600"> Me!</span>
            </h4>
          </RevealWrapper>
          <div className="w-full lg:w-2/3">
            <RevealWrapper origin="bottom" delay={300} duration={1000} distance="100px" reset={true} viewOffset={{ top: 10, right: 10, bottom: 50, left: 0 }}>
              <form className="flex gap-4 flex-col ">
                <div className="flex gap-4 flex-col sm:flex-row ">
                  <input required type="text" placeholder="Full Name" className="sendInput w-full" />
                  <input required type="email" placeholder="Email Address" className="sendInput w-full" />
                </div>
                <input type="tel" placeholder="Mobile Number" className="sendInput" />
                <textarea name="message" placeholder="Your Message" cols={30} rows={10} id="message" className="sendInput"></textarea>
                <MainButton title="Send Message" />
              </form>
            </RevealWrapper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
