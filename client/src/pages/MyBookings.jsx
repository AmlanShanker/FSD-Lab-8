import { useEffect, useState } from "react";
import api from "../api";
import Loading from "../components/Loading";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBookings = async () => {
    try {
      const response = await api.get("/bookings/my");

      setBookings(response.data);
    } catch (error) {
      setError(error.response?.data?.message || "Unable to load bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const updateSeats = async (booking) => {
    const newSeats = window.prompt("Enter number of seats:", booking.seats);

    if (!newSeats) return;

    try {
      await api.put(`/bookings/${booking._id}`, {
        seats: Number(newSeats),
      });

      fetchBookings();
    } catch (error) {
      setError(error.response?.data?.message || "Unable to update booking");
    }
  };

  const cancelBooking = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) {
      return;
    }

    try {
      await api.delete(`/bookings/${id}`);

      fetchBookings();
    } catch (error) {
      setError(error.response?.data?.message || "Unable to cancel booking");
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="min-h-screen bg-[#080808] px-6 pb-20 pt-32 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14">
          <p className="mb-4 text-xs font-bold tracking-[5px] text-[#d4a84f]">
            YOUR CINEMA JOURNEY
          </p>

          <h1 className="font-display text-6xl sm:text-7xl">
            My <span className="text-[#d4a84f]">Bookings.</span>
          </h1>
        </div>

        {error && <p className="mb-6 text-red-400">{error}</p>}

        {bookings.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/10 p-20 text-center">
            <h2 className="font-display text-4xl">No bookings yet.</h2>

            <p className="mt-3 text-gray-500">
              Your next cinematic experience starts with a movie.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111] sm:flex-row"
              >
                <img
                  src={booking.movie.poster}
                  alt={booking.movie.title}
                  className="h-72 w-full object-cover sm:h-52 sm:w-36"
                />

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h2 className="font-display text-3xl">
                      {booking.movie.title}
                    </h2>

                    <p className="mt-1 text-gray-500">{booking.movie.genre}</p>

                    <div className="mt-6 flex gap-10">
                      <div>
                        <p className="text-xs text-gray-600">SEATS</p>

                        <p className="mt-1 font-semibold">{booking.seats}</p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-600">TOTAL</p>

                        <p className="mt-1 font-semibold text-[#d4a84f]">
                          ₹{booking.totalAmount}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => updateSeats(booking)}
                      className="rounded-lg border border-white/10 px-4 py-2 text-sm transition hover:border-[#d4a84f] hover:text-[#d4a84f]"
                    >
                      Update Seats
                    </button>

                    <button
                      onClick={() => cancelBooking(booking._id)}
                      className="rounded-lg border border-red-500/20 px-4 py-2 text-sm text-red-400 transition hover:bg-red-500/10"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default MyBookings;
