import { styled } from "styled-components";

const FigureEstilizada = styled.figure`
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 100%;
  min-height: 328px;
  margin: 0;
  border-radius: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${props => `url(${props.$backgroundImage})`};
`;

const TituloEstilizado = styled.h1`
  padding: 0 64px;
  max-width: 300px;
  line-height: 48px;
  font-weight: 400;
  font-size: 40px;
  color: #FFFFFF;
`;

const Banner = ({ texto, backgroundImage }) => {
  return (
    <FigureEstilizada $backgroundImage={backgroundImage}>
      <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizada>
  )
}

export default Banner;