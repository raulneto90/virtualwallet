import React from 'react';
import { FiArrowUpCircle, FiArrowDownCircle, FiDollarSign } from 'react-icons/fi';

import { Container } from './styles';

interface ICardProps {
  title: string;
  value: number;
  type: 'income' | 'outcome' | 'total';
}

const Card: React.FC<ICardProps> = ({ title, type, value }: ICardProps) => (
  <Container>
    <div>
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
    <div>{type === 'income' ? (<FiArrowUpCircle size={25} color="#33CC95" />) : type === 'outcome' ? (<FiArrowDownCircle size={25} color="#E52E4D" />) : <FiDollarSign size={25} />}</div>
  </Container>
)

export default Card;