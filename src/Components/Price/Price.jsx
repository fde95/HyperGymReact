import React, {useEffect} from "react";
import './Price.css';
import { Link } from "react-router-dom";
import { Title, Subtitle } from "../Styles/ComponentsStyle";

export default function Price () {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    return(
        <>
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
                            <Link to='/sejaHYPER' rel="noopener noreferrer" className="enroll">
                                Matricule-se
                            </Link>
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
                            <Link to='/sejaHYPER' rel="noopener noreferrer" className="enroll__hyper">
                                SEJA HYPER
                            </Link>
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
                    <Link to='/sejaHYPER' rel="noopener noreferrer" className="enroll">
                        Matricule-se
                    </Link>
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
                    <Link to='/sejaHYPER' rel="noopener noreferrer" className="enroll__hyper">
                    SEJA HYPER
                    </Link>
                </div>
            </div>
            </div>
        </>
    )
}