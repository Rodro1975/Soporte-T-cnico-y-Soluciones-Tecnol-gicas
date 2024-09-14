import Image from "next/image";

const CountryCard = ({ country, flagUrl }) => {
  return (
    <div className="p-4 bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <Image
        src={flagUrl}
        alt={`Bandera de ${country}`}
        width={32}
        height={20}
        className="mx-auto"
      />
      <h3 className="mt-4 text-xl font-semibold text-center text-gray-800">
        {country}
      </h3>
    </div>
  );
};

export default CountryCard;
