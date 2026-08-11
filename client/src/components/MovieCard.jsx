import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111] transition duration-500 hover:-translate-y-2 hover:border-[#d4a84f]/50">
      <div className="relative h-90 overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

        <div className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1.5 text-sm text-[#f0c96a] backdrop-blur-md">
          ★ {movie.rating}
        </div>
      </div>

      <div className="p-5">
        <h3 className="truncate text-lg font-semibold">{movie.title}</h3>

        <p className="mt-1 text-sm text-gray-500">{movie.genre}</p>

        <div className="mt-5 flex items-center justify-between">
          <span className="font-semibold text-[#d4a84f]">₹{movie.price}</span>

          <Link
            to={`/movies/${movie.id}`}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm transition hover:border-[#d4a84f] hover:text-[#d4a84f]"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
