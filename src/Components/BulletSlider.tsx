type Props = {
  active: Boolean
}

const BulletSlider = ({active}: Props) => {
  return (
    <div
      className={`w-[10px] h-[10px] lg:w-4 lg:h-4 bg-White ${
        active ? "opacity-100" : "opacity-20"
      } rounded-full mr-4 lg:hover:cursor-pointer lg:hover:opacity-50 transition-all duration-500`}
    ></div>
  );
}
export default BulletSlider