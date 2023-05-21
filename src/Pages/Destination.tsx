import { useState } from "react";
const Destination = () => {
  const destinations = [
    {
      title: "moon",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travelTime: "3 days",
      image: "/destination/image-moon.webp",
    },
    {
      title: "mars",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 MIL. km",
      travelTime: "9 months",
      image: "/destination/image-mars.webp",
    },
    {
      title: "europa",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. km",
      travelTime: "3 years",
      image: "/destination/image-europa.webp",
    },
    {
      title: "titan",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. km",
      travelTime: "7 years",
      image: "/destination/image-titan.webp",
    },
  ];
  const [destination, setDestination] = useState(destinations[0]);
  const { title, description, distance, travelTime, image } = destination;
  return (
    <div className="mt-6 lg:mt-16 flex flex-col justify-center text-center container lg:flex-row lg:text-left">
      <div className="flex flex-col items-center md:mt-10 lg:mt-0 lg:min-w-max lg:mr-24 xl:mr-36">
        <h5 className="text-White tracking-[2.36px] uppercase font-barlowCondensed md:text-left md:container md:text-xl lg:text-3xl lg:tracking-[4.72px]">
          <span className="text-White font-bold font-barlowCondensed mr-5 opacity-25">
            01
          </span>
          Pick your destination
        </h5>
        <img
          className="mt-8 lg:mt-16 lg:ml-20 w-44 md:w-80 lg:w-[445px]"
          src={image}
          alt={title}
        />
      </div>
      <div className="mt-6 md:mt-14 lg:mt-16">
        <div>
          <ul className="flex items-center justify-center lg:justify-start">
            {destinations.map((dest) => (
              <li
                className={`lg:hover:cursor-pointer ${
                  dest.title === title
                    ? "active"
                    : "lg:hover:active lg:hover:after:opacity-50"
                } mr-[26px] last:mr-0 tracking-[2.36px] uppercase text-sm md:text-base pb-2 after:transition-all after:duration-500`}
                key={dest.title}
                onClick={() => {
                  setDestination(dest);
                }}
              >
                {dest.title}
              </li>
            ))}
          </ul>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bellefair mt-5 md:mt-8 md:mb-2 uppercase text-White">
          {title}
        </h1>
        <p className="text-[0.938rem] leading-6 font-barlow lg:text-lg">
          {description}
        </p>
        <div className="h-[1px] bg-Bar w-full my-8  md:mt-12 md:mb-7"></div>
        <div className="md:flex md:justify-around md:items-center lg:justify-start">
          <div className="lg:mr-16">
            <p className="mb-3 uppercase font-barlowCondensed tracking-[2.36px] text-sm">
              avg. distance
            </p>
            <h5 className="text-White text-[1.75rem] uppercase font-bellefair">
              {distance}
            </h5>
          </div>
          <div className="mt-8 pb-6">
            <p className="mb-3 uppercase font-barlowCondensed tracking-[2.36px] text-sm">
              est. travel time
            </p>
            <h5 className="text-White text-[1.75rem] uppercase font-bellefair">
              {travelTime}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
