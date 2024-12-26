import { styled } from "styled-components";
import Titulo from "../../Titulo";
import fotos from './fotos-populares.json';

const ColunaFotos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Imagem = styled.img`
  max-width: 212px;
  border-radius: 20px;
`;

const Botao = styled.button`
  cursor: pointer;
  width: 100%;
  margin-top: 16px;
  padding: 12px 20px;
  font-size: 20px;
  color: #fff;
  border: 2px solid;
  border-radius: 10px;
  border-color: #C98CF1;
  background-color: transparent;
`;

const Populares = () => {
  return (
    <section>
      <Titulo $alinhamento='center'>Populares</Titulo>
      <ColunaFotos>
        {fotos.map(foto => <Imagem key={foto.id} src={foto.path} alt={foto.alt}/>)}
      </ColunaFotos>
      <Botao>Ver mais</Botao>
    </section>
  );
}

export default Populares;