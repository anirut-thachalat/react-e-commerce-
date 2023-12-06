function Hero() {
  return (
    <div className="hero w-[90%] pt-[80px] mb-10 bg-slate-100">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold text-orange-500">
            50% off everything
          </h1>
          <p className="py-6">
            Online shopping is now a settled part of our daily routine despite
            differences in internet speed and evolution globally. With rising
            online adoption rates across regions and generations, e-commerce is
            only primed to accelerate in popularity.
          </p>
          <button className="btn btn-primary cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
