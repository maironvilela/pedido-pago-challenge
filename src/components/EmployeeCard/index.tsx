import { useCallback, useState } from 'react';
import {
  FaChevronUp,
  FaChevronDown,
  FaRegEdit,
  FaRegTrashAlt
} from 'react-icons/fa';
import { Avatar } from '../Avatar';
import { EmployeeInfo } from '../EmployeeInfo';
import { Container, Actions, InitialInformation, Details } from './styles';
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
      <InitialInformation>
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
      </InitialInformation>

      {isShowDetails && (
        <>
          <Details>
            {employee.employeesInfo?.map((info) => (
              <EmployeeInfo
                key={info.id}
                label={info.label}
                description={info.description}
                isBadge={!!info.isBadge}
              />
            ))}
          </Details>

          <Actions>
            <Button icon={<FaRegEdit />}>Editar</Button>
            <Button icon={<FaRegTrashAlt />}>Excluir</Button>
          </Actions>
        </>
      )}
    </Container>
  );
}
