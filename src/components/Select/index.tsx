import { Container, Content } from './styles';
import { FaEllipsisV, FaCheck } from 'react-icons/fa';
import { useCallback, useState } from 'react';
import { Checkbox } from './SelectItem';
import { Pagination } from '../Pagination';

export function Select() {
  const [isShowItens, setIsShowItens] = useState(true);

  const handleShowItens = useCallback(() => {
    setIsShowItens((isShowItens) => !isShowItens);
  }, []);

  return (
    <Container isShowItens={isShowItens}>
      <Content>
        <span>Colaboradores</span>
        <button onClick={handleShowItens}>
          {isShowItens ? <FaCheck /> : <FaEllipsisV />}
        </button>
      </Content>

      {isShowItens && (
        <>
          <Checkbox />
          <Checkbox />
          <Checkbox />
          <Checkbox />
          <Checkbox />
          <Checkbox />
          <Checkbox />
        </>
      )}

      <Pagination />
    </Container>
  );
}
