import { styled } from "styled-components";
import search from './search.png';

const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
  width: 566px;
  height: 56px;
  line-height: 20px;
  padding: 12px 16px;
  font-weight: 400;
  font-size: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  border: 2px solid;
  color: #D9D9D9;
  border-color: #C98CF1;
  background: transparent;
`;

const IconeLupa = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

const CampoTexto = (props) => {
  return (
    <ContainerEstilizado>
      <CampoTextoEstilizado {...props} />
      <IconeLupa src={search} alt="ícone de lupa" />
    </ContainerEstilizado>
  );
}

export default CampoTexto;