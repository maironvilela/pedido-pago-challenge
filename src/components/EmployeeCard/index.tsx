import { useCallback, useState } from 'react';
import {
  FaChevronUp,
  FaChevronDown,
  FaRegEdit,
  FaRegTrashAlt,
  FaCheck,
  FaBan
} from 'react-icons/fa';
import { Avatar } from '../Avatar';
import { EmployeeInfo } from '../EmployeeInfo';
import {
  Container,
  ActionsDefault,
  ActionsDeleteConfirm,
  InitialInformation,
  Details
} from './styles';
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
  const [isConfirmDelete, setIsConfirmDelete] = useState(false);

  const handleShowDetails = useCallback(() => {
    setIsShowDetails((isShowDetails) => !isShowDetails);
  }, []);

  const handleConfirmDelete = useCallback(() => {
    setIsConfirmDelete((isConfirmDelete) => !isConfirmDelete);
  }, []);

  return (
    <Container className="employees-card" isShowDetails={isShowDetails}>
      <InitialInformation
        isActive={!!isActive}
        onClick={handleShowDetails}
        data-testid="btnToggle"
      >
        <header>{header}</header>
        <div>
          <Avatar imgUrl={imgUrl} fullName={name} />
          <span>{name}</span>
          {isShowDetails ? <FaChevronUp /> : <FaChevronDown />}
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

          {isConfirmDelete ? (
            <ActionsDeleteConfirm>
              <Button icon={<FaCheck />}>Confirmar Exclusão</Button>
              <Button onClick={handleConfirmDelete} icon={<FaBan />}>
                Cancelar Exclusão
              </Button>
            </ActionsDeleteConfirm>
          ) : (
            <ActionsDefault>
              <Button icon={<FaRegEdit />}>Editar</Button>
              <Button onClick={handleConfirmDelete} icon={<FaRegTrashAlt />}>
                Excluir
              </Button>
            </ActionsDefault>
          )}
        </>
      )}
    </Container>
  );
}
