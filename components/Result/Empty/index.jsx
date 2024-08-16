import { GlobeEuropeAfricaIcon } from "@heroicons/react/24/solid";

export default function Empty() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-6 sm:py-0">
      <GlobeEuropeAfricaIcon className="w-20 text-gray-100" />
      <h1 className="font-medium text-lg">
        Hasil prediksi akan tampil disini.
      </h1>
    </div>
  );
}
