/* eslint-disable @next/next/no-img-element */
function IntroSection() {
  return (
    <div className="flex flex-col gap-8 justify-center py-16 items-center min-h-screen relative">
      <div className="w-3/4 text-center text-brandLight text-sm font-playfair flex flex-col gap-2">
        <h2 className="text-center text-brandLight text-4xl font-brittany mb-4">
          Wedding Invitation
        </h2>
        <p className="text-sm leading-5">
          Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang.
        </p>
        <p>Q.S Ar-Rum (30):21</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="text-center text-brandLight font-playfair">
          <h3 className="text-3xl font-brittany mb-4">Faradilla Bihrajihan</h3>
          <p>Putri dari</p>
          <p>Bp. Sriwihartanto - Ibu Harmini</p>
        </div>
        <img src="/assets/images/wedding-ring.png" alt="" className="w-1/4" />
        <div className="text-center text-brandLight font-playfair">
          <h3 className="text-3xl font-brittany mb-4">Muhammad Farizki</h3>
          <p>Putra dari</p>
          <p>Bp. Ridwan - Ibu Peni Sesotijowati</p>
        </div>
      </div>
      <div className="absolute -left-36 -top-20">
        <div className="w-64 h-64 bg-leaves bg-no-repeat bg-center bg-contain scale-100 rotate-0" />
      </div>
      <div className="absolute bottom-0 -right-52">
        <div className="w-64 h-64 bg-leaves bg-no-repeat bg-center bg-contain scale-100 -rotate-45" />
      </div>
    </div>
  );
}

export default IntroSection;
