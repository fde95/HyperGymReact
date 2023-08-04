import React, { useState } from "react";
import './Cadastro.css'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from '../../Components/Footer/FooterBar'
import { Container, Title, Subtitle } from "../../Components/Styles/ComponentsStyle";

export default function Cadastro () {
    // Declarar uma nova variável dados com state e atribuir objeto
    const [user, setUser] = useState({
        name: '',
        surname: '',
        email: ''
    })
    

    // Receber os dados do formulário
    const valueInput = (e) => setUser({...user, [e.target.name]: e.target.value });

    // Executar função ao submeter formuláo
    const addUser = (e) =>{
        e.preventDefault();

        console.log('Nome do usuário: ' + user.name)
        console.log('Sobrenome do usuário: ' + user.surname)
        console.log('E-mail do usuário: ' + user.email)
        console.log('CADASTRADO COM SUCESSO!!')

        setUser({
            name: '',
            surname: '',
            email: ''
        })

        const submitConfirm = document.querySelector('.submitConfirm');

        submitConfirm.style.display = 'block'
    }

    return(
        <>
        <Navbar/>
        <main>
            <Container>
                <Title>O caminho para a melhor versão de si mesmo <span className="title__emphasis">começa aqui</span>!</Title>
                <Subtitle>Desperte o potencial que existe dentro de você e alcance o melhor da sua saúde e forma física. Não espere mais, matricule-se agora e inicie uma jornada de transformação e superação pessoal!</Subtitle>
            </Container>
                <div className="form">
                    <div className="formDiv">
                        <form className="formCadastro" onSubmit={addUser}>
                            
                            <label className="formCadastro__label" htmlFor="name">Nome</label>
                            <input className="formCadastro__input" type="text" name="name" id="name" onChange={valueInput} value={user.name} required/>
                            
                            <label className="formCadastro__label" htmlFor="surname">Sobrenome</label>
                            <input className="formCadastro__input" type="text" name="surname" id="surname" onChange={valueInput} value={user.surname} required/>

                            <label className="formCadastro__label" htmlFor="email">E-mail</label>
                            <input className="formCadastro__input" type="email" name="email" id="email" onChange={valueInput} value={user.email} required/>

                            <div className="submitConfirm"> 
                                <p className="submitConfirm__text__destaq">
                                    Pré cadastrado realizado com sucesso!
                                </p>
                                <p className="submitConfirm__text">
                                Agora é só comparecer em nossa unidade para assinatura do contrato e começar seu treino.
                                </p>
                            </div>

                            <button type="submit" className="formCadastro__button">Cadastrar</button>
                        </form>
                    </div>
                </div>
            
        </main>
        <Footer/>
        </>
    )
}