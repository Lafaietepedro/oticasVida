import './style.css'

export default function SecaoSobre() {
  return (
    <section id="sobre" className='about'>
      <h3>QUEM SOMOS NÓS?</h3>
      <p>
        Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou
        suas atividades focada no atendimento ao público de renda mais baixa,
        sempre com o objetivo de proporcionar ao cliente bom atendimento,
        qualidade e preço baixo.
      </p>

      <div className='aboutContainer'>
        <img src="./assets/loja.png"></img>

        <div className='aboutText'>
            <h4>NOSSAS FILIAIS</h4>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
        </div>

        <div className='aboutText'>
            <h4>ATENDIMENTO FLEXÍVEL</h4>
            <p>Nossa equipe possui é treinada para te atender</p>
        </div>

        <img src="./assets/atendimento.png"></img>
      </div>
    </section>
  );
}
