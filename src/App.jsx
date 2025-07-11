import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function App() {
  //states to store the current person and if the mouse is hovered or not
  const [isHovered, setIsHovered] = useState(null);
  const [curPerson, setCurPerson] = useState(1);

  //functions to handle the forward and backward btn
  function handleForwardBtn() {
    setCurPerson(2);
  }
  function handleBackwardBtn() {
    setCurPerson(1);
  }

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex flex-col gap-3">
        <p className="text-sm">Your SkillShikshya Journey</p>
        <div className="font-bold text-2xl flex gap-1 mb-3 -mt-1">
          <div className="text-green-400">Step</div>
          <div>In.</div>
          <div className="text-green-400">Skill</div>
          <div>Up.</div>
          <div className="text-green-400">Stand</div>
          <div>Out.🚀</div>
        </div>
        <div className="grid grid-cols-2 gap-y-5 gap-x-5 ">
          {/* Login to render the another div (subtract) when the mouse is hovering */}
          <div
            onMouseEnter={() => setIsHovered(1)}
            onMouseLeave={() => setIsHovered(null)}
            className="relative"
          >
            {isHovered === 1 && (
              <div>
                <img
                  src="/Subtract.png"
                  className={`absolute w-[425px] h-62 transition-opacity duration-600   ${
                    isHovered === 1 ? "opacity-100" : "opacity-0"
                  } `}
                />
                <button className="absolute top-1/2 -translate-y-1/2 -left-1 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.4)] w-12 h-12 flex justify-center items-center">
                  <IoIosArrowRoundBack className="text-black text-2xl font-extrabold" />
                </button>
                <button className="absolute top-1/2 -translate-y-1/2 -right-1 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.4)] w-12 h-12 flex justify-center items-center">
                  <IoIosArrowRoundForward className="text-black text-2xl font-extrabold" />
                </button>
                <img src="/wow.png" className="absolute w-20 top-5 left-10" />
                <img
                  src="/person.png"
                  className="absolute w-70 h-58 top-4 left-3"
                />
                <img
                  src="/wow.png"
                  className="absolute w-20 bottom-3 right-12 rotate-70"
                />

                <p className="absolute right-8 top-10 text-sm text-white font-semibold">
                  Clarity unclocked— <br />
                  stickers, sips and skills <br />
                  all in one go!
                </p>
              </div>
            )}
            <div
              className={`relative bg-red-400 rounded-2xl w-[425px] h-62 flex justify-end items-center ${
                isHovered === 1
                  ? "-translate-x-full opacity-0 transition-all ease-in-out duration-600"
                  : ""
              }`}
            >
              <img
                src="/group1.png"
                className="w-58 h-72 absolute -left-16 top-2 animate-float"
              />
              <div>
                <div className="flex flex-col gap-2 h-full text-right text-white p-4">
                  <h1 className="font-bold text-2xl">Start with Clarity</h1>
                  <p className="font-semibold ">
                    Step into a better learning path.
                  </p>
                  <p className="text-sm">
                    Overwhelemed by too many learning <br /> options?
                    SkillShikshya provides a clear,
                    <br /> curated roadmap from the start. Whether <br />
                    you're a begineer or upskilling, we have a <br />
                    path tailored to your growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => setIsHovered(2)}
            onMouseLeave={() => setIsHovered(null)}
            className="relative"
          >
            {isHovered === 2 && (
              <div className="pointer-events-auto">
                <img
                  src="/Subtract1.png"
                  className={`absolute w-[425px] h-62 transition-opacity duration-600   ${
                    isHovered === 2 ? "opacity-100" : "opacity-0"
                  } `}
                />
                <button
                  className="absolute top-1/2 -translate-y-1/2 -left-1 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.4)] w-12 h-12 flex justify-center items-center cursor-pointer"
                  onClick={handleBackwardBtn}
                >
                  <IoIosArrowRoundBack className="text-black text-2xl font-extrabold cursor-pointer" />
                </button>
                <button
                  className="absolute top-1/2 -translate-y-1/2 -right-1 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.4)] w-12 h-12 flex justify-center items-center cursor-pointer"
                  onClick={handleForwardBtn}
                >
                  <IoIosArrowRoundForward className="text-black text-2xl font-extrabold cursor-pointer" />
                </button>
                <img
                  src={`/person${curPerson}.png`}
                  className={`${
                    curPerson === 1
                      ? "absolute w-92 h-53 top-9 right-1"
                      : "absolute top-6 h-56 left-2  "
                  }`}
                />
                {curPerson === 1 ? (
                  <p className="absolute left-13 top-8  text-white font-semibold">
                    Focused faces—learning
                    <br />
                    mode:ON
                  </p>
                ) : (
                  <p className="absolute text-white font-semibold top-7 left-18 text-center">
                    Laptops, lessons and a whole lot of
                    <br />
                    growth!
                  </p>
                )}
              </div>
            )}

            <div
              className={`relative bg-blue-400 rounded-2xl w-[425px] h-62 flex jusfity-start items-center  ${
                isHovered === 2
                  ? "-translate-x-full opacity-0 transition-all ease-in-out duration-600"
                  : ""
              }`}
            >
              {" "}
              <img
                src="/group2.png"
                className="w-50 h-74 absolute -right-5 top-2 animate-float"
              />
              <div>
                <div className="flex flex-col gap-2 h-full text-left text-white p-4">
                  <h1 className="font-bold text-2xl">Learn by Doing</h1>
                  <p className="font-semibold mb-1">
                    Practical skills, real projects.
                  </p>
                  <p className="text-sm">
                    Theory is great, but action is better. At <br />
                    SkillShikshya, you learn by doing. Hands-on <br />
                    projects and real-world scenarios help you
                    <br /> build, break, and create—leading to true
                    <br />
                    mastery.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-purple-900 rounded-2xl w-[425px] h-62 flex justify-end items-center">
            {" "}
            <img
              src="/group3.png"
              className="w-58 h-58 absolute -left-13 top-16 animate-float"
            />
            <div>
              <div className="flex flex-col gap-2 h-full text-right text-white p-4">
                <h1 className="font-bold text-2xl">Get Mentored & Supported</h1>
                <p className="font-semibold ">You're not learning alone.</p>
                <p className="text-sm">
                  Stuck or need feedback? SkillShikshya's
                  <br />
                  community of mentors and learners
                  <br /> has your back with live support, <br /> interactive
                  discussions, and expert <br /> insights. You're never on your
                  own.
                </p>
              </div>
            </div>
          </div>
          <div className="relative bg-amber-600 rounded-2xl w-[425px] h-62 flex justify-start items-center">
            <img
              src="/group4.png"
              className="w-58 h-58 absolute -right-7 top-13 animate-float"
            />
            <div>
              <div className="flex flex-col gap-2 h-full text-left text-white p-4">
                <h1 className="font-bold text-2xl">Achieve & Showcase</h1>
                <p className="font-semibold ">
                  Build your portfolio, get job-ready.
                </p>
                <p className="text-sm">
                  Your journey ends with achievement. Each <br />
                  completed project builds a portfolio
                  <br />
                  showcasing your skills and job readiness, <br />
                  bringing you closer to that dream job, <br />
                  promotion, or your own venture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
