import { Avatar } from '../Avatar';
import { Logo } from '../Logo';
import { Container, Content } from './styles';

type HeaderProps = {
  fullName: string;
};

export function Header({ fullName }: HeaderProps) {
  return (
    <Container>
      <Content>
        <Avatar fullName={fullName} />
        <Logo />
      </Content>
    </Container>
  );
}
