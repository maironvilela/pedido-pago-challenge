import { ReactNode } from 'react';
import { Badge } from '../Badge';
import { Container } from './styles';
type EmployeeInfoProps = {
  label: string;
  description: string;
  isBadge?: ReactNode;
  type?: 'success' | 'error';
};
export function EmployeeInfo({
  label,
  description,
  isBadge,
  type = 'error'
}: EmployeeInfoProps) {
  return (
    <Container className="employee-info">
      <strong>{label}</strong>

      {isBadge ? (
        <Badge description={description} type={type} />
      ) : (
        <span>{description}</span>
      )}
    </Container>
  );
}
