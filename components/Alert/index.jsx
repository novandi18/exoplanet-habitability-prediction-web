import { InformationCircleIcon } from "@heroicons/react/24/solid";

export default function Alert() {
  return (
    <div
      role="alert"
      className="rounded-xl border border-yellow-400 bg-yellow-400/5 p-4"
    >
      <div className="flex items-start gap-4">
        <InformationCircleIcon className="text-yellow-300/90 h-24 sm:h-10" />

        <strong className="block font-medium text-yellow-300/90 text-sm">
          Variabilitas dalam data astronomi dan keterbatasan model saat ini
          berarti ada kemungkinan kesalahan atau penyimpangan dari nilai
          sebenarnya. Oleh karena itu, hasil prediksi harus dilihat sebagai
          estimasi yang mendekati dan digunakan dengan pemahaman bahwa ada ruang
          untuk ketidakpastian.
        </strong>
      </div>
    </div>
  );
}
