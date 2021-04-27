import React from 'react';
import { FiArrowUpCircle } from 'react-icons/fi';
import { Container } from './styles';

interface ICardProps {
  title: string;
  type: 'income' | 'outcome' | 'total';
  value: number;
}

const Card: React.FC<ICardProps> = ({ title, type, value }: ICardProps) => {
  return (
    <Container>
      <header>
        <p>{title}</p>
        <FiArrowUpCircle size={30} className={type} />
      </header>

      <h1>{value}</h1>
    </Container>
  );
};

export default Card;
