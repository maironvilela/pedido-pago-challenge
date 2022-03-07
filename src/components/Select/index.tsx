import { Container, Content, List } from './styles';
import { FaEllipsisV, FaCheck } from 'react-icons/fa';
import { useCallback, useState } from 'react';
import { SelectItem } from './SelectItem';

export function Select() {
  const [selectedOption, setSelectedOption] = useState('Selecione uma Opção');

  const handleIsActive = useCallback((label: string) => {
    setSelectedOption(label);
  }, []);

  const itens = ['Colaboradores', 'Cargos'];

  const [isShowItens, setIsShowItens] = useState(false);

  const handleShowItens = useCallback(() => {
    setIsShowItens((isShowItens) => !isShowItens);
  }, []);

  return (
    <Container isShowItens={isShowItens}>
      <Content>
        <span>{selectedOption}</span>
        <button onClick={handleShowItens}>
          {isShowItens ? <FaCheck /> : <FaEllipsisV />}
        </button>
      </Content>

      {isShowItens && (
        <List>
          {itens.map((item) => (
            <SelectItem
              label={item}
              key={item}
              isActive={item === selectedOption}
              handleIsActive={handleIsActive}
            />
          ))}
        </List>
      )}
    </Container>
  );
}
