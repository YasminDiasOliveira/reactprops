import { Container } from "./styled";

import Produto from "../produto"
import { useState } from "react";

export default function Home(){
    const [ produtos, setProdutos ] = useState([]);

    function listar() {
        const r = [
            {
                id: 10001, 
                imagem: "https://image.freepik.com/fotos-gratis/cachorrinho-fofo-em-casa_144627-10935.jpg",
                titulo: "Pulguinha",
                preco: "R$ 12.584,00",
                descricao: "Cachorrinha serelepe",
                especificacoes: "Essa cachorrinha é incrível!"
            },
            {
                id: 10002, 
                imagem: "https://fotos.amomeupet.org/uploads/fotos/1604585885_5fa4099ddb738_hd.jpeg",
                titulo: "Cachorrinho emo",
                preco: "R$ 12.584,00",
                descricao: "Cachorrinho trevoso",
                especificacoes: "Cachorrinho gótico"
            },
            {
                id: 10003, 
                imagem: "https://img3.beautynailhairsalons.com/181/781/716261321817813.jpg",
                titulo: "Cachorrinha junina",
                preco: "R$ 12.584,00",
                descricao: "Essa cachorrinha pula fogueira",
                especificacoes: "Essa cachorrinha come maçã do amor"
            }
        ]   
        setProdutos(r);
    }

    return(
        <Container>
            <h1> Sejam bem-vindos! </h1>
            <br/>

            <button onClick={listar}> Listar </button>
            <br/>

            <div className="lista-produtos">
                {produtos.map(item =>
                    <Produto info={item} />
                )}
            </div>
        </Container>
    )
}