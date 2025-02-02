import './Rodape.css'

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/facebook.png" alt="" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/twitter.png" alt="" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="/instagram.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/logo.png" alt="" />
      </section>
      <section>
        <p>Desenvolvido por JuniorLima36.</p>
      </section>
    </footer>
  )
}

export default Rodape