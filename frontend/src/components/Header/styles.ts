import styled from 'styled-components';

export const Container = styled.header`
  background: var(--card-bg);
  height: 212px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Menu = styled.nav`
  padding-top: 32px;
  padding-bottom: 64px;

  a {
    padding: 12px;
    border-radius: 5px;
    background-color: var(--button-bg);
    color: var(--white);
    font-size: 14px;
    font-weight: 500;

    transition: 0.2s;

    &:hover {
      background-color: var(--button2-bg);
    }

    & + a {
      margin-left: 20px;
    }
  }
`;
