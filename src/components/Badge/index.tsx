import { useMemo, useState } from 'react';
import { Container } from './styles';

export enum BadgeType {
  ACTIVE,
  INACTIVE
}
export type BadgeProps = {
  label?: BadgeType;
  isEdit?: boolean;
};

export function Badge({
  label: labelProps = BadgeType.ACTIVE,
  isEdit = false
}: BadgeProps) {
  const [isActive, setIsActive] = useState(labelProps === BadgeType.ACTIVE);

  const label = useMemo(() => {
    return isActive ? 'Ativo' : 'Inativo';
  }, [isActive]);

  const toggleIsActive = () => {
    setIsActive((isActive) => !isActive);
  };

  return (
    <Container
      className="badge"
      status={isActive}
      onClick={toggleIsActive}
      disabled={!isEdit}
      isEdit={isEdit}
    >
      {label}
    </Container>
  );
}
