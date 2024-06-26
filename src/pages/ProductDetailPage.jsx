import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getProductById } from "../api";
import { toast } from "sonner";
import { Link } from "react-router-dom";

export default function ProductDetailPage() {
    const {id} = useParams();
    const[product, setProduct] = useState({});//se inicializa como objeto vacio
    useEffect(() => {
        getProductById(id)
        .then((prod) => {
            setProduct(prod);
            console.log(prod);
        }).catch((error) => {
            toast.error("[getProductById error]", error);
        });
    }, [])
    

    return (
        <main>
            <section className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl">Detalle del producto</h1>
                <article className="flex flex-col align-center justify-center border bg-white/50 border-white rounded-xl p-10 mx-24 my-10 max-w-xl">
                
                    <img className="max-w-md mx-auto"src={product.thumbnail} alt="" />
                    <p className="font-bold text-center m-2">
                        {product.title}
                    </p>
                    <p className="text-center m-2">
                        {product.description}
                    </p>
                    <p className="text-center m-2">
                        {product.price}
                    </p>
                    <Link to="../Productos"className="rounded-xl border-black border max-w-sm p-4 mx-auto">Go back</Link>
                </article>
            </section>
        </main>
    )
}

