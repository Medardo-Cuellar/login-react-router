import { login } from "../api";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom"; //useNavigate is a hook that allows you to navigate to a different route in your application.

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  async function onSubmit(data) {
    try {
      const token = await login(data.username, data.password);
      window.localStorage.setItem("token", token);
      toast.success("Bienvenido");
      navigate("/productos");
    } catch (error) {
      toast.error("Usuario o contraseña incorrectos");
    }
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-center">Login</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col m-4 p-4 border rounded-xl"
      >
        <input
          className="p-4 border rounded-xl border-yellow-200 text-black m-4"
          type="text"
          {...register("username", {
            required: { value: true, message: "nombre de usuario requerido" },
          })}
          placeholder="username"
        />
        <input
          className="p-4 border rounded-xl border-yellow-200 text-black m-4"
          type="password"
          {...register("password", {
            required: { value: true, message: "password requerido" },
          })}
          placeholder="password"
        />
        <button className="bg-teal-500 rounded-xl p-2 m-4 text-black text-3xl font-bold">
          Ingresar
        </button>
      </form>
    </main>
  );
}

export default LoginPage;
