import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import iconsweb from "../public/iconsweb.png";
import consulting from "../public/nnetworks.png";
import Image from "next/image";
import web1 from "../public/vscode.png";
import git from "../public/icons8-github.svg";
import web2 from "../public/nextjs.png";
import web3 from "../public/astrojs.png";
import web4 from "../public/web3.png";
import web5 from "../public/movierecc.png";
import web6 from "../public/cloud.jpg";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Shubhankar Mahanta</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/port.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Spass</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Shubhankar Mahanta
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and more .
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Bag Packing for providing services for programming and Software
              needs.
            </p>
            <a href="https://github.com/Shubhankar4862">
              <Image
                width="100"
                className="relative mx-auto"
                height="100"
                src="https://img.icons8.com/ios-filled/128/github.png"
                alt="github"
              />
            </a>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400"></div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" alt="Image" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              What I like to Do{" "}
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              It all started few years back probably 5 years from when I was
              first introduced to Java in my school , then I took education into
              my own hands . I have had some CS50 , application courses and some
              other things.
              <span className="text-teal-500"> </span>
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"></p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={iconsweb} width={100} alt="Image" height={100} />
              <h3 className="text-2xl font-medium pt-8 pb-2  ">
                Web Development
              </h3>
              <p className="py-2">
                Prepare to be amazed as I unveil my arsenal of technological
                prowess. Brace yourself for the unveiling of my exceptional tech
                stack, ready to redefine possibilities and elevate experiences .
              </p>
              <h4 className="py-4 text-teal-600">Tech Stack I Use</h4>
              <div className="text-gray-800 text-center font-semibold py-1">
                {" "}
                <p className="text-teal-800">T3 </p> &nbsp;&nbsp; &nbsp;&nbsp;
                TypeScript &nbsp; NEXT.js &nbsp; tRPC &nbsp; Prisma &nbsp;{" "}
                <br /> Tailwind CSS &nbsp;NextAuth.js
              </div>
              <div className="text-gray-800  font-semibold py-1">
                {" "}
                <p className="text-teal-800">MERN </p>
                <pre>
                  {" "}
                  &nbsp;MongoDB&nbsp; ExpressJs&nbsp; Reactjs&nbsp; Nodejs
                </pre>{" "}
              </div>
              <div className="text-gray-800 font-semibold py-1">
                {" "}
                <p className="text-teal-800">Astro js </p>
                <p className="text-teal-800">HTML & SaSS </p>
              </div>
              {"  "}

              <p className="text-gray-800 py-1"> </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} alt="Image" height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Other Languages
              </h3>
              <p className="py-2">Newest and blazing fast of all</p>
              <h4 className="py-4 text-teal-600">Polyglot Tools I Use</h4>
              <p className="text-gray-800 py-1">Rust</p>
              <p className="text-gray-800 py-1">Golang</p>
              <p className="text-gray-800 py-1">Python , Java , C++</p>
              <p className="text-gray-800 py-1">Bash ( Linux )</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={consulting}
                className="rounded-md"
                width={100}
                height={100}
                alt="Image"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Popular Libraries and frameworks
              </h3>
              <p className="py-2">AI / ML frameworks & miscellaneous techs</p>
              <h4 className="py-4 text-teal-600">It&apos;s not over yet</h4>
              <p className="text-gray-800 py-1">PyTorch</p>
              <p className="text-gray-800 py-1">Keras</p>
              <p className="text-gray-800 py-1">Pandas</p>
              <p className="text-gray-800 py-1">Tensorflow + Js version</p>
            </div>
          </div>
          <div className="flex rounded-md text-center my-auto justify-center align-center text-3xl bg-[#e5e5e5]">
            <p className="pt-9">
              Checkout My Projects at &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            </p>{" "}
            <a href="https://github.com/Shubhankar4862">
              <Image
                width="100"
                className="relative mx-auto"
                height="100"
                src="https://img.icons8.com/ios-filled/128/github.png"
                alt="github"
              />
            </a>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              In the vast realm of technology, where innovation and advancement
              shape our future, I stand as a determined and passionate software
              developer. With a zeal for web development, AI, and software, I
              embark on a journey to create digital marvels that transcend
              expectations. As a newbie in this ever-evolving field, I bring
              fresh ideas and unwavering dedication to every project I
              undertake. Driven by a thirst for knowledge, I continuously refine
              my skills to unlock limitless potential. I am ready to contribute
              my expertise, adaptability, and creativity to a dynamic team,
              eager to shape the digital landscape with my code. Together, we
              can build a brighter tomorrow.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="Image"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="Image"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt="Image"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                alt="Image"
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                alt="Image"
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
                alt="Image"
              />
            </div>
            <div className="flex justify-center rounded-md p-4 align-center text-xl bg-[#dcfce7]">
              And Check out my blog materials / personal stories maybe you would
              like them Just below here ...
            </div>
            <div className="h-[7vh] w-[80vw] text-center p-4 bg-[#d4d4d8] rounded-md text-2xl text-[#0a0a0a] font-thin">
              <a
                href="https://site-steel-phi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://site-steel-phi.vercel.app/
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
