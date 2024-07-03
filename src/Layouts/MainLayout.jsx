import { Link, Outlet, useNavigate } from "react-router-dom";

const links = [
  { to: "/", label: "Home", requireAuth: false },
  { to: "/productos", label: "Productos", requireAuth: true },
  { to: "/login", label: "Login", requireAuth: false },
];

function MainLayout() {
  const isAuth = !!window.localStorage.getItem("token"); // le pongo la doble negacion para obtener valores booleanos porque getItem devuelve null y no puedo trabajar con nulls
  const navigate = useNavigate();
  function handleLogout(){
    window.localStorage.removeItem("token");
    navigate("/");
}

  return (
    <main className="h-full min-h-dvh">
      <nav className="bg-white/50 flex flex-row justify-around text-lg font-semibold">
        {links.map((link, index) => {
          if (link.requireAuth && !isAuth) return null;
          if (isAuth && link.to === "/login") return null;
          return (
            <Link
              className="hover:bg-black/50 w-full h-full p-4 text-center"
              key={`link-${index}`}
              to={link.to}
            >
              {link.label}
            </Link>
          );
        })}
        {isAuth && (
          <button
            className="hover:bg-black/50 w-full h-full p-4 text-center"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </nav>
      <Outlet />
      <footer className="mt-8 pt-4 bg-white/50 w-full min-h-28 text-center text-black">
        Este es el footer
      </footer>
    </main>
  );
}

export default MainLayout;
