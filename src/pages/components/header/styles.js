import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: transparent;
  border-bottom: 1px solid #dedede;
  display: flex;
  flex-direction: row;
`;

export const BoxTitle = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export const Title = styled.p`
  font-size: 1.2em;
  font-weight: 300;
`;

export const BoxButton = styled.div`
  width: 100px;
  height: 60px;
  display: flex;
  align-items: center;
  padding-right: 20px;
`;

export const ButtonAdd = styled.div`
  width: 100px;
  height: 40px;
  background-color: white;
  border: 1px solid #47affc;
  color: #47affc;
  border-radius: 6px;
  transition: 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9em;
  cursor: pointer;
  &:hover{
    background-color: #47affc;
    color: white;
  }
`;
