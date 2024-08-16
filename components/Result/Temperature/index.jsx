export default function Temperature({ temp }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={
          "flex font-semibold " + (temp < 38 ? "text-blue-300" : "text-red-300")
        }
      >
        <span className="text-6xl">{temp}</span>
        <span className="text-2xl">°C</span>
      </div>
      <span className="text-sm">
        Layak huni oleh manusia, berada dalam kisaran suhu air cair pada tekanan
        atmosfer standar Bumi antara 0 °C dan 100 °C.
      </span>
    </div>
  );
}
