import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 620px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 5px black;

  .title {
    color: #08a67c;
    margin-bottom: 15px;
  }

  .btn {
    width: 200px;
    height: 35px;
    border-radius: 5px;
    margin-top: 20px;
    background-color: #08a67c;
    color: #fff;
    padding: auto;
    text-decoration: none;
    transition: 0.5s;
    cursor: pointer;
    border: none;
    font-size: 20px;
    font-weight: bold;
  }

  .btn:hover {
    font-weight: bold;
    color: #08a67c;
    background-color: #fff;
    border: 2px solid #08a67c;
  }
`;
