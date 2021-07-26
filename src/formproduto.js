import React, {useState} from 'react';
import * as S from './style';

export default function Formproduto() {
  const [produto, setProduto] = useState([]);
 
  

  const [name, setName] = useState();
  const [codigo, setCodigo] = useState();
  const [fabricante, setFabricante] = useState();
  const [modelo, setModelo] = useState();
  const [preco, setPreco] = useState();

  function adicionaProduto() {
    produto.push(name, codigo, fabricante,modelo, preco);
    console.log(produto);
    localStorage.setItem("Dados Produto", produto);
    
   
  }

    return (
    <div className="formProduto1">
       <S.Logo>RazerOutlet</S.Logo>
      <fieldset>
        <S.Form>
          <h1>Cadastro de Produtos</h1>
          <S.Label>Nome do Produto</S.Label>
          <input className="idProduto" value={name} onChange={nome => setName(nome.target.value)}/>
          <S.Label>Código do Produto</S.Label>
          <input className="codigoProduto" value={codigo} onChange={cod => setCodigo(cod.target.value)}/>
          <S.Label>Fabricante</S.Label>
          <input className="fabricante" value={fabricante} onChange={fab => setFabricante(fab.target.value)}/>
          <S.Label>Modelo</S.Label>
          <input className="modelo" value={modelo} onChange={model => setModelo(model.target.value)}/>
          <S.Label>Preço do Produto</S.Label>
          <input className="preco" value={preco} onChange={prec => setPreco(prec.target.value)}/>
          <S.Botao className="botao" onClick={adicionaProduto}>Cadastrar Produto</S.Botao>
        </S.Form>
        
      </fieldset>
      
    </div>
    )
}