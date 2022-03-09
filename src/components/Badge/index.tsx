import { Container } from './styles';

type BadgeProps = {
  description: string;
  type?: 'active' | 'inactive';
};
export function Badge({ description, type = 'active' }: BadgeProps) {
  return <Container type={type}>{description}</Container>;
}
