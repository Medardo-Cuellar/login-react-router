import { useEffect, useState } from "react";

/* 
El useEffect se ejecuta dos veces, una vez cuando el componente se monta y otra vez cuando el componente se actualiza.
recibe dos parametros: una funcion y un array de dependencias.
*/
export default function ProductsPage() {
    const [count, setCount] = useState(0);
    

    useEffect(() => {
        console.log("Termine de renderizar el componente");
    }, []);

    useEffect(() => {console.log("use effect count", count)}, [count]);


    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-center">Productos</h1>
            <p className="text-xl">Esta es la pagina de productos</p>
            <p onClick={()=>setCount(count + 1)}>Cuenta {count}</p>
        </div>
    );
}