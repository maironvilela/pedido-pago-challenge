import { useCallback, useState } from 'react';
import { Avatar } from '../../Avatar';
import { Container } from './styles';

export function Checkbox() {
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = useCallback(() => {
    setIsActive((isActive) => !isActive);
  }, []);

  return (
    <Container isActive={isActive} onClick={handleIsActive}>
      <div>
        <Avatar />
        <label htmlFor="scales">Scales</label>
      </div>
    </Container>
  );
}
