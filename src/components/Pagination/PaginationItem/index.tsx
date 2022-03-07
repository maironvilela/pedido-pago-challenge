import { Container } from './styles';

export type PaginationItemProps = {
  value: string;
  isActive?: boolean;
};
export function PaginationItem({
  value,
  isActive = false
}: PaginationItemProps) {
  return <Container isActive={isActive}>{value}</Container>;
}
