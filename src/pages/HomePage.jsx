import { Link } from "react-router-dom";
import PageSection from "../components/PageSection";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-4xl font-bold text-center">
        Welcome to the Home Page
      </h1>
      <p className="text-xl">This is a Home Page</p>
      <PageSection title="un titulo">
        <h2>vendemos de todo</h2>
      </PageSection>
      <PageSection title ="un boton">
        <Link
          className="border text-center rounded-xl mx-4 border-white p-2"
          to="/productos"
        >
          Ver productos
        </Link>
      </PageSection>
    </div>
  );
}
