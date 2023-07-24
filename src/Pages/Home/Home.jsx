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
import { Container, Title, Subtitle, CardTitle } from "../../Components/Styles/ComponentsStyle";

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
                    <Subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, at facere reiciendis soluta, quae, earum tenetur et molestias architecto ratione alias. Repellat nulla odio nobis nemo est, ipsam esse quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit est ratione laborum ducimus dicta illum non reprehenderit voluptas nulla. Soluta, harum veniam! Facere magnam id dolorum placeat totam incidunt nemo!</Subtitle>
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
                <Subtitle>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto quia dolore commodi libero cum odit aliquam iusto modi, hic at, sed odio numquam obcaecati molestias nostrum reiciendis in dignissimos laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, placeat animi eum fuga necessitatibus iure dignissimos porro maiores. Ipsa corrupti voluptas alias labore nostrum. Iusto officiis soluta in et tempore.</Subtitle>
                </Container>
                <div className="gymClasses__cards">
                    <ul className="gymClasses__cards__list">
                        <li className="gymClasses__cards__list__item">
                            <img className="gymClasses__cards__list__item__image" src="http://via.placeholder.com/250x300" alt="" />
                            <div className="gymClasses__cards__list__item__content">
                                <CardTitle>Dança</CardTitle>
                                <img className="gymClasses__cards__list__item__icon" src={[Danca]} alt="" />
                                <a href="http://" rel="noopener noreferrer" className="gymClasses__cards__list__item__button">
                                    Torne-se HYPER
                                </a>
                            </div>
                        </li>
                        
                        <li className="gymClasses__cards__list__item">
                            <img className="gymClasses__cards__list__item__image" src="http://via.placeholder.com/250x300" alt="" />
                            <div className="gymClasses__cards__list__item__content">
                                <CardTitle>Musculação</CardTitle>
                                <img className="gymClasses__cards__list__item__icon" src={[Musculacao]} alt="" />
                                <a href="http://" rel="noopener noreferrer" className="gymClasses__cards__list__item__button">
                                    Torne-se HYPER
                                </a>
                            </div>
                        </li>

                        <li className="gymClasses__cards__list__item">
                            <img className="gymClasses__cards__list__item__image" src="http://via.placeholder.com/250x300" alt="" />
                            <div className="gymClasses__cards__list__item__content">
                                <CardTitle>Natação</CardTitle>
                                <img className="gymClasses__cards__list__item__icon" src={[Natacao]} alt="" />
                                <a href="http://" rel="noopener noreferrer" className="gymClasses__cards__list__item__button">
                                    Torne-se HYPER
                                </a>
                            </div>
                        </li>

                        <li className="gymClasses__cards__list__item">
                            <img className="gymClasses__cards__list__item__image" src="http://via.placeholder.com/250x300" alt="" />
                            <div className="gymClasses__cards__list__item__content">
                                <CardTitle>Combate</CardTitle>
                                <img className="gymClasses__cards__list__item__icon" src={[Combate]} alt="" />
                                <a href="http://" rel="noopener noreferrer" className="gymClasses__cards__list__item__button">
                                    Torne-se HYPER
                                </a>
                            </div>
                        </li>

                    </ul>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}