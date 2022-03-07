import { useCallback, useState } from 'react';

import { Container } from './styles';

type SelectItemProps = {
  label: string;
};

export function SelectItem({ label }: SelectItemProps) {
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = useCallback(() => {
    setIsActive((isActive) => !isActive);
  }, []);

  return (
    <Container isActive={isActive} onClick={handleIsActive}>
      <span>{label}</span>
    </Container>
  );
}
