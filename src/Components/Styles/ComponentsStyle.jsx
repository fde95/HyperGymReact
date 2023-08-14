import styled from "styled-components";

export const ContainerNav = styled.div`
    padding: 16px 0;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 767px){
        width: 90%;
        display: inline;
        text-align: center;
    }
    @media (min-width: 768px) and (max-width: 1023px){
        width: 90%;
    }
`

export const Container = styled.div`
    padding: 16px 0;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    text-align: justify;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    @media (max-width: 767px){
        width: 90%;
    }
    @media (min-width: 768px) and (max-width: 1023px){
        width: 90%;
    }
`

export const Title = styled.h2`
    color: #C4C4C4;
    font-weight: normal;
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 24px;
    background-color: transparent;

    .title__emphasis{
        font-weight: 900;
        color: #16f275;
        text-transform: uppercase;
        background-color: transparent;
    }
    @media (max-width: 767px){
        font-size: 1.7em;
    }
`

export const Subtitle = styled.p`
    font-size: 1.2em;
    color: #ececec;
    margin: 0;
    text-align: justify;
    background-color: transparent;

    @media (max-width: 767px){
        font-size: 1em;
    }
`

export const CardTitle = styled.h3`
    margin-bottom: 24px;
    text-transform: uppercase;
    color: #13F261;
`

export const FooterDescription = styled.p`
    font-size: .8em;
    margin-top: 16px;
    color: #C4C4C4;
    text-align: center;
    @media (max-width: 767px){
        font-size: .6em;
    }
`

export const Copy = styled.p`
    margin-top: 16px;
    color: #13F261;
    text-align: center;
    margin: 16px 0 24px 0;
    
    .copy__link{
        color: #13F261;
        text-decoration: none;
        font-weight: bold;
    }
    .copy__link:hover{
        color: #0DA643;
    }

    @media (max-width: 767px){
        font-size: .7em;
    }
`

export const FooterSocialMedia = styled.ul`
    display: flex;
    justify-content: center;
    margin-top: 16px;

    .social__midia__link{
        text-decoration: none;
        margin: 10px;
        font-size: 1.5em;
    }

    .social__midia__link__item{
        color: #13F261;
    }
    .social__midia__link__item:hover{
        color: #0DA643;
    }
`