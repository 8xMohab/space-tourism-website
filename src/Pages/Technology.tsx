import { useState } from "react";
import NumberSlider from "../Components/NumberSlider";

const Technology = () => {
  const technologies = [
    {
      title: "launch vehicle",
      paragraph:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: "/technology/image-launch-vehicle-portrait.jpg",
      imageLandscape: "/technology/image-launch-vehicle-landscape.jpg",
    },
    {
      title: "spaceport",
      paragraph:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      image: "/technology/image-spaceport-portrait.jpg",
      imageLandscape: "/technology/image-spaceport-landscape.jpg",
    },
    {
      title: "space capsule",
      paragraph:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      image: "/technology/image-space-capsule-portrait.jpg",
      imageLandscape: "/technology/image-space-capsule-landscape.jpg",
    },
  ];
  const [technology, setTechnology] = useState(technologies[0]);
  const { title, paragraph, image, imageLandscape } = technology;
  return (
    <div className="text-center mt-6">
      <h5 className="text-White tracking-[2.36px] uppercase font-barlowCondensed md:text-left md:container md:text-xl md:mt-10 lg:text-3xl lg:tracking-[4.72px] lg:ml-32">
        <span className="text-White font-bold font-barlowCondensed mr-5 opacity-25">
          03
        </span>
        space launch 101
      </h5>
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:container lg:pr-0 lg:mr-0">
        <div className="container lg:px-0 lg:text-left lg:flex lg:mt-28 lg:ml-32">
          <ul className="mt-9 md:mt-14 flex items-center justify-center mb-7 md:mb-11 lg:justify-start lg:flex-col lg:m-0 lg:mr-20">
            {technologies.map((tech, index) => (
              <li
                key={tech.title}
                className="lg:hover:cursor-pointer"
                onClick={() => {
                  setTechnology(tech);
                }}
              >
                <NumberSlider
                  index={index + 1}
                  active={tech.title === title ? true : false}
                />
              </li>
            ))}
          </ul>
          <div>
            <h5 className="text-sm md:text-base tracking-[2.36px] uppercase font-barlowCondensed ">
              the terminology...
            </h5>
            <h1 className="mt-2 md:mt-4 mb-4 font-bellefair text-2xl md:text-5xl text-White uppercase">
              {title}
            </h1>
            <p className="font-barlow leading-6 md:leading-7 md:w-3/4 md:mx-auto lg:mx-0">
              {paragraph}
            </p>
          </div>
        </div>
        <picture className="mt-8 md:mt-16 lg:mt-7 lg:self-start lg:w-1/2">
          <source media="(min-width:1024px)" srcSet={image} />
          <img className="w-full" src={imageLandscape} alt={title} />
        </picture>
      </div>
    </div>
  );
};

export default Technology;
