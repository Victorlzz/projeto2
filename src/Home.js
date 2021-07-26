import React from 'react';
import * as S from './style';


import { useHistory } from 'react-router-dom'

export default function Home() {
    const history = useHistory();
    // function goToHome(){
    //     history.push('./Home')
    // }
    function goToCliente(){
        history.push('./Formcliente')
    }
    function goToProduto() {
        
        history.push('/Formproduto');
    };
    return (
      
        <div>
            <S.Logo>RazerOutlet</S.Logo>
            <S.Botao className="botao" type="button" onClick={goToCliente}>Cadastro de Clientes</S.Botao>
            <S.Botao className="botao" type="button" onClick={goToProduto}>Cadastro de Produtos</S.Botao> 
        </div>
    )
}
