import DateDisplay from './DateDisplay';

/* eslint-disable @next/next/no-img-element */
function EventInfoSection() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center min-h-screen relative">
      <div className="w-3/4 text-center text-brandLight text-sm font-playfair items-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-brandLight text-6xl font-brittany mb-6">
            Akad
          </h2>
          <DateDisplay
            day="Minggu"
            date="27"
            month="November"
            year="2022"
            startTime="08.30"
            endTime="Selesai"
          />
        </div>
        <img
          src="/assets/images/horizontal-love.png"
          alt="decor"
          className="m-auto my-8"
        />
        <div>
          <h2 className="text-center text-brandLight text-6xl font-brittany mb-6">
            Resepsi
          </h2>
          <DateDisplay
            day="Minggu"
            date="27"
            month="November"
            year="2022"
            startTime="09.30"
            endTime="Selesai"
          />
        </div>
      </div>
      <div className="absolute -left-32 -top-20">
        <div className="w-64 h-64 bg-flower bg-no-repeat bg-center bg-contain scale-75 rotate-0" />
      </div>
      <div className="absolute bottom-0  -right-32 md:-right-24">
        <div className="w-48 h-48 bg-flower bg-no-repeat bg-center bg-contain -rotate-0" />
      </div>
    </div>
  );
}

export default EventInfoSection;
