import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";
import Loading from "../components/Loading";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [seats, setSeats] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await api.get(`/movies/${id}`);

        setMovie(response.data);
      } catch (error) {
        setError("Movie not found");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  const bookTickets = async () => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
      return;
    }

    try {
      await api.post("/bookings", {
        movieId: movie.id,
        seats: Number(seats),
      });

      navigate("/bookings");
    } catch (error) {
      setError(error.response?.data?.message || "Booking failed");
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (!movie) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080808]">
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] pt-20">
      <div className="absolute inset-0">
        <img
          src={movie.poster}
          alt=""
          className="h-full w-full object-cover opacity-10 blur-sm"
        />

        <div className="absolute inset-0 bg-linear-to-r from-[#080808] via-[#080808]/95 to-[#080808]/60" />

        <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-transparent to-[#080808]/60" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-6 py-16 lg:px-12">
        <div className="hidden w-82.5 shrink-0 md:block">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full rounded-2xl shadow-2xl shadow-black/70"
          />
        </div>

        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-bold tracking-[5px] text-[#d4a84f]">
            NOW SHOWING
          </p>

          <h1 className="font-display text-6xl leading-none sm:text-7xl lg:text-8xl">
            {movie.title}
          </h1>

          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-gray-300">
              {movie.genre}
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-[#f0c96a]">
              ★ {movie.rating}
            </span>
          </div>

          <p className="mt-7 max-w-xl leading-8 text-gray-400">
            Experience {movie.title} on the big screen. Choose your seats and
            make your next cinematic experience unforgettable.
          </p>

          <div className="mt-9 max-w-xl rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-xl">
            <div className="flex flex-wrap items-end gap-7">
              <div>
                <p className="text-xs text-gray-500">TICKET PRICE</p>

                <p className="mt-1 text-2xl font-semibold text-[#d4a84f]">
                  ₹{movie.price}
                </p>
              </div>

              <div>
                <label className="text-xs text-gray-500">SEATS</label>

                <input
                  type="number"
                  min="1"
                  max="10"
                  value={seats}
                  onChange={(e) => setSeats(e.target.value)}
                  className="mt-1 block w-20 rounded-lg border border-white/10 bg-black px-3 py-2 text-white outline-none focus:border-[#d4a84f]"
                />
              </div>

              <div>
                <p className="text-xs text-gray-500">TOTAL</p>

                <p className="mt-1 text-2xl font-semibold">
                  ₹{movie.price * Number(seats)}
                </p>
              </div>
            </div>

            <button
              onClick={bookTickets}
              className="mt-7 w-full rounded-lg bg-[#d4a84f] py-4 font-semibold text-black transition hover:bg-[#e4bb69]"
            >
              Book Tickets →
            </button>

            {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
          </div>
        </div>
      </div>
    </main>
  );
}

export default MovieDetails;
