import { Container } from './styles';

type TitleProps = {
  title: string;
};

export function Title({ title }: TitleProps) {
  return (
    <Container className="title">
      <h1>{title}</h1>
    </Container>
  );
}
