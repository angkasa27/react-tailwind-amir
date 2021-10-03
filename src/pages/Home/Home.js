import React, { useEffect, useState } from "react";
import SVG, { Instagram, LinkedIn, WhatsApp } from "../../assets/svg";
import moment from "moment";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import { Footer, Nav, Sec1, Sec2, Sec3 } from "./constant";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Section1 />
      <div className="relative w-screen h-20 md:h-48 bg-green-100">
        <img
          src={SVG.Border1}
          alt="border"
          className="absolute z-10 transform scale-150 md:scale-110 "
        />
      </div>
      <Section2 />
      <div className="relative w-screen h-20  bg-blue-300">
        <img
          src={SVG.Border2}
          alt="border"
          className="absolute z-10 transform scale-125"
        />
      </div>
      <Section3 />
    </div>
  );
}

export function Section1() {
  return (
    <section
      id="sec1"
      className="sec-base bg-blue-100 flex justify-center relative"
    >
      <div className="md:flex md:justify-between md:items-center md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-xl md:h-screen md:w-full md:mx-16 md:pt-20">
        <div className="flex flex-col items-center px-4 pt-36 pb-20 md:px-0 md:pt-0 md:pb-0 md:items-start">
          <h2 className="h2 clas mb-12 md:mb-0">{Sec1.h2}</h2>
          <img src={SVG.Illustration} alt="illus" className="w-48 md:hidden" />
          <h1 className="h1 mt-8 md:mt-2">{Sec1.h1}</h1>
          <p className="text-center p px-5 mt-4 text-gray-500 md:px-0">
            {Sec1.desc}
          </p>
          <div className="flex justify-center mt-5">
            <a href={Sec1.button.href} className="btn-outline mr-2">
              {Sec1.button.name}
            </a>
            <Link
              activeClass="active"
              className="btn-outline"
              to="sec3"
              spy={true}
              smooth={true}
              duration={500}
            >
              contact me
            </Link>
          </div>
        </div>
        <img
          src={SVG.Illustration}
          alt="illus"
          className="w-80 hidden md:block"
        />
      </div>
    </section>
  );
}

export function Section2() {
  return (
    <section
      id="sec2"
      name="sec2"
      className="sec-base bg-green-100 flex justify-center"
    >
      <div className="flex flex-col justify-center py-32 px-4 md:px-0 md:mx-16 md:py-0 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="flex justify-between items-baseline">
          <h1 className="h1 text">{Sec2.h1}</h1>
          <p className="text-xs md:text-sm font-black text-blue-500">
            {Sec2.more}
          </p>
        </div>
        {/* <div className=" mt-4 overflow-x-scroll">
          <div className="flex w-180 pb-6">
            {content.map((v, idx) => (
              <Card data={{ ...v, idx }} key={idx} />
            ))}
          </div>
        </div> */}
        <div className=" mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          {Sec2.content.map((v, idx) => (
            <Card data={{ ...v, idx }} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Section3() {
  return (
    <section
      id="sec3"
      name="sec3"
      className="w-screen relative bg-blue-300 flex flex-col justify-center items-center h-screen90"
    >
      <div className="pt-5 pb-20 px-4 md:pb-0 md:pt-0 md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-xl w-full">
        <div className="flex justify-between items-center rounded-xl bg-white bg-opacity-50 w-full py-3 px-4 md:px-10 md:py-10">
          <div>
            <h1 className="h1">{Sec3.h1}</h1>
            <h1 className="p mt-1 text-gray-500">
              {Sec3.desc1 + " "} <br className="md:hidden" /> {Sec3.desc2}
            </h1>
          </div>
          <a href={Sec3.button.href} className="btn-main">
            {Sec3.button.name}
          </a>
        </div>
        <p className="p text-white mt-5 md:mt-10 text-center">
          {Sec3.location}
        </p>
        <h4 className="h4 text-white mt-0.5 md:mt-1 tracking-wide text-center">
          {Sec3.email}
        </h4>
        <h4 className="h4 text-white mt-0.5 md:mt-1 tracking-wider text-center">
          {Sec3.phone}
        </h4>

        <div className="mt-5 md:mt-10 flex justify-center items-center">
          <a
            href={Sec3.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="bg-white rounded-full w-10 h-10 bg-opacity-50"
          >
            <Instagram className=" text-blue-400 hover:text-blue-500" />
          </a>
          <a
            href={Sec3.instagram}
            target="_blank"
            rel="noreferrer"
            className="bg-white rounded-full w-10 h-10 bg-opacity-50 mx-4"
          >
            <WhatsApp className=" text-blue-400 hover:text-blue-500" />
          </a>
          <a
            href={Sec3.linkedin}
            target="_blank"
            rel="noreferrer"
            className="bg-white rounded-full w-10 h-10 bg-opacity-50"
          >
            <LinkedIn className=" text-blue-400 hover:text-blue-500" />
          </a>
        </div>
      </div>
      <div className="w-full py-4 bg-gray-700 flex justify-center p text-white absolute bottom-0">
        {Footer.text}
      </div>
    </section>
  );
}

export function Card({ data }) {
  let classes = " ";
  // if (data.idx < 3) classes = " mr-4";
  // else if (data.idx === 3) classes = " ";
  // else classes = " hidden";
  if (data.idx > 3) classes = " hidden";

  return (
    <div
      className={
        "bg-white rounded-xl w-full overflow-hidden shadow-lg " + classes
      }
    >
      <div className="max-h-28 md:max-h-60 overflow-hidden flex justify-center items-center">
        <img src={data.image} alt="dummy-img" className="w-full" />
      </div>
      <div className="p p-3">
        <h4 className="h4 font-black">{data.name}</h4>
        <p className="py-2 text-gray-500">{data.desc}</p>
        <p className="text-right ">{moment(data.date).format("DD MMM YYYY")}</p>
      </div>
    </div>
  );
}

Card.defaultProps = {
  data: {},
};

Card.propTypes = {
  data: PropTypes.object,
};

export function Navbar() {
  const [view, setView] = useState(false);
  const [classes, setClasses] = useState("");
  useEffect(() => {
    if (view) setClasses("");
    else setClasses(" hidden");
  }, [view]);

  return (
    <nav className="bg-white w-screen z-50 fixed shadow-md px-4 md:px-16">
      <div className="flex justify-between py-2 md:py-4">
        <img src={Nav.logo} className="w-10" alt="logo-main" />
        <div className="md:flex justify-center items-center hidden">
          {Nav.item.map((v) => (
            <a className="nav-text mx-5" href={v.href}>
              {v.name}
            </a>
          ))}
        </div>
        <svg
          onClick={() => setView(!view)}
          className="w-6 md:opacity-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
      <div className={"md:hidden" + classes}>
        {Nav.item.map((v) => (
          <a className="py-2 block font-black" href={v.href}>
            {v.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
