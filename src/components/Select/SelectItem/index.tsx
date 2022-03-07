import { Container } from './styles';

type SelectItemProps = {
  label: string;
  isActive: boolean;
  handleIsActive(label: string): void;
};

export function SelectItem({
  label,
  isActive,
  handleIsActive
}: SelectItemProps) {
  return (
    <Container isActive={isActive} onClick={() => handleIsActive(label)}>
      <span>{label}</span>
    </Container>
  );
}
