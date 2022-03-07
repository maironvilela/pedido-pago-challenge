import { PaginationItem } from './PaginationItem';
import { Container } from './styles';

export function Pagination() {
  return (
    <Container className="pagination">
      <PaginationItem value="1" />
      <span>...</span>
      <PaginationItem value="4" isActive={true} />
      <PaginationItem value="5" />
      <PaginationItem value="6" />
      <span>...</span>
      <PaginationItem value="7" />
    </Container>
  );
}
