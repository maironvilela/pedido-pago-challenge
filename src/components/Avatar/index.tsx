import { Container } from './styles';
import { css, keyframes } from '@emotion/css';

type AvatarProps = {
  url?: string;
  isActive?: boolean;
};

const bounce = keyframes({
  'from, 20%, 53%, 80%, to': {
    transform: 'translate3d(0,0,0)'
  },
  '40%, 43%': {
    transform: 'translate3d(0, -5px, 0)'
  },
  '70%': {
    transform: 'translate3d(0, -15px, 0)'
  },
  '90%': {
    transform: 'translate3d(0, -10px, 0)'
  }
});

export function Avatar({ url, isActive = false }: AvatarProps) {
  const animation = css({
    width: 96,
    animation: `${bounce} 2s ease infinite`,
    transformOrigin: 'center bottom'
  });
  return (
    <Container className="avatar">
      {url ? (
        <img src={url} className={`${isActive && animation}`} />
      ) : (
        <span className={`${isActive && animation}`}>MV</span>
      )}
    </Container>
  );
}
