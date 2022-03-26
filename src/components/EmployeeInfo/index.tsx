import { Badge, BadgeType } from '../Badge';
import { Container } from './styles';

type EmployeeInfoProps = {
  label: string;
  description?: string;
  isBadge?: boolean;
  badgeType: BadgeType;
  isEdit?: boolean;
};
export function EmployeeInfo({
  label,
  description = '',
  isBadge,
  badgeType,
  isEdit = false
}: EmployeeInfoProps) {
  return (
    <Container className="employee-info" isEdit={isEdit}>
      <strong>{label}</strong>
      {isBadge ? (
        <Badge label={badgeType} isEdit={isEdit} />
      ) : isEdit ? (
        <input type="text" placeholder={` ${description}`}></input>
      ) : (
        <span>{description}</span>
      )}
    </Container>
  );
}
