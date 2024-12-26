import { styled } from 'styled-components';
import tags from './tags.json';

const TagsContainer = styled.section`
  display: flex;
  align-items: center;
  margin-top: 56px;
  gap: 64px;
`;

const TagTitulo = styled.h3`
  color: #D9D9D9;
  font-size: 24px;
  margin: 0;
`;

const Tag = styled.button`
  cursor: pointer;
  padding: 12px;
  font-size: 24px;
  color: #FFFFFF;
  box-sizing: border-box;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: background-color 0.3s ease;
  background: rgba(217, 217, 217, 0.3);
  &:hover {
    border-color: #C98CF1;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: end;
  gap: 24px;
`;

const Tags = () => {
  return (
    <TagsContainer>
      <TagTitulo>Busque por tags:</TagTitulo>
      <Div>
        {tags.map(tag => <Tag key={tag.id}>{tag.titulo}</Tag>)}
      </Div>
    </TagsContainer>
  );
}

export default Tags;