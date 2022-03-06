import { Container } from './styles';

type AvatarProps = {
  url?: string;
};

export function Avatar({ url }: AvatarProps) {
  return (
    <Container className="avatar">
      {url ? <img src={url} /> : <span>MV</span>}
    </Container>
  );
}
