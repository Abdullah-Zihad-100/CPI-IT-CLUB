import WaveAnimation from "./Wave";

const Banner = () => {
    return (
      <div className="bg-blue-700 w-full pt-30">
        <div className="text-white px-6 max-w-7xl mx-auto">
          <h3 className="md:text-5xl text-2xl font-primary font-[500]">CPI</h3>
          <h2 className="text-5xl font-bold md:text-9xl">IT CLUB</h2>
          <p className="text-xl md:text-2xl">Bright Future Loading...</p>

        </div>
<WaveAnimation/>
      </div>
    );
}
export default Banner;