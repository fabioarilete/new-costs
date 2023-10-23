import styled from 'styled-components';

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgb(64, 62, 62);
  color: #fff;
  padding: 1em;
  text-align: center;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

export const Li = styled.li`
  margin: 0 1em;
  &:hover {
    color: #ffbb33;
  }
`;

export const Link = styled.a`
  font-size: 1.5em;
  color: #fff;
  &:hover {
    color: #ffbb33;
  }
`;

export const Span = styled.span`
  font-weight: bold;
  color: #ffbb33;
`;

export const P = styled.p`
  margin-top: 1em;
`;
