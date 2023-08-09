import React, { useState, useEffect } from 'react';
import './ImcCalc.css'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/FooterBar";
import { Container, Title, Subtitle } from '../../Components/Styles/ComponentsStyle';


function IMCCalculator() {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [result, setResult] = useState(null);

    const calculateIMC = () => {
        const imc = parseFloat(weight) / Math.pow(parseFloat(height), 2);
        let classification = '';

        if (imc < 17) {
        classification = 'muito abaixo do peso';
        } else if (imc >= 17 && imc < 18.5) {
        classification = 'abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
        classification = 'peso normal';
        } else if (imc >= 25 && imc < 30) {
        classification = 'acima do peso';
        } else if (imc >= 30 && imc < 35) {
        classification = 'com obesidade I';
        } else if (imc >= 35 && imc < 40) {
        classification = 'com obesidade II (severa)';
        } else {
        classification = 'com obesidade III (mórbida)';
        }

        setResult({ imc, classification });
    };

    const resetCalculator = () => {
        setWeight('');
        setHeight('');
        setResult(null);
    };

    return (
        <>
            <Navbar/>
            <div className="heroImc"></div>
                <main>
                    <Container>
                        <Title>Calculadora de <span className='title__emphasis'>IMC</span></Title>
                        <Subtitle>
                            Saiba como está sua saúde com o Índice de Massa Corporal (IMC). Insira seu peso e altura nos campos fornecidos e clique em "Calcular" para descobrir seu IMC e sua classificação de peso. 
                            <br/><br/>
                            O IMC é uma ferramenta útil para avaliar se seu peso está dentro de uma faixa considerada saudável.
                            <br/><br/>
                            Lembre-se de que o IMC é apenas uma estimativa e não leva em conta todos os fatores individuais. Se você tiver dúvidas sobre sua saúde, consulte um profissional médico.
                            Cuide do seu bem-estar e use essa ferramenta como uma orientação inicial para sua saúde.</Subtitle>
                        <div className='imc'>
                                {!result ? (
                                    <form className='imc__form' onSubmit={calculateIMC}>
                                    <label className='imc__form__label'>
                                        Peso (kg):
                                        <br />
                                        <input className='imc__form__input' type="number" placeholder='Ex.: 89,5' value={weight} onChange={(e) => setWeight(e.target.value)} />
                                    </label>
                                    <br />
                                    <label  className='imc__form__label'>
                                        Altura (metros):
                                        <br />
                                        <input className='imc__form__input' type="number" step="0.01" placeholder='Ex.: 1,80' value={height} onChange={(e) => setHeight(e.target.value)} />
                                    </label>
                                    <br />
                                    <button className='imc__form__btn' type="submit">Calcular</button>
                                    </form>
                                ) : (
                                    <div className='imc__result'>
                                        <p className='imc__result__title'>Seu IMC é de <b>{result.imc.toFixed(2)}</b>. <br/> Você está <b>{result.classification}</b>.</p>
                                        <table className='tabelaImc'>
                                            <thead className='tabelaImc__header'>
                                                <tr className='tabelaImc__header__title'>
                                                    <th className='tabelaImc__header__content' >RESULTADO</th>
                                                    <th className='tabelaImc__header__content' >SITUAÇÃO</th>
                                                </tr>
                                            </thead>
                                            <tbody className='tabelaImc__body'>
                                                <tr className='tabelaImc__body__title'>
                                                    <td className='tabelaImc__body__content'>Abaixo de 17</td>
                                                    <td className='tabelaImc__body__content'>Muito abaixo do peso</td>
                                                </tr>
                                                <tr className='tabelaImc__body__title'>
                                                    <td className='tabelaImc__body__content'>Entre 17 e 18,49</td>
                                                    <td className='tabelaImc__body__content'>Abaixo do peso</td>
                                                </tr>
                                                <tr className='tabelaImc__body__title'>
                                                    <td className='tabelaImc__body__content'>Entre 18,5 e 24,99</td>
                                                    <td className='tabelaImc__body__content'>Peso normal</td>
                                                </tr>
                                                <tr className='tabelaImc__body__title'>
                                                    <td className='tabelaImc__body__content'>Entre 25 e 29,99</td>
                                                    <td className='tabelaImc__body__content'>Acima do peso</td>
                                                </tr>
                                                <tr className='tabelaImc__body__title'>
                                                    <td className='tabelaImc__body__content'>Entre 30 e 34,99</td>
                                                    <td className='tabelaImc__body__content'>Obesidade</td>
                                                </tr>
                                                <tr className='tabelaImc__body__title'>
                                                    <td className='tabelaImc__body__content'>Entre 35 e 39,99</td>
                                                    <td className='tabelaImc__body__content'>Obesidade II (severa)</td>
                                                </tr>
                                                <tr className='tabelaImc__body__title'>
                                                    <td className='tabelaImc__body__content'>Acima de 40</td>
                                                    <td className='tabelaImc__body__content'>Obesidade III (mórbida)</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button className='imc__form__btn' onClick={resetCalculator}>Refazer</button>
                                    </div>
                                )}
                        </div>
                    </Container>
                </main>
            <Footer/>
        </>
    );
}

export default IMCCalculator;