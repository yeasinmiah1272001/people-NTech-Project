import { motion } from "framer-motion";
import Container from "../Container/Container";
import img1 from "../../assets/Screenshot_2.png";
import { TbBrandGithub } from "react-icons/tb";
import { AiOutlineYoutube } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";

const Project = () => {
  return (
    <Container id="Project" className="py-16 text-lg space-y-6">
      <h1 className="text-2xl font-semibold text-lightColor mb-6">
        <span className="mr-2 text-designColor">03.</span> Where I have worked
        <span className="text-gray-500"> ______________</span>
      </h1>

      <div className="w-full flex flex-col items-center justify-center gap-28">
        {/* Project One */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col xl:flex-row gap-6"
        >
          <a
            className="w-full xl:w-1/2 relative group"
            href="https://fretful-temper.surge.sh/"
          >
            <div>
              <img
                className="w-full transition duration-300 transform hover:scale-110 rounded-xl h-80 object-contain"
                src={img1}
                alt="Project Screenshot"
              />
              <div className="absolute w-full bg-lightColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right md:-ml-36 lg:-ml-48 z-10"
          >
            <div>
              <p className="font-bodyFont text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Book-Store 2.0</h3>
            </div>
            <p className="text-sm hover:text-designColor bg-[#112240] p-2 md:p-6 rounded-md transition  transform hover:scale-105">
              An Amazon clone website for visualizing personalized Amazon
              website. View your products, Add your account with{" "}
              <span className="text-textGreen">O-auth</span> and then make the
              purchase using <span className="text-textGreen">Stripe</span>.
            </p>
            <ul className="text-xs md:text-sm  tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Next.js
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Typescript
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Next-auth
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Stripe
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Vercel Deployment
              </li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300 hover:text-designColor transition  transform hover:scale-150"
                href="https://github.com/yeasinmiah1272001/backend/tree/main/Book-store"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300 hover:text-designColor transition  transform hover:scale-150"
                href="https://github.com/yeasinmiah1272001/backend/tree/main/Book-store"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300 hover:text-designColor transition  transform hover:scale-150"
                href="https://fretful-temper.surge.sh/"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Project Two */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col xl:flex-row-reverse gap-6"
        >
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://fretful-temper.surge.sh/"
          >
            <div>
              <img
                className="w-full h-80 transition duration-300 transform hover:scale-110  object-contain rounded-2xl"
                src={img1}
                alt="Amazon Project Screenshot"
              />
              <div className="absolute w-full bg-lightColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10"
          >
            <div>
              <p className="font-titleFont text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Book-Store</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-48 transition hover:text-designColor  transform hover:scale-105 ">
              A fully functional Cyber Security Blog where you can view the
              latest posts and <span className="text-textGreen">comments</span>{" "}
              on it by sharing your ideas. You can also add your own{" "}
              <span className="text-textGreen">post</span> by logging into the
              portal.
            </p>
            <ul className="text-xs md:text-sm font-bodyFont tracking-wide flex gap-2 md:gap-5 justify-between text-darktext">
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Next.js
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Typescript
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Next-auth
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Stripe
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Vercel Deployment
              </li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300 hover:text-designColor transition  transform hover:scale-150"
                href="https://github.com/yeasinmiah1272001/backend/tree/main/Book-store"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300 hover:text-designColor transition  transform hover:scale-150"
                href="https://github.com/yeasinmiah1272001/backend/tree/main/Book-store"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300 hover:text-designColor transition  transform hover:scale-150"
                href="https://fretful-temper.surge.sh/"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Project Three */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col xl:flex-row gap-6"
        >
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://fretful-temper.surge.sh/"
          >
            <div>
              <img
                className="w-full h-80 transition duration-300 transform hover:scale-110 object-contain rounded-2xl"
                src={img1}
                alt="Amazon Project Screenshot"
              />
            </div>
          </a>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-48 z-10"
          >
            <div>
              <p className="font-bodyFont text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Book-Store 2.0</h3>
            </div>
            <p className="text-sm hover:text-designColor bg-[#112240] p-2 md:p-6 rounded-md transition  transform hover:scale-105">
              An Amazon clone website for visualizing personalized Amazon
              website. View your products, Add your account with{" "}
              <span className="text-textGreen">O-auth</span> and then make the
              purchase using <span className="text-textGreen">Stripe</span>.
            </p>
            <ul className="text-xs md:text-sm font-bodyFont tracking-wide flex gap-2 md:gap-5 justify-between ">
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Next.js
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Typescript
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Next-auth
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Stripe
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Vercel Deployment
              </li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300 hover:text-designColor transition  transform hover:scale-150"
                href="https://github.com/yeasinmiah1272001/backend/tree/main/Book-store"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300 hover:text-designColor transition  transform hover:scale-150"
                href="https://github.com/yeasinmiah1272001/backend/tree/main/Book-store"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300 hover:text-designColor transition  transform hover:scale-150"
                href="https://fretful-temper.surge.sh/"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

export default Project;
