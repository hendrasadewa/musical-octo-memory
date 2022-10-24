/* eslint-disable @next/next/no-img-element */
function GuestbookSection() {
  return (
    <div className="flex flex-col gap-6 justify-around items-center min-h-screen relative">
      <div>
        <h2 className="text-center text-brandLight text-6xl font-brittany my-12">
          Buku Tamu
        </h2>
        <div className="min-h-64 max-h-64 overflow-scroll">
          <div className="flex flex-col gap-4">
            <div className="shadow-md rounded-lg bg-base-100 p-2 w-full">
              <span className="font-bold text-brandLight">Hendra Sadewa</span>
              <p className="text-right py-2">Happy weeding, 420 blaze it</p>
              <p className="text-right font-mono py-2">12/01/2022 - 10.42</p>
            </div>

            <div className="shadow-md rounded-lg bg-base-100 p-2 w-full">
              <span className="font-bold text-brandLight">Hendra Sadewa</span>
              <p className="text-right py-2">Happy weeding, 420 blaze it</p>
              <p className="text-right font-mono py-2">12/01/2022 - 10.42</p>
            </div>

            <div className="shadow-md rounded-lg bg-base-100 p-2 w-full">
              <span className="font-bold text-brandLight">Hendra Sadewa</span>
              <p className="text-right py-2">Happy weeding, 420 blaze it</p>
              <p className="text-right font-mono py-2">12/01/2022 - 10.42</p>
            </div>
          </div>
        </div>
        <form className="my-6 flex flex-col gap-2">
          <h2 className="text-lg font-playfair text-brandLight">
            Sampaikan pesan kepada pengantin
          </h2>
          <div className="form-control w-full max-w-xs">
            <textarea
              placeholder="Type here"
              className="textarea texarea-bordered w-full"
            />
          </div>
          <button className="btn">Kirim</button>
        </form>
      </div>

      <div className="absolute -left-32 -top-20 ">
        <div className="w-64 h-64 bg-flower bg-no-repeat bg-center bg-contain scale-100 rotate-0" />
      </div>
      <div className="absolute -bottom-12 -right-24">
        <div className="w-52 h-52 bg-flower bg-no-repeat bg-center bg-contain -rotate-0" />
      </div>
    </div>
  );
}

export default GuestbookSection;
