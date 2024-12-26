import { styled } from "styled-components";
import BotaoIcone from "../../BotaoIcone";

const Figure = styled.figure`
  width: ${props => props.$expandida ? '90%' : '460px'};
  display: flex;
  flex-direction: column;
  margin: 0;
  max-width: 100%;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    padding: 12px;
    color: white;
    box-sizing: border-box;
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    h3 {
      font-family: 'GandhiSansBold';
    }
    h4 {
      flex-grow: 1;
    }
    h3, h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Rodape = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Imagem = ({ foto, expandida=false, aoZoomSolicitado, aoAlternarFavorito }) => {
  let iconeFavorito = '/icones/favorito.png';

  if (foto.favorita) {
    iconeFavorito = '/icones/favorito-ativo.png'
  }

  return (
    <Figure $expandida={expandida} id={`foto-${foto.id}`}>
      <img src={foto.path} alt={foto.alt} />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <Rodape>
          <h4>{foto.fonte}</h4>
          <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
            <img src={iconeFavorito} alt="Icone de favorito" />
          </BotaoIcone>
          {!expandida && <BotaoIcone aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
            <img src="/icones/expandir.png" alt="Icone de expandir" />
          </BotaoIcone>}
        </Rodape>
      </figcaption>
    </Figure>
  );
}

export default Imagem;