const Home = () => {
  return (
    <div className="pt-12 md:pt-28 text-center container lg:flex lg:text-left lg:justify-between lg:h-full lg:items-end lg:pb-32 md:h-full  md:justify-between md:flex md:flex-col lg:flex-row">
      <div className="text-box lg:w-[450px] lg:h-min">
        <h5 className="heading-5 text-base lg:heading-5 md:text-xl">
          So, you want to travel to
        </h5>
        <h1 className="heading-1 text-[5rem] md:heading-1 md:leading-normal text-White my-4 md:mt-6">
          Space
        </h1>
        <p className="paragraph lg:leading-8 md:text-base md:leading-7 md:w-2/3 lg:w-auto md:mx-auto">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="relative md:mb-24 before:absolute before:w-[450px] before:h-[450px] before:bg-White before:rounded-full before: before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:opacity-10 mt-20 before:scale-0 lg:hover:before:scale-100 w-min mx-auto before:transition-all before:duration-500 rounded-full lg:m-0 h-min xl:mr-32 2xl:mr-48">
        <button className="w-40 md:w-60 md:h-60 lg:w-72 lg:h-72 lg:text-4xl h-40 bg-White text-DarkBg rounded-full home-button relative z-10 md:text-4xl">
          <a href="/destination">Explore</a>
        </button>
      </div>
    </div>
  );
};

export default Home;
