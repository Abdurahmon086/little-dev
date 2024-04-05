"use client";
import { NextPage } from "next";
import Image from "next/image";
import heroImage from "../../public/images/4.webp";
import imgData from "@/database/imgData";
import projectsData from "@/database/porojectData";
import { RevealWrapper } from "next-reveal";
import { ReactTyped } from "react-typed";
import MainButton from "@/components/ui/mainButton";
import Link from "next/link";
import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const Home: NextPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [succ, setSucc] = useState<boolean>(false);
  const [errText, setErrText] = useState<string>("");

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const textTester = (value: FormData) => {
    if (value.name.length < 3 || value.email.length < 3) {
      setErrText("Please enter more than 3 email or name.");
      setSubmitting(false);
      setSucc(true);
      setTimeout(() => {
        setSucc(false);
      }, 3000);
      return false;
    } else if (!value.email.includes("@") || !value.email.includes(".")) {
      setErrText("There is an error in the email, please correct it.");
      setSubmitting(false);
      setSucc(true);
      setTimeout(() => {
        setSucc(false);
      }, 3000);
      return false;
    }

    for (let i = 0; i < value.phone.length; i++) {
      if (!(((value.phone.charCodeAt(i) >= 48 && value.phone.charCodeAt(i) <= 57) || (value.phone.charCodeAt(i) === 43 && value.phone[0] === "+")) && value.phone[0] === "+")) {
        setErrText("type phone numberdi correctly (+) and the numbers should be.");
        setSubmitting(false);
        setSucc(true);
        setTimeout(() => {
          setSucc(false);
        }, 3000);
        return false;
      }
    }

    setSucc(false);
    setErrText("");
    return true;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);

    if (textTester(formData)) {
      try {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data?.success) {
          setSucc(true);
          setTimeout(() => {
            setSucc(false);
          }, 3000);

          setSubmitting(false);
          setFormData({
            name: "",
            phone: "",
            email: "",
            message: "",
          });
        } else if (data?.success == false) {
          console.error(data?.message);
        }
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
  };

  return (
    <div className="">
      {succ ? (
        <span className={`fixed top-20 z-50 right-5 font-bold text-white py-3 px-5 rounded-lg ${errText ? " bg-red-600" : "bg-green-600"}`}>
          {errText ? "There was an error sending the email" : "Email sent successfully"}
        </span>
      ) : (
        ""
      )}
      <section className="container mx-auto min-h-[100vh] py-28 md:py-40 lg:py-56 " id="/">
        <div className="hero grid grid-cols-1 gap-24 lg:gap-0 lg:grid-cols-2 items-center">
          <RevealWrapper origin="top" delay={200} duration={300} distance="50px" reset={true}>
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
                Although I may be new to the industry, my passion for full-stack development drives me to continuously learn and improve my skills. I have experience working with
                Next.js, Nuxt.js, and Nest.js frameworks.
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
          <RevealWrapper origin="top" delay={200} duration={300} distance="50px" reset={true}>
            <Image
              src={heroImage}
              alt="software development image"
              className="hero-img mx-auto lg:mx-0 lg:ml-auto shadow-2xl shadow-red-600"
              quality={75}
              priority
              placeholder="blur"
            />
          </RevealWrapper>
        </div>
      </section>
      <section className="container mx-auto min-h-[100vh]" id="aboute">
        <div className="sectionStyle justify-center lg:justify-between gap-8 flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-[50%]">
            <RevealWrapper origin="top" delay={200} duration={400} distance="50px" reset={true}>
              <Image src="/images/blog.webp" alt="blog image" height={700} width={500} quality={70} className="w-full" />
            </RevealWrapper>
          </div>
          <div className="w-full lg:w-[50%]">
            <RevealWrapper origin="top" delay={200} duration={300} distance="50px" reset={true}>
              <h4 className="category-title">
                About <span className="text-red-600"> Me</span>
              </h4>
            </RevealWrapper>
            <RevealWrapper origin="top" delay={400} duration={300} distance="50px" reset={true}>
              <h5 className="text-xl lg:text-3xl font-bold -mt-5">Full Stuck Developer</h5>
            </RevealWrapper>
            <RevealWrapper origin="top" delay={600} duration={300} distance="50px" reset={true}>
              <p className="text-sm md:text-base lg:text-xl shadow-transparent mt-4 lg:mt-9 mb-2">
                I am a motivated and ambitious full-stack developer with a strong educational background in Robotics and Mechatronics from TATU. Throughout my studies, I have
                gained a solid foundation in programming languages such as Node.js, TypeScript, and GraphQL. I am also proficient in front-end development using React.js. If you
                are looking for a dedicated full-stack developer who is ready to take on new challenges, please reach out. I look forward to discussing how we can collaborate on
                exciting projects together.
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
                {projectsData &&
                  projectsData.map((item) => {
                    return (
                      <li key={item.id} className="card shadow-lg">
                        <Image
                          src={item.img ? item.img : " /images/blog.webp"}
                          alt={item.title}
                          width={500}
                          height={500}
                          quality={50}
                          className="card-img w-full h-full object-cover"
                        />
                        <div className="card-inner flex flex-col items-center p-5 pt-5">
                          <h4 className="text-2xl lg:text-4xl font-bold mt-auto">{item.title}</h4>
                          <p className="text-sm lg:text-xl mt-2 text-center text-compres">{item.text}</p>
                          <MainButton title="View" href={item.link} />
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
          <RevealWrapper origin="top" delay={200} duration={300} distance="50px" reset={true}>
            <h4 className="category-title">
              My <span className="text-red-600"> skill</span>
            </h4>
          </RevealWrapper>
          <RevealWrapper
            rotate={{ x: 12, y: 40, z: 0 }}
            origin="top"
            delay={300}
            duration={500}
            distance="100px"
            reset={true}
            viewOffset={{ top: 0, right: 20, bottom: 0, left: 5 }}
          >
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-8">
              {imgData.skill &&
                imgData?.skill.map((item) => {
                  return (
                    <li key={item.id} className="skill-card">
                      <Image src={item.img} alt={item.title} width={100} height={100} quality={50} />
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
          <RevealWrapper origin="top" delay={200} duration={300} distance="50px" reset={true} viewOffset={{ top: 0, right: 25, bottom: 0, left: 0 }}>
            <h4 className="category-title">
              Contact <span className="text-red-600"> Me!</span>
            </h4>
          </RevealWrapper>
          <div className="w-full lg:w-2/3">
            <div className="bg-red-950 border-red-500 border-2 rounded-lg p-5 mb-5" style={errText ? { display: "block" } : { display: "none" }}>
              <p className="font-semibold text-xl">Errorr : {errText}</p>
            </div>
            <RevealWrapper origin="bottom" delay={300} duration={500} distance="100px" reset={true} viewOffset={{ top: 10, right: 10, bottom: 50, left: 0 }}>
              <form className="flex gap-4 flex-col" onSubmit={handleSubmit}>
                <div className="flex gap-4 flex-col sm:flex-row ">
                  <input name="name" value={formData.name} required type="text" placeholder="Full Name" className="sendInput w-full" onChange={handleInputChange} />
                  <input name="email" value={formData.email} type="email" placeholder="Email Address" className="sendInput w-full" onChange={handleInputChange} />
                </div>
                <input name="phone" value={formData.phone} type="tel" placeholder="+998 99 123 45 67" className="sendInput" onChange={handleInputChange} />
                <textarea
                  name="message"
                  value={formData.message}
                  placeholder="Your Message"
                  cols={30}
                  rows={10}
                  id="message"
                  className="sendInput"
                  onChange={handleInputChange}
                ></textarea>
                <MainButton types="submit" title="Send Message" disabled={submitting} />
              </form>
            </RevealWrapper>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
