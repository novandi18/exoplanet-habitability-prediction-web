export default function Navbar() {
  return (
    <header className="bg-zinc-950">
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-4 lg:px-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-100 sm:text-1xl">
              Exoplanet Habitability Prediction
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/novandi18/exoplanet-habitability-prediction-rnn-knn"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-gray-800 px-5 py-3 text-gray-100 transition hover:text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring"
              rel="noreferrer"
              target="_blank"
            >
              <span className="text-sm font-medium"> Github </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
