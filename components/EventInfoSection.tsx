/* eslint-disable @next/next/no-img-element */
function EventInfoSection() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center min-h-screen relative">
      <div className="w-3/4 text-center text-brandLight text-sm font-playfair items-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-brandLight text-6xl font-brittany mb-4">
            Akad
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-center font-playfair text-2xl">November</p>
            <div className="flex justify-between items-center">
              <div className="border-y py-2 border-y-brandLight w-1/3">
                <p>Minggu</p>
              </div>
              <div className="text-4xl w-1/3">27</div>
              <div className="border-y py-2 border-y-brandLight w-1/3">
                <p>08.00 - Selesai</p>
              </div>
            </div>
            <p className="text-center font-playfair text-2xl">2022</p>
          </div>
        </div>
        <img
          src="/assets/images/horizontal-love.png"
          alt="decor"
          className="m-auto my-8"
        />
        <div>
          <h2 className="text-center text-brandLight text-6xl font-brittany mb-4">
            Resepsi
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-center font-playfair text-2xl">November</p>
            <div className="flex justify-between items-center">
              <div className="border-y py-2 border-y-brandLight w-1/3">
                <p>Minggu</p>
              </div>
              <div className="text-4xl w-1/3">27</div>
              <div className="border-y py-2 border-y-brandLight w-1/3">
                <p>09.30 - Selesai</p>
              </div>
            </div>
            <p className="text-center font-playfair text-2xl">2022</p>
          </div>
        </div>
      </div>
      <div className="absolute -left-32 -top-20 ">
        <div className="w-64 h-64 bg-flower bg-no-repeat bg-center bg-contain scale-100 rotate-0" />
      </div>
      <div className="absolute -bottom-12 -right-24">
        <div className="w-48 h-48 bg-flower bg-no-repeat bg-center bg-contain -rotate-0" />
      </div>
    </div>
  );
}

export default EventInfoSection;
