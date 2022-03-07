import { Container } from './styles';

type BadgeProps = {
  description: string;
};
export function Badge({ description }: BadgeProps) {
  return <Container>{description}</Container>;
}
