import { ReactNode } from 'react';
import { Badge } from '../Badge';
import { Container } from './styles';
type EmployeeInfoProps = {
  label: string;
  description: string;
  isBadge?: ReactNode;
  type?: 'success' | 'info' | 'warning' | 'danger';
};
export function EmployeeInfo({
  label,
  description,
  isBadge
}: //type = 'success'
EmployeeInfoProps) {
  return (
    <Container className="employee-info">
      <span>{label}</span>

      {isBadge ? (
        <Badge description={description} />
      ) : (
        <span>{description}</span>
      )}
    </Container>
  );
}
