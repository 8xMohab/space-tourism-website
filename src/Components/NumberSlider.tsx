
type Props = {
  index: Number,
  active: Boolean
}

const NumberSlider = ({index, active}: Props) => {
  return (
    <div className={`w-10 md:w-16 md:h-16 md:text-2xl h-10 mr-4 ring-1 ring-White ring-opacity-25 lg:hover:ring-opacity-100 lg:w-20 lg:h-20 rounded-full flex items-center justify-center ${active? "bg-White text-DarkBg" : ""} lg:mr-0 lg:mb-8 transition-all duration-500`}>
      <p>{`${index}`}</p>
    </div>
  )
}

export default NumberSlider