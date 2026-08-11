import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://image.tmdb.org/t/p/original/cWXtJhrlruF8CeYuaBGE8vdj3Q9.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-linear-to-r from-black via-black/85 to-black/20" />

      <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-transparent to-black/30" />

      <div className="relative flex min-h-screen items-center px-8 pt-20 lg:px-20">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs font-bold tracking-[6px] text-[#d4a84f]">
            YOUR CINEMA EXPERIENCE
          </p>

          <h1 className="font-display text-6xl leading-[0.95] sm:text-8xl lg:text-[110px]">
            Movies feel
            <br />
            <span className="text-[#d4a84f]">better here.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            Discover the latest blockbusters, explore unforgettable stories and
            book your cinema experience in seconds.
          </p>

          <Link
            to="/movies"
            className="mt-9 inline-block rounded-lg bg-[#d4a84f] px-7 py-4 font-semibold text-black transition hover:-translate-y-1 hover:bg-[#e4bb69]"
          >
            Explore Movies →
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
