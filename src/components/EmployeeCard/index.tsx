import { useCallback, useState } from 'react';
import {
  FaChevronUp,
  FaChevronDown,
  FaRegEdit,
  FaRegTrashAlt,
  FaCheck,
  FaBan,
  FaRegSave
} from 'react-icons/fa';
import { Avatar } from '../Avatar';
import {
  Container,
  ActionsDefault,
  ActionsDeleteConfirm,
  InitialInformation,
  Details
} from './styles';
import { Button } from '../Button';
import { Employee } from '../../pages';
import { api } from '../../services/axios';
import { EmployeeInfo } from '../EmployeeInfo';
import { BadgeType } from '../Badge';

export type EmployeeCardProps = {
  employee: Employee;
  header: string;
};

export function EmployeeCard({
  employee: employeeProps,
  header
}: EmployeeCardProps) {
  const [isShowDetails, setIsShowDetails] = useState(false);
  const [isConfirmDelete, setIsConfirmDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [employee, setEmployee] = useState(employeeProps);

  const toggleIsEdit = () => {
    setIsEdit((isEdit) => !isEdit);
  };

  const handleShowDetails = useCallback(async () => {
    const { data } = await api.get(`employees/${employee.id}`);
    console.log(data);
    const employeeInfo = [
      {
        label: 'Departamento',
        description: data.department
      },
      {
        label: 'Cargo',
        description: data.role
      },
      {
        label: 'Unidade',
        description: data.branch
      },
      {
        label: 'Status',
        description: data.branch
      }
    ];

    setEmployee({ ...employee, employeeInfo });

    setIsShowDetails((isShowDetails) => !isShowDetails);
  }, [employee]);

  const handleConfirmDelete = useCallback(() => {
    setIsConfirmDelete((isConfirmDelete) => !isConfirmDelete);
  }, []);

  const handleSave = () => {
    setIsEdit(false);
  };
  const handleDelete = () => {
    setIsConfirmDelete(false);
  };

  return (
    <Container className="employees-card" isShowDetails={isShowDetails}>
      <InitialInformation
        isActive={!!employee?.isActive}
        onClick={handleShowDetails}
        data-testid="btnToggleShowDetails"
      >
        <header>{header}</header>
        <div>
          <Avatar imgUrl={employee?.imgUrl} fullName={employee?.name} />
          <span>{employee?.name}</span>
          {isShowDetails ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </InitialInformation>

      {isShowDetails && (
        <>
          <Details>
            {employee.employeeInfo?.map((info) => (
              <EmployeeInfo
                key={info.label}
                label={info.label}
                description={info.description}
                isBadge={info.label === 'Status'}
                isEdit={isEdit}
                badgeType={
                  employee.isActive ? BadgeType.ACTIVE : BadgeType.INACTIVE
                }
              />
            ))}
          </Details>

          {isConfirmDelete ? (
            <ActionsDeleteConfirm>
              <Button onClick={handleDelete} icon={<FaCheck />}>
                Confirmar Exclusão
              </Button>
              <Button onClick={handleConfirmDelete} icon={<FaBan />}>
                Cancelar Exclusão
              </Button>
            </ActionsDeleteConfirm>
          ) : (
            <ActionsDefault>
              {!isEdit ? (
                <>
                  <Button icon={<FaRegEdit />} onClick={toggleIsEdit}>
                    Editar
                  </Button>
                  <Button
                    onClick={handleConfirmDelete}
                    icon={<FaRegTrashAlt />}
                  >
                    Excluir
                  </Button>
                </>
              ) : (
                <Button onClick={handleSave} icon={<FaRegSave />}>
                  Salvar
                </Button>
              )}
            </ActionsDefault>
          )}
        </>
      )}
    </Container>
  );
}
