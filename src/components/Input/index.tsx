import { Container } from './styles';
import { FaSearch } from 'react-icons/fa';

type InputProps = {
  placeholder: string;
  label: string;
};

export function Input({ placeholder, label }: InputProps) {
  return (
    <Container className="input">
      <span>{label}</span>
      <div>
        <FaSearch />
        <input type="text" placeholder={placeholder}></input>
      </div>
    </Container>
  );
}
