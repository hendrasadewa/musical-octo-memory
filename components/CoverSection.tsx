/* eslint-disable @next/next/no-img-element */
function CoverSection() {
  return (
    <div className="flex flex-col justify-around py-16 items-center h-screen relative">
      <h1 className="text-xl font-playfair uppercase text-brandLight">
        The Wedding of
      </h1>

      <img
        src="/assets/images/logo.png"
        alt="decor"
        className="w-3/4 lg:w-72"
      />

      <div className="flex gap-0 items-center">
        <div className="flex flex-col items-center text-brandLight text-sm font-playfair">
          <span>08.00 WIB</span>
          <span>Hari Minggu</span>
        </div>
        <div className="divider divider-horizontal w-0 before:bg-brandLight after:bg-brandDark" />
        <div className="flex flex-col items-center text-brandLight text-sm font-playfair">
          <span className="text-2xl">27</span>
          <span className="text-md">November</span>
          <span className="text-2xl">2022</span>
        </div>
        <div className="divider divider-horizontal w-0 before:bg-brandLight after:bg-brandDark" />
        <div className="flex flex-col items-center text-brandLight text-sm font-playfair">
          <span>Purbayan RT4</span>
          <span>RW1 singopuran</span>
          <span>kartasura</span>
        </div>
      </div>
      <div className="absolute -left-32 -top-32 ">
        <img
          src="/assets/images/flower-circle.png"
          alt="decor"
          className="w-64 h-64"
        />
      </div>
      <div className="absolute -right-32 -top-32">
        <img
          src="/assets/images/flower-circle.png"
          alt="decor"
          className="h-64 object-cover rotate-90"
        />
      </div>
    </div>
  );
}

export default CoverSection;
