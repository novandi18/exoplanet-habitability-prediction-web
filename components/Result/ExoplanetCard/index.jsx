export default function ExoplanetCard({ data }) {
  return (
    <div className="p-4 rounded-lg border border-gray-800 flex flex-col gap-2">
      <h1 className="text-lg font-medium">{data[0]}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Massa</span>
          <span className="text-sm font-medium">
            {parseFloat(data[1].toFixed(2))}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Radius</span>
          <span className="text-sm font-medium">
            {parseFloat(data[2].toFixed(2))}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Periode Orbit</span>
          <span className="text-sm font-medium">
            {parseFloat(data[3].toFixed(2))} Hari
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Semi-Major Axis</span>
          <span className="text-sm font-medium">
            {parseFloat(data[4].toFixed(2))}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Suhu</span>
          <span className="text-sm font-medium">
            {parseFloat((data[5] - 273.15).toFixed(2))} °C
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Jarak dari Bumi</span>
          <span className="text-sm font-medium">
            {parseFloat(data[6].toFixed(2))}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Massa Bintang Induk</span>
          <span className="text-sm font-medium">
            {parseFloat(data[7].toFixed(2))}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Suhu Bintang Induk</span>
          <span className="text-sm font-medium">
            {parseFloat((data[8] - 273.15).toFixed(2))} °C
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Rasio Massa Radius</span>
          <span className="text-sm font-medium">
            {parseFloat(data[9].toFixed(2))}
          </span>
        </div>
      </div>
    </div>
  );
}
