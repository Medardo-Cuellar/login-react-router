import { login } from "../api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom"; //useNavigate is a hook that allows you to navigate to a different route in your application.
import { clsx } from "clsx";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const navigate = useNavigate();

  const [showPassword,setShowPassword] = useState(false);

  function handleShowHidePassword() {
    setShowPassword(!showPassword);
  }

  async function onSubmit(data) {
    try {
      const token = await login(data.username, data.password);
      if (token) {
        window.localStorage.setItem("token", token);
        toast.success("Bienvenido");
        navigate("/productos");
      } else {
        toast.error("Usuario o contraseña incorrectos");
        setError("root.credentials", {
          type: "manual",
          message: "Usuario o contraseña incorrectos",
        });
      }
    } catch (error) {
      toast.error("Usuario o contraseña incorrectos");
      console.error("[login error]", error);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-center">Login</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx("flex flex-col m-4 p-4 border rounded-xl", {
          "border-red-500": errors.root?.credentials, // el signo de interrogacion es para indicar que puede estar o no definido, cuando la aplicacion inicia por primera vez no esta definido por lo que no se muestra el borde rojo
        })}
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
          type={showPassword ? "text" : "password"}
          {...register("password", {
            required: { value: true, message: "password requerido" },
          })}
          placeholder="password"
        />
        <span className="text-xs ps-4 text-white/50 cursor-pointer hover:text-white"
        onClick={handleShowHidePassword}>{!showPassword ? "🙈mostrar": "👀ocultar"} password</span>
        <button className="bg-teal-500 rounded-xl p-2 m-4 text-black text-3xl font-bold">
          Ingresar
        </button>
        {errors.root?.credentials && (
          <p className="text-red-500 text-center text-sm">{errors.root.credentials.message}</p>
        )}

      </form>
    </main>
  );
}

export default LoginPage;
