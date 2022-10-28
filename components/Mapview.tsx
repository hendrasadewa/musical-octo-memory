function Mapview() {
  return (
    <div className="w-full flex items-center justify-center h-96 mb-40">
      <div className="max-w-xs flex flex-col gap-4">
        <h2 className="text-center text-brandLight text-6xl font-brittany my-12">
          Lokasi
        </h2>

        <p className="text-center text-brandLight text-xl font-playfair">
          Purbayan RT 4 / RT 1, Singopuran, Kartasura
        </p>
        <iframe
          className="max-w-xs max-h-screen h-96 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.219432426095!2d110.7419503154784!3d-7.55103499455429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3e984d85c1b0f7e9!2zN8KwMzMnMDMuNyJTIDExMMKwNDQnMzguOSJF!5e0!3m2!1sen!2sid!4v1666963805844!5m2!1sen!2sid"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

export default Mapview;
