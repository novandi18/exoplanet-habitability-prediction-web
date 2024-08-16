"use client";

import { useEffect, useState } from "react";
import { InlineMath } from "react-katex";
import Loading from "../Loading";

export default function Form({
  predictResult,
  setPredictResult,
  loading,
  setLoading,
}) {
  const [formData, setFormData] = useState({
    mass: "",
    radius: "",
    period: "",
    au: "",
    distance: "",
    host_star_temp_k: "",
    host_star_mass: "",
  });

  useEffect(() => {
    if (predictResult !== null) {
      setFormData({
        mass: "",
        radius: "",
        period: "",
        au: "",
        distance: "",
        host_star_temp_k: "",
        host_star_mass: "",
      });
    }
  }, [predictResult]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onPredict = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const request = {
        "Mass (MJ)": parseFloat(formData.mass),
        "Radius (RJ)": parseFloat(formData.radius),
        "Period (days)": parseFloat(formData.period),
        "Semi-major axis (AU)": parseFloat(formData.au),
        "Distance (ly)": parseFloat(formData.distance),
        "Host star temp. (K)": parseFloat(formData.host_star_temp_k),
        "Host star mass": parseFloat(formData.host_star_mass),
        "Mass-Radius Ratio":
          parseFloat(formData.mass) / parseFloat(formData.radius),
      };

      const response = await fetch(process.env.predictUrl, {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (response) {
        setLoading(false);
        setPredictResult(result);
      }
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  };

  return (
    <form onSubmit={onPredict}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="col-span-1">
          <label
            htmlFor="mass"
            className="block text-sm font-medium text-gray-300"
          >
            Massa Exoplanet (<InlineMath math="M_J" />)
          </label>

          <input
            type="number"
            id="mass"
            name="mass"
            value={formData.mass}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border-2 border-gray-800 bg-gray-800 text-sm text-gray-100 shadow-sm px-3 py-2 outline-none focus:border-blue-700"
            autoComplete="false"
            required
          />

          <label
            htmlFor="mass"
            className="block text-xs font-medium text-gray-400 mt-1"
          >
            Massa Exoplanet dalam satuan massa Jupiter.
          </label>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="radius"
            className="block text-sm font-medium text-gray-300"
          >
            Radius Exoplanet (<InlineMath math="R_J" />)
          </label>

          <input
            type="number"
            id="radius"
            name="radius"
            value={formData.radius}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border-2 border-gray-800 bg-gray-800 text-sm text-gray-100 shadow-sm px-3 py-2 outline-none focus:border-blue-700"
            autoComplete="false"
            required
          />

          <label
            htmlFor="radius"
            className="block text-xs font-medium text-gray-400 mt-1"
          >
            Radius Exoplanet dalam satuan radius Jupiter.
          </label>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="period"
            className="block text-sm font-medium text-gray-300"
          >
            Periode Orbit (Hari)
          </label>

          <input
            type="number"
            id="period"
            name="period"
            value={formData.period}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border-2 border-gray-800 bg-gray-800 text-sm text-gray-100 shadow-sm px-3 py-2 outline-none focus:border-blue-700"
            autoComplete="false"
            required
          />

          <label
            htmlFor="period"
            className="block text-xs font-medium text-gray-400 mt-1"
          >
            Waktu yang dibutuhkan Exoplanet untuk menyelesaikan satu orbit penuh
            mengelilingi bintangnya.
          </label>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="au"
            className="block text-sm font-medium text-gray-300"
          >
            Semi-Major Axis (<InlineMath math="A_U" />)
          </label>

          <input
            type="number"
            id="au"
            name="au"
            value={formData.au}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border-2 border-gray-800 bg-gray-800 text-sm text-gray-100 shadow-sm px-3 py-2 outline-none focus:border-blue-700"
            autoComplete="false"
            required
          />

          <label
            htmlFor="au"
            className="block text-xs font-medium text-gray-400 mt-1"
          >
            Setengah dari diameter terpanjang orbit Exoplanet, dalam satuan
            Astronomical Unit.
          </label>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="distance"
            className="block text-sm font-medium text-gray-300"
          >
            Jarak dari Bumi (Tahun Cahaya)
          </label>

          <input
            type="number"
            id="distance"
            name="distance"
            value={formData.distance}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border-2 border-gray-800 bg-gray-800 text-sm text-gray-100 shadow-sm px-3 py-2 outline-none focus:border-blue-700"
            autoComplete="false"
            required
          />

          <label
            htmlFor="distance"
            className="block text-xs font-medium text-gray-400 mt-1"
          >
            Jarak Exoplanet dari Bumi, dalam satuan tahun cahaya.
          </label>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="host_star_temp_k"
            className="block text-sm font-medium text-gray-300"
          >
            Suhu Bintang Induk (K)
          </label>

          <input
            type="number"
            id="host_star_temp_k"
            name="host_star_temp_k"
            value={formData.host_star_temp_k}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border-2 border-gray-800 bg-gray-800 text-sm text-gray-100 shadow-sm px-3 py-2 outline-none focus:border-blue-700"
            autoComplete="false"
            required
          />

          <label
            htmlFor="host_star_temp_k"
            className="block text-xs font-medium text-gray-400 mt-1"
          >
            Suhu permukaan bintang induk Exoplanet, dalam satuan Kelvin.
          </label>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="host_star_mass"
            className="block text-sm font-medium text-gray-300"
          >
            Massa Bintang Induk (M☉)
          </label>

          <input
            type="number"
            id="host_star_mass"
            name="host_star_mass"
            value={formData.host_star_mass}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border-2 border-gray-800 bg-gray-800 text-sm text-gray-100 shadow-sm px-3 py-2 outline-none focus:border-blue-700"
            autoComplete="false"
            required
          />

          <label
            htmlFor="host_star_mass"
            className="block text-xs font-medium text-gray-400 mt-1"
          >
            Massa bintang induk Exoplanet dalam satuan massa Matahari.
          </label>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="flex items-center gap-3 justify-center w-full rounded-lg bg-blue-700 px-5 py-3 font-medium text-gray-100 sm:w-auto hover:bg-blue-600 active:bg-blue-800 disabled:bg-blue-900 disabled:text-gray-100/50"
          disabled={loading}
        >
          {loading ? <Loading width={6} height={6} /> : ""}
          <span>Prediksi Sekarang</span>
        </button>
      </div>
    </form>
  );
}
