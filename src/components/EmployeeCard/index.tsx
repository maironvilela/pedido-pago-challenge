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
export type EmployeeCardProps = {
  imgUrl: string;
  header: string;
  name: string;
  employeesInfo: EmployeeInfo[];
};

export function EmployeeCard({
  imgUrl,
  header,
  name,
  employeesInfo
}: EmployeeCardProps) {
  console.log(employeesInfo);
  const [isShowDetails, setIsShowDetails] = useState(true);

  const handleShowDetails = useCallback(() => {
    setIsShowDetails((isShowDetails) => !isShowDetails);
  }, []);

  return (
    <Container className="employees-card" isShowDetails={isShowDetails}>
      <header>{header}</header>
      <div>
        <div>
          <Avatar imgUrl={imgUrl} fullName={name} />
          <span>{name}</span>
        </div>
        <button type="button" onClick={handleShowDetails}>
          {isShowDetails ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {isShowDetails && (
        <>
          <section className="info">
            {employeesInfo?.map((info) => (
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
