import { Container } from "./styled";

import Produto from "../produto"
import { useState } from "react";

export default function Home(){
    const [ produtos, setProdutos ] = useState([]);

    function listar() {
        const r = [
            {
                id: 10001, 
                imagem: "https://http2.mlstatic.com/D_NQ_NP_755842-MLB47599396706_092021-O.webp",
                titulo: "PC Gamer",
                preco: "R$ 12.584,00",
                descricao: "Esse produto é lindo!",
                especificacoes: "Esse produto é incrível!"
            },
            {
                id: 10002, 
                imagem: "https://http2.mlstatic.com/D_NQ_NP_755842-MLB47599396706_092021-O.webp",
                titulo: "PC Gamer",
                preco: "R$ 12.584,00",
                descricao: "Esse produto é lindo!",
                especificacoes: "Esse produto é incrível!"
            },
            {
                id: 10003, 
                imagem: "https://http2.mlstatic.com/D_NQ_NP_755842-MLB47599396706_092021-O.webp",
                titulo: "PC Gamer",
                preco: "R$ 12.584,00",
                descricao: "Esse produto é lindo!",
                especificacoes: "Esse produto é incrível!"
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