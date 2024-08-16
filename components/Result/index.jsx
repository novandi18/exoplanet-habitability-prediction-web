import Empty from "./Empty";
import ExoplanetCard from "./ExoplanetCard";
import Loading from "../Loading";
import Temperature from "./Temperature";

export default function Result({ predictResult, loading }) {
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center gap-10 py-6 sm:py-0">
        <Loading width={20} height={20} />
        <h1 className="font-medium text-lg">Sedang memuat hasil prediksi...</h1>
      </div>
    );
  } else if (predictResult !== null) {
    const temperature = parseFloat(
      (predictResult["predicted_temperature"] - 273.15).toFixed(2)
    );

    return (
      <div className="flex flex-col gap-4">
        <h1 className="font-medium text-xl">Hasil Prediksi :</h1>
        <Temperature temp={temperature} />
        <h1 className="font-medium text-xl">
          Exoplanet Dengan Karakeristik Serupa :
        </h1>
        <div className="flex flex-col gap-2">
          {predictResult["similar_exoplanets"].map((data, index) => {
            return <ExoplanetCard data={data} key={index} />;
          })}
        </div>
      </div>
    );
  } else {
    return <Empty />;
  }
}
