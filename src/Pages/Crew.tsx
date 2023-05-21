import BulletSlider from "../Components/BulletSlider";
import { useState } from "react";
const Crew = () => {
  const crew = [
    {
      name: "douglas hurley",
      title: "commander",
      description:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: "/crew/image-douglas-hurley.webp",
    },
    {
      name: "mark shuttleworth",
      title: "Mission Specialist",
      description:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: "/crew/image-mark-shuttleworth.webp",
    },
    {
      name: "victor glover",
      title: "PILOT",
      description:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      image: "/crew/image-victor-glover.webp",
    },
    {
      name: "anousheh ansari",
      title: "Flight Engineer",
      description:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      image: "/crew/image-anousheh-ansari.webp",
    },
  ];
  const [crewMember, setCrewMember] = useState(crew[0]);
  const { name, title, description, image } = crewMember;
  return (
    <div className="container text-center mt-6 md:flex-1 lg:text-left lg:ml-32 lg:flex md:mt-16 lg:mt-20">
      <div className="lg:mb-20 lg:hidden">
        <h5 className="text-White tracking-[2.36px] uppercase font-barlowCondensed md:text-left md:container lg:p-0 md:text-xl lg:text-3xl lg:tracking-[4.72px]">
          <span className="text-White font-bold font-barlowCondensed mr-5 opacity-25">
            02
          </span>
          Meet your crew
        </h5>
      </div>
      <div className="flex flex-col-reverse md:flex-col md:h-full items-center mt-8 lg:mt-0 lg:items-start">
        <div className="lg:mb-20 md:hidden lg:block">
          <h5 className="text-White tracking-[2.36px] uppercase font-barlowCondensed md:text-left md:container lg:p-0 md:text-xl lg:text-3xl lg:tracking-[4.72px]">
            <span className="text-White font-bold font-barlowCondensed mr-5 opacity-25">
              02
            </span>
            Meet your crew
          </h5>
        </div>
        <div className="md:mb-20">
          <h5 className="text-White opacity-50 font-bellefair uppercase md:text-2xl lg:text-3xl">
            {title}
          </h5>
          <h2 className="text-White font-bellefair text-2xl uppercase mt-2 mb-4 md:text-5xl xl:text-6xl">
            {name}
          </h2>
          <p className="font-barlow leading-6 md:w-3/4 md:mx-auto lg:mx-0 lg:leading-8 lg:text-lg">
            {description}
          </p>
        </div>
        <ul className="flex my-8 lg:mt-0 md:my-10 lg:mb-24">
          {crew.map((member) => (
            <li
              key={member.name}
              onClick={() => {
                setCrewMember(member);
              }}
            >
              <BulletSlider active={member.name === name ? true : false} />
            </li>
          ))}
        </ul>
        <div className="w-full flex justify-center after:w-full after:h-[1px] after:absolute after:bg-Bar relative after:bottom-0 flex-1 md:items-end lg:hidden">
          <img className="h-60 md:h-full" src={image} alt={name} />
        </div>
      </div>
      <div className="container flex items-end xl:mr-6">
        <img className="hidden lg:block" src={image} alt={title} />
      </div>
    </div>
  );
};

export default Crew;
