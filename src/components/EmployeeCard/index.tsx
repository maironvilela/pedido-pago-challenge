import { useCallback, useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { Avatar } from '../Avatar';
import { EmployeeInfo } from '../EmployeeInfo';
import { Container } from './styles';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { Button } from '../Button';

export type EmployeeInfo = {
  id: number;
  label: string;
  description: string;
  isBadge?: boolean;
};

type Employee = {
  imgUrl: string;
  name: string;
  employeesInfo: EmployeeInfo[];
  isActive?: boolean;
};
export type EmployeeCardProps = {
  header: string;
  employee: Employee;
};

export function EmployeeCard({ header, employee }: EmployeeCardProps) {
  console.log(employee);
  const [isShowDetails, setIsShowDetails] = useState(false);

  const handleShowDetails = useCallback(() => {
    setIsShowDetails((isShowDetails) => !isShowDetails);
  }, []);

  return (
    <Container
      className="employees-card"
      isShowDetails={isShowDetails}
      isActive={!!employee.isActive}
    >
      <header>{header}</header>
      <div>
        <div>
          <Avatar imgUrl={employee.imgUrl} fullName={employee.name} />
          <span>{employee.name}</span>
        </div>
        <button
          type="button"
          onClick={handleShowDetails}
          data-testid="btnToggle"
        >
          {isShowDetails ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {isShowDetails && (
        <>
          <section className="info">
            {employee.employeesInfo?.map((info) => (
              <EmployeeInfo
                key={info.id}
                label={info.label}
                description={info.description}
                isBadge={!!info.isBadge}
              />
            ))}
          </section>
          <Button icon={<AiOutlineFileAdd />}>Ações</Button>
        </>
      )}
    </Container>
  );
}
