import styled from 'styled-components';

export const Container = styled.div`
  background: #711dc5;
  padding: 20px 32px;
`;

export const Menu = styled.nav`
  padding: 20px 32px;

  ul {
    list-style: none;

    li {
      display: flex;

      a {
        display: block;
        background: #f9cc5e;
        color: #fff;
        font-weight: bold;
        padding: 12px;
        border-radius: 5px;
        text-decoration: none;

        transition: 0.2s;

        & + a {
          margin-left: 12px;
        }

        &:hover {
          background: #ffbc1a;
        }
      }
    }
  }
`;
