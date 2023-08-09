import React from "react";
import './Home.css'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/FooterBar";
import QualidadeImage from '../../images/experience/quality__image.png'
import PrivacidadeImage from '../../images/experience/privacity__image.png'
import ExclusividadeImage from '../../images/experience/exclusivity__image.png'
import Qualidade from "../../images/sgv/experience__item__quality.svg"
import Privacidade from "../../images/sgv/experience__item__privacity.svg"
import Exclusividade from "../../images/sgv/experience__item__exclusive.svg"
import Danca from '../../images/sgv/classes__dance.svg'
import Musculacao from '../../images/sgv/classes__ gym.svg'
import Natacao from '../../images/sgv/classes__ swimming.svg'
import Combate from '../../images/sgv/classes__combat.svg'
import DanceImage from '../../images/classes/dance__class.png'
import MusculacaoImage from '../../images/classes/gym__class.png'
import NatacaoImage from '../../images/classes/swimming__class.png'
import ImcImage from '../../images/imc/btn__imc.png'
import CombateImage from '../../images/classes/fight__class.png'
import { Container, Title, Subtitle, CardTitle } from "../../Components/Styles/ComponentsStyle";
import Price from '../../Components/Price/Price'
import { Link } from 'react-router-dom'

export default function Home () {
    return(
        <>
        <Navbar/>
        <header>
            <div className="hero"></div>
        </header>

        <main>
            <section id="Experience">
                <Container>
                    <Title>Experiencias <span className="title__emphasis">Hyper</span></Title>
                    <Subtitle>
                    Descubra o mundo de possibilidades na academia HYPER! Privacidade, Qualidade e Exclusividade são nossa prioridade. Desfrute de um ambiente projetado para evitar superlotação, com equipamentos de altíssima qualidade e suporte personalizado. Junte-se a nós e alcance sua melhor forma física em uma experiência fitness única e acolhedora. Seu sucesso começa aqui!
                    </Subtitle>
                </Container>
                <ul className="experience__list">
                    <li className="experience__list__item">
                        <img className="experience__list__item__image" src={[PrivacidadeImage]} alt="Imagem figurativa" />
                        <CardTitle>Privacidade</CardTitle>
                        <img src={[Privacidade]} alt="" />
                    </li>
                    <li className="experience__list__item">
                        <img className="experience__list__item__image" src={[QualidadeImage]} alt="Imagem figurativa" />
                        <CardTitle>Qualidade</CardTitle>
                        <img src={[Qualidade]} alt="" />
                    </li>
                    <li className="experience__list__item">
                        <img className="experience__list__item__image" src={[ExclusividadeImage]} alt="Imagem figurativa" />
                        <CardTitle>Exclusividade</CardTitle>
                        <img src={[Exclusividade]} alt="" />
                    </li>
                </ul>
            </section>

            <section id="GymClasses">
                <Container>
                <Title>Aqui é <span className="title__emphasis">NO PAIN, NO GAIN</span> de verdade!</Title>
                <Subtitle>
                    Na academia HYPER, nosso compromisso é proporcionar a você a melhor experiência fitness possível, oferecendo aulas que vão além do esperado, com os profissionais mais relevantes do mercado. Prepare-se para abraçar uma nova paixão, desbravar novos horizontes e desafiar seus próprios limites. Venha fazer parte da família HYPER e descubra o que é possível alcançar quando você tem o apoio certo ao seu lado!
                </Subtitle>
                </Container>
                <div className="gymClasses__cards">
                    <ul className="gymClasses__cards__list">
                        <li className="gymClasses__cards__list__item">
                            <img className="gymClasses__cards__list__item__image" src={[DanceImage]} alt="" />
                            <div className="gymClasses__cards__list__item__content">
                                <CardTitle>Dança</CardTitle>
                                <img className="gymClasses__cards__list__item__icon" src={[Danca]} alt="" />
                                <Link to='/sejaHYPER' rel="noopener noreferrer" className="gymClasses__cards__list__item__button">
                                    Torne-se HYPER
                                </Link>
                            </div>
                        </li>
                        
                        <li className="gymClasses__cards__list__item">
                            <img className="gymClasses__cards__list__item__image" src={[MusculacaoImage]} alt="" />
                            <div className="gymClasses__cards__list__item__content">
                                <CardTitle>Musculação</CardTitle>
                                <img className="gymClasses__cards__list__item__icon" src={[Musculacao]} alt="" />
                                <Link to='/sejaHYPER' rel="noopener noreferrer" className="gymClasses__cards__list__item__button">
                                    Torne-se HYPER
                                </Link>
                            </div>
                        </li>

                        <li className="gymClasses__cards__list__item">
                            <img className="gymClasses__cards__list__item__image" src={[NatacaoImage]} alt="" />
                            <div className="gymClasses__cards__list__item__content">
                                <CardTitle>Natação</CardTitle>
                                <img className="gymClasses__cards__list__item__icon" src={[Natacao]} alt="" />
                                <Link to='/sejaHYPER' rel="noopener noreferrer" className="gymClasses__cards__list__item__button">
                                    Torne-se HYPER
                                </Link>
                            </div>
                        </li>

                        <li className="gymClasses__cards__list__item">
                            <img className="gymClasses__cards__list__item__image" src={[CombateImage]} alt="" />
                            <div className="gymClasses__cards__list__item__content">
                                <CardTitle>Combate</CardTitle>
                                <img className="gymClasses__cards__list__item__icon" src={[Combate]} alt="" />
                                <Link to='/sejaHYPER' rel="noopener noreferrer" className="gymClasses__cards__list__item__button">
                                    Torne-se HYPER
                                </Link>
                            </div>
                        </li>

                    </ul>
                </div>
            </section>

            <section id="Price">
                <Container>
                    <Price/>
                </Container>
            </section>

            <section id="Imc">
                <Title>Antes de treinar você precisa <span className="title__emphasis">se conhecer</span>!</Title>
                <div className="gridImc">
                    <div className="gridImc__content">
                        <Subtitle>
                            Pronto para descobrir o que seu IMC revela sobre sua saúde? Nosso Calculador de IMC está a apenas um clique de distância! Clique no botão abaixo para ser redirecionado para a página da calculadora.
                            <br/><br/>
                            Insira seu peso e altura e obtenha insights sobre sua composição corporal e estado nutricional. A saúde começa com o conhecimento, e estamos aqui para ajudar você a tomar medidas informadas em direção a um estilo de vida mais saudável. Clique agora e desvende os segredos do seu IMC!
                        </Subtitle>
                        <div className="btn">
                        <Link to='/ImcCalculadora' rel="noopener noreferrer" className="calc">Calcular meu IMC</Link>
                        </div>
                    </div>
                    <div className="gridImc__content__image">
                        <img className="gridImc__content__image__content" src={[ImcImage]} alt="" />
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}