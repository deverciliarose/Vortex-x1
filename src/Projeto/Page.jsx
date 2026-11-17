import {useState} from "react";

import tenisPreto from "../img/Tenis-preto.png";
import tenisVermelho from "../img/Tenis-vermelho.png";
import tenisBranco from "../img/Tenis-branco.png";
import "./Page.css";

function Page(){

    const [tenis, setTenis] = useState(tenisPreto);
    return(
        <>
         <section className="detalhes">
            <nav>
                <div className="logo">
                    <h1>ZOOM PROJETOS</h1>
                </div>
                <ul className="categorias">
                    <li><a href="">Shoes</a></li>
                    <li><a href="">Bags</a></li>
                    <li><a href="">Accessorie</a></li>
                </ul>
                <button className="btn-comprar">
                    Comprar
                </button>
            </nav>
         </section>
         <section className="produto">
            <h1>VORTEX X1</h1>
            <p>Seu estilo. Sua identidade.</p>
            <img src={tenis} alt="" />

            <div className="cores">

                <button className="btn-1" onClick={() => setTenis(tenisPreto)}></button>
                <button className="btn-2" onClick={() => setTenis(tenisVermelho)}></button>
                <button className="btn-3" onClick={() => setTenis(tenisBranco)}></button>

            </div>

            <div className="preco">
                <p>R$ 399,00</p>
            </div>

         </section>
        </>
    )
}
export default Page