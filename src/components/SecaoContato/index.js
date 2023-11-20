import './style.css'

export default function SecaoContato() {
  return (
    <section id="contato" className='contact'>
      <div>
        <h4>FALE CONOSCO</h4>
        <p>
          Não perca tempo, venha conhecer uma de nossas lojas ou entre em
          contato através de nossas redes sociais ou da central de atendimento.
        </p>
      </div>

      <div className='listsContainer'>
        <div>
          <h5>Contato</h5>
          <ul type="none">
            <li>
              <img></img>
              <p>Nova Iguaçu, RJ</p>
            </li>
            <li>
              <img></img>
              <p>(21) 9999-9999</p>
            </li>
            <li>
              <img></img>
              <p>contato@oticavida.com</p>
            </li>
          </ul>
        </div>
        <div>
          <h5>Nossas Redes Sociais</h5>
          <ul type="none">
            <li>
              <img></img>
              <p>/OticaVida</p>
            </li>
            <li>
              <img></img>
              <p>@oticavidarj</p>
            </li>
            <li>
              <img></img>
              <p>@oticavidarj</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
