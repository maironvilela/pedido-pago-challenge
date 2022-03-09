import { ReactNode } from 'react';
import { Badge } from '../Badge';
import { Container } from './styles';
type EmployeeInfoProps = {
  label: string;
  description: string;
  isBadge?: ReactNode;
  type?: 'active' | 'inactive';
};
export function EmployeeInfo({
  label,
  description,
  isBadge,
  type = 'inactive'
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
