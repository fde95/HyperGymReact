import React from "react";
import './Home.css'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/FooterBar";
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
import CombateImage from '../../images/classes/fight__class.png'
import { Container, Title, Subtitle, CardTitle } from "../../Components/Styles/ComponentsStyle";
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
                        <img className="experience__list__item__image" src="http://via.placeholder.com/300x300" alt="Imagem figurativa" />
                        <CardTitle>Privacidade</CardTitle>
                        <img src={[Privacidade]} alt="" />
                    </li>
                    <li className="experience__list__item">
                        <img className="experience__list__item__image" src="http://via.placeholder.com/300x300" alt="Imagem figurativa" />
                        <CardTitle>Qualidade</CardTitle>
                        <img src={[Qualidade]} alt="" />
                    </li>
                    <li className="experience__list__item">
                        <img className="experience__list__item__image" src="http://via.placeholder.com/300x300" alt="Imagem figurativa" />
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
                    <div className="price__box">
                    <Title>Mais que uma acadêmia, um <br/> <span className="title__emphasis"> centro de evolução</span></Title>
                    <Subtitle>Os melhores profissionais, equipamentos, infraestrutura e sem letrinhas miúdas! Tudo para você alcançar a sua transformação com uma experiência única e incomparável pagando apenas pelo mês que for treinar, sem taxa de matrícula nem taxa de rompimento de contrato.</Subtitle>

                    <div className="price__list">
                        <ul className="price__list__contain">
                            <li>
                                <div className="price__list__text__header">
                                </div>
                                <ul className="price__list__text"> 
                                    <li className="price__list__text__item">
                                        <p>
                                            Acesso a todas as atividades
                                        </p>
                                    </li>
                                    <li className="price__list__text__item">
                                        <p>
                                            Hyper No Excuses <span>treinos online</span>
                                        </p>
                                    </li>
                                    <li className="price__list__text__item">
                                        <p>
                                            Hyper App
                                        </p>
                                    </li>
                                    <li className="price__list__text__item">
                                        <p>
                                            Suplementação HYPER*
                                        </p>
                                    </li>
                                    <li className="price__list__text__item">
                                        <p>
                                            Profissional trainer 
                                        </p>
                                    </li>
                                    <li className="price__list__text__item">
                                        <p>
                                            Nutricionista
                                        </p>
                                    </li>
                                    <li className="price__list__text__item">
                                        <p>
                                            Avaliação física mensal
                                        </p>
                                    </li>
                                    <li className="price__list__text__item">
                                        <p>
                                            Estacionamento
                                        </p>
                                    </li>
                                    <li className="price__list__text__item">
                                        <p>
                                            Cadeira de massagem
                                        </p>
                                    </li>
                                    <li className="price__list__text__item">
                                        <p>
                                            Hyper Isotonic
                                        </p>
                                    </li>
                                    <li className="price__list__text__item">
                                        <p>
                                            Leve até 4 amigos uma vez por mês com você
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li className="price__list__basicPlan">
                                <div className="price__list__basicPlan__header">
                                    <h3>Plano Health +</h3>
                                    <p>O primeiro passo para a sua mudança</p>
                                </div>
                                <ul className="price__list__check"> 
                                    <li className="price__list__check__item">
                                        <i class="bi bi-check-lg"></i>
                                    </li>
                                    <li className="price__list__check__item">
                                        <i class="bi bi-check-lg"></i>
                                    </li>
                                    <li className="price__list__check__item">
                                        <i class="bi bi-check-lg"></i>
                                    </li>
                                    <li className="price__list__uncheck__item">
                                        <i class="bi bi-x-lg"></i>
                                    </li>
                                    <li className="price__list__uncheck__item">
                                        <i class="bi bi-x-lg"></i>
                                    </li>
                                    <li className="price__list__uncheck__item">
                                        <i class="bi bi-x-lg"></i>
                                    </li>
                                    <li className="price__list__check__item">
                                        <i class="bi bi-check-lg"></i>
                                    </li>
                                    <li className="price__list__check__item">
                                        <i class="bi bi-check-lg"></i>
                                    </li>
                                    <li className="price__list__check__item">
                                        <i class="bi bi-check-lg"></i>
                                    </li>
                                    <li className="price__list__uncheck__item">
                                        <i class="bi bi-x-lg"></i>
                                    </li>
                                    <li className="price__list__uncheck__item">
                                        <i class="bi bi-x-lg"></i>
                                    </li>
                                </ul>
                                <div className="price__list__basicPlan__footer">
                                    <p className="price__list__text__oldPrice">De: <span className="lineThrough">R$130,00/mês</span></p>
                                    <p className="price__list__text__newPrice">Por <span>R$99,90</span></p>
                                </div>
                            </li>
                            <li className="price__list__hyperPlan">
                                <div className="price__list__hyperPlan__header">
                                    <h3>Plano HYPER</h3>
                                    <p>PRO de verdade! Alcance os melhores resultados!</p>
                                </div>
                                <ul className="price__list__check"> 
                                    <li className="price__list__check__item">
                                        <i class="bi bi-check-lg"></i>
                                    </li>
                                    <li className="price__list__check__item">
                                        <i class="bi bi-check-lg"></i>
                                    </li>
                                    <li className="price__list__check__item">
                                        <i class="bi bi-check-lg"></i>
                                    </li>
                                    <li className="price__list__check__item">
                                        <i class="bi bi-check-lg"></i>
                                    </li>
                                    <li className="price__list__check__item">
                                        <i class="bi bi-check-lg"></i>
                                    </li>
                                    <li className="price__list__check__item">
                                        <i class="bi bi-check-lg"></i>
                                    </li>
                                    <li className="price__list__check__item">
                                        <i class="bi bi-check-lg"></i>
                                    </li>
                                    <li className="price__list__check__item">
                                        <i class="bi bi-check-lg"></i>
                                    </li>
                                    <li className="price__list__check__item">
                                        <i class="bi bi-check-lg"></i>
                                    </li>
                                    <li className="price__list__check__item">
                                        <i class="bi bi-check-lg"></i>
                                    </li>
                                    <li className="price__list__check__item">
                                        <i class="bi bi-check-lg"></i>
                                    </li>
                                </ul>
                                <div className="price__list__hyperPlan__footer">
                                    <p className="price__list__text__oldPrice">De: <span className="lineThrough">R$220,00/mês</span></p>
                                    <p className="price__list__text__newPrice">Por <span>R$149,90</span></p>
                                </div>
                            </li>
                        </ul>

                        <div className="price__list__contain__card">
                            <h2 className="card__title">
                                Plano Health +
                            </h2>
                            <p className="card__description">
                                O primeiro passo para a sua mudança
                            </p>
                            <p className="price__list__text__oldPrice">De: <span className="lineThrough">R$130,00/mês</span></p>
                            <p className="price__list__text__newPrice">Por <span>R$99,90</span></p>
                        </div>
                        <div className="price__list__contain__card">
                            <h2 className="card__title">
                                Plano HYPER
                            </h2>
                            <p className="card__description">
                                PRO de verdade! Alcance os melhores resultados!
                            </p>
                            <p className="price__list__text__oldPrice">De: <span className="lineThrough">R$220,00/mês</span></p>
                            <p className="price__list__text__newPrice">Por <span>R$149,90</span></p>
                        </div>
                    </div>
                    </div>
                </Container>
            </section>
        </main>
        <Footer/>
        </>
    )
}