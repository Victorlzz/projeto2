import React, { useState} from 'react';
import * as S from './style';

export default function Formcliente() {
  const [cliente, setCliente] = useState([]);
 
  

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [cpf, setCpf] = useState();
  const [telefone, setTelefone] = useState();

  function adicionaCliente() {
    cliente.push(name, email, cpf, telefone);
    console.log(cliente);
    localStorage.setItem("Dados Cliente", cliente);



    
  }


  return (
    <>

      <div className="formCliente1">
        <S.Logo>RazerOutlet</S.Logo>
        <fieldset>
          <S.Form>
            <h1>Cadastro de Cliente</h1>
            <S.Label>Nome do Cliente</S.Label>
            <input className="NomeCliente" value={name} onChange={nome => setName(nome.target.value)} />
            <S.Label>E-mail</S.Label>
            <input className="emailCliente" value={email} onChange={email => setEmail(email.target.value)} />
            <S.Label>CPF</S.Label>
            <input className="cpfCliente" value={cpf} onChange={cpf => setCpf(cpf.target.value)} />
            <S.Label>Telefone</S.Label>
            <input className="telefoneCliente" value={telefone} onChange={telefone => setTelefone(telefone.target.value)} />
            <S.Botao className="botao" type="submit" onClick={adicionaCliente}>Cadastrar Cliente</S.Botao>
          </S.Form>
         
        </fieldset>
      </div>
    </>
  )
}
