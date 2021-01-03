import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxUser = styled.div`
  width: 200px;
  height: 100px;
  border-radius: 6px;
  border: 1px solid #a1a1a1;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Name = styled.p`
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 1.2em;
  color: #2b2b2b;
`;

export const Email = styled.p`
  color: #a1a1a1;
`;
