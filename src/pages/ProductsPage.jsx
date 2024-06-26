import { useEffect, useState } from "react";
import { getProducts } from "../api";
import { toast } from "sonner";
import {Link, useNavigate} from 'react-router-dom';

/* 
El useEffect se ejecuta dos veces, una vez cuando el componente se monta y otra vez cuando el componente se actualiza.
recibe dos parametros: una funcion y un array de dependencias.
*///nunca actualizar un estado cuando ese estado depende de si mismo o se crea un loop infinito

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => { 
        
        const token = window.localStorage.getItem("token");
        if (!token) {
            toast.error("No autorizado");
            navigate("/login");
        }

        getProducts()
        .then((prods) => {
            setProducts(prods);
        }).catch((error) => {
            toast.error("[getProducts error]", error);
        ; });}, []
    );

    return (
        <main>
            <h1 className="mt-8 text-4xl font-bold text-center">Productos</h1>
            <section className="flex flex-wrap gap-2 mt-8 justify-center">
               {
                    products.map((product,index)=> {
                        return (
                            <article className="flex flex-col justify-between hover:rounded-xl hover:bg-white/50 p-6"key={`prod-${index}`}>
                                <img src={product.thumbnail} alt="" />
                                <p className="font-bold text-center m-2">
                                    {product.title}
                                </p>
                                <Link className="border text-center rounded-xl mx-4 border-white p-2" to={`/productos/${index}`}>Ver detalle</Link>
    
                            </article>
                        );
                    })
               }
            </section>
        </main>
    );
}