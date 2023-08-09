import React from "react";
import './Navbar.css'
import { Link } from 'react-router-dom'
import { ContainerNav } from "../Styles/ComponentsStyle";
import LogoHyper from '../../images/navbar__logo.png'

export default function Navbar () {
    return(
        <nav className="navbar">
            <ContainerNav>
            <img src={[LogoHyper]} alt="Hyper Logo" className="navbar__brand"/>
            <ul className="navbar__links">
                <li className="navbar__link">
                    <Link className="navbar__links__item" to='/'>Home</Link>
                </li>
                <li className="navbar__link">
                    <Link className="navbar__links__item" to='/unidades'>Unidade</Link>
                </li>
                <li className="navbar__link">
                    <Link className="navbar__links__item" to='/ImcCalculadora'>IMC</Link>
                </li>
                <li className="navbar__link">
                    <Link className="navbar__links__item emphasis" to='/sejaHYPER'>Seja Hyper</Link>
                </li>
            </ul>
            </ContainerNav>
        </nav>
    )
}