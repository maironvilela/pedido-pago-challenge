import { Container, Content, List } from './styles';
import { FaEllipsisV, FaCheck } from 'react-icons/fa';
import { useCallback, useState } from 'react';
import { SelectItem } from './SelectItem';

type SelectProps = {
  setSelectedOption(label: string): void;
  selectedOption: string;
  itens: string[];
};

export function Select({
  setSelectedOption,
  selectedOption,
  itens
}: SelectProps) {
  const handleIsActive = useCallback(
    (label: string) => {
      setSelectedOption(label);
    },
    [setSelectedOption]
  );

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
