import { Container, Content, List } from './styles';
import { FaEllipsisV, FaCheck } from 'react-icons/fa';
import { useCallback, useState } from 'react';
import { SelectItem } from './SelectItem';

export function Select() {
  const itens = ['Colaboradores', 'Cargos'];

  const [isShowItens, setIsShowItens] = useState(false);

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
        <List>
          {itens.map((item) => (
            <SelectItem label={item} key={item} />
          ))}
        </List>
      )}
    </Container>
  );
}
