import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/FooterBar"
import { Container, Title, Subtitle } from "../../Components/Styles/ComponentsStyle";
import "./Unidades.css"

export default function Unidades () {
    return(
        <>
        <Navbar/>
                <main>
                    <div className="cardio">
                    <Container>
                        <Title>Mais que uma academia, um <span className="title__emphasis">Estilo de vida</span></Title>
                        <Subtitle>Bem-vindo à Hyper: Aqui, a busca por um estilo de vida saudável vai além do exercício. Somos um espaço de transformação, onde corpo, mente e espírito se unem. Nossos instrutores são mentores comprometidos, guiando você rumo às suas metas. Oferecemos programas diversos, de treinos intensos a práticas revitalizantes. Nossa comunidade acolhedora compartilha conquistas e inspira. Na Hyper, não vendemos apenas uma academia, mas sim um compromisso com sua evolução completa. Junte-se a nós e abrace um estilo de vida vibrante e saudável!</Subtitle>

                        <div className="location">
                            <a href="https://www.linkedin.com/in/fde95/" target="_blank" rel="noreferrer" className="linkAddress">
                                <i class="bi bi-geo-fill"></i>
                                Avenida do Maromba, nº1000 - Jardim No Pain No Gain - 00000-000
                            </a>
                        </div>
                    </Container>
                    </div>
                </main>
            
        <Footer/>
        </>
    )
}