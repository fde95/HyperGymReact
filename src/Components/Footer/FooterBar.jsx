import React from "react";
import './FooterBar.css'
import { Container, FooterDescription, FooterSocialMedia, Copy } from "../Styles/ComponentsStyle";
import LogoHyper from '../../images/navbar__logo.png'

export default function Footer () {
    return (
        <footer id="footer">
            <Container>
                <div className="footer__brand">
                    <a href="https://www.linkedin.com/in/fde95/" className="footer__brand__link" target="_blank" title="Conheça o DEV" alt="LinkedIn" rel="noreferrer">
                        <img src={[LogoHyper]} alt="Logo Hyper" className="footer__brand__link__logo"/>
                    </a>
                </div>
                <FooterDescription>
                    Avenida do Maromba, nº1000 - Jardim No Pain No Gain - 00000-000
                    <br />
                    HYPER GYM Centro de Treinamento Atlético e Dança ltda.
                    <br />
                    CNPJ: 00.000.000/0000-00
                    <br />
                    faleconosco@hypergym.com
                </FooterDescription>
                <FooterSocialMedia>
                <a class="social__midia__link" href="https://www.linkedin.com/in/fde95/" target="_blank" alt="LinkedIn" title="Conheça o Dev" rel="noreferrer">
                    <li class="social__midia__link__item">
                        <i class="bi bi-facebook"></i>
                    </li>
                </a>
                <a class="social__midia__link" href="https://www.linkedin.com/in/fde95/" target="_blank" alt="LinkedIn" title="Conheça o Dev" rel="noreferrer">
                    <li class="social__midia__link__item">
                        <i class="bi bi-instagram"></i>
                    </li>
                </a>
                <a class="social__midia__link" href="https://www.linkedin.com/in/fde95/" target="_blank" alt="LinkedIn" title="Conheça o Dev" rel="noreferrer">
                    <li class="social__midia__link__item">
                        <i class="bi bi-linkedin"></i>
                    </li>
                </a>
                <a class="social__midia__link" href="https://www.linkedin.com/in/fde95/" target="_blank" alt="LinkedIn" title="Conheça o Dev" rel="noreferrer">
                    <li class="social__midia__link__item">
                        <i class="bi bi-youtube"></i>
                    </li>
                </a>
                <a class="social__midia__link" href="https://www.linkedin.com/in/fde95/" target="_blank" alt="LinkedIn" title="Conheça o Dev" rel="noreferrer">
                    <li class="social__midia__link__item">
                        <i class="bi bi-spotify"></i>
                    </li>
                </a>
                </FooterSocialMedia>
                <Copy>
                    2023 &copy; Criado e Desenvolvido por <a className="copy__link" href="https://www.linkedin.com/in/fde95/" target="_blank" rel="noopener noreferrer">Felipe Espinoza</a>
                </Copy>
            </Container>
        </footer>
    )
}