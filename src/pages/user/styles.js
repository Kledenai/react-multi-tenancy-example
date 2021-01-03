import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const BoxUsers = styled.div`
  flex: 1;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BoxUser = styled.div`
  width: 200px;
  height: 100px;
  border-radius: 6px;
  border: 1px solid #dedede;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
`;

export const Number = styled.p`
  position: absolute;
  top: 10px;
  right: 13px;
  color: grey;
`;

export const Name = styled.p`
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 1.1em;
  color: #848484;
`;

export const Email = styled.p`
  color: #a1a1a1;
`;
