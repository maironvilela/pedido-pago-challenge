import { Container } from './styles';

export function Logo() {
  return (
    <Container>
      <svg
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="logo_blue_pedido_pago"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.7925 13.645V22.3187C13.7925 26.0423 10.7026 29.0649 6.89623 29.0649C3.08987 29.0649 0 26.0423 0 22.3187V6.8988C0 3.17524 3.08987 0.152588 6.89623 0.152588H22.659C26.4654 0.152588 29.5553 3.17524 29.5553 6.8988C29.5553 10.6224 26.4654 13.645 22.659 13.645H13.7925Z"
          fill="currentColor"
        />
      </svg>

      <svg
        width="31"
        height="30"
        viewBox="0 0 31 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="logo_green_pedido_pago"
      >
        <path
          opacity="0.85"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.7036 14.4275V23.1012C14.7036 26.8248 11.6137 29.8474 7.80736 29.8474C4.001 29.8474 0.911133 26.8248 0.911133 23.1012V7.68129C0.911133 3.95773 4.001 0.935059 7.80736 0.935059H23.5702C27.3765 0.935059 30.4664 3.95773 30.4664 7.68129C30.4664 11.4049 27.3765 14.4275 23.5702 14.4275H14.7036Z"
          fill="currentColor"
          fillOpacity="   "
        />
      </svg>
    </Container>
  );
}
