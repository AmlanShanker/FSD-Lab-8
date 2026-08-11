import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("customer");
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 px-6 py-5 backdrop-blur-xl lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-[4px]">
          CINE<span className="text-[#d4a84f]">BOOK</span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-7">
          <Link
            to="/"
            className="hidden text-sm text-gray-400 transition hover:text-white sm:block"
          >
            Home
          </Link>

          <Link
            to="/movies"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            Movies
          </Link>

          {token && (
            <Link
              to="/bookings"
              className="hidden text-sm text-gray-400 transition hover:text-white sm:block"
            >
              My Bookings
            </Link>
          )}

          {!token ? (
            <>
              <Link
                to="/login"
                className="rounded-lg border border-white/15 px-4 py-2 text-sm transition hover:bg-white/10"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-lg bg-[#d4a84f] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#e4bb69]"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={logout}
              className="rounded-lg border border-white/15 px-4 py-2 text-sm text-gray-300 transition hover:border-red-400/50 hover:text-red-400"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
