import { Container } from './styles';
import { useMemo } from 'react';

type AvatarProps = {
  imgUrl?: string;
  fullName: string;
};

export function Avatar({ imgUrl, fullName }: AvatarProps) {
  const nameInitials = useMemo(() => {
    const namesArray = fullName?.split(' ');
    return namesArray
      ? `${namesArray[0][0]}${namesArray[namesArray.length - 1][0]}`
      : '';
  }, [fullName]);

  return (
    <Container className="avatar">
      {imgUrl ? (
        <img src={imgUrl} aria-label={`Avatar ${fullName}`} />
      ) : (
        <span>{nameInitials}</span>
      )}
    </Container>
  );
}
