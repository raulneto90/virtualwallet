import { useHistory } from 'react-router-dom';

import React, { FormEvent, useCallback, useState } from 'react';

import { Container, FormContainer } from './styles';

import api from '../../services/api';
import Header from '../../components/Header';

const Transaction: React.FC = () => {
  const history = useHistory();

  const [comment, setComment] = useState<string>();
  const [category, setCategory] = useState<string>();
  const [value, setValue] = useState<string>();
  const [type, setType] = useState<string>();

  const handleAddTransaction = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const transaction = {
        title: comment,
        category,
        value: Number(value),
        type,
      };

      await api.post('/transactions', transaction);

      history.push('/');

      setComment('');
      setCategory('');
      setValue('');
      setType('');
    },
    [category, comment, type, value, history],
  );

  return (
    <Container>
      <Header />
      <FormContainer>
        <h1>Nova transação</h1>
        <form onSubmit={handleAddTransaction}>
          <input
            type="text"
            name="comment"
            required
            placeholder="Título"
            onChange={e => setComment(e.target.value)}
          />
          <input
            type="text"
            name="category"
            required
            placeholder="Categoria"
            onChange={e => setCategory(e.target.value)}
          />
          <input
            type="text"
            name="value"
            required
            placeholder="Valor"
            onChange={e => setValue(e.target.value)}
          />
          <select
            required
            onChange={e => {
              setType(e.target.value);
            }}
          >
            <option>Selecione</option>
            <option value="income">Entrada</option>
            <option value="outcome">Saída</option>
          </select>

          <button type="submit">Cadastrar</button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Transaction;
