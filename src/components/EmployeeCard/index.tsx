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

export type EmployeeCardProps = {
  header: string;
  imgUrl: string;
  name: string;
  employeesInfo: EmployeeInfo[];
  isActive?: boolean;
};

export function EmployeeCard({
  header,
  imgUrl,
  name,
  employeesInfo,
  isActive
}: EmployeeCardProps) {
  const [isShowDetails, setIsShowDetails] = useState(false);

  const handleShowDetails = useCallback(() => {
    setIsShowDetails((isShowDetails) => !isShowDetails);
  }, []);

  return (
    <Container className="employees-card" isShowDetails={isShowDetails}>
      <InitialInformation isActive={!!isActive}>
        <header>{header}</header>
        <div>
          <div>
            <Avatar imgUrl={imgUrl} fullName={name} />
            <span>{name}</span>
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
            {employeesInfo?.map((info) => (
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
