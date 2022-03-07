import { Container } from './styles';

type BadgeProps = {
  description: string;
  type?: 'success' | 'error';
};
export function Badge({ description, type = 'success' }: BadgeProps) {
  return <Container type={type}>{description}</Container>;
}
