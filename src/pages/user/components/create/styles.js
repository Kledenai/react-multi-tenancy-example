import styled from 'styled-components';
import Modal from 'react-modal';

export const Container = styled(Modal)`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
`;

export const BoxModal = styled.div`
  width: 21%;
  height: 411px;
  display: flex;
  flex-direction: column;
  padding: 0 1em;
  background-color: #FFFFFF;
  border-radius: 4px;
  position: relative;
`;

export const Close = styled.div`
  width: 20px;
  height: 20px;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  right: 63px;
  top: 36px;
`;

export const BoxForm = styled.div`
  flex: 1;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: inherit;
  justify-content: inherit;
`;

export const Form = styled.form`
  flex: 1;
  background-color: transparent;
  padding-right: 4%;
  padding-left: 12%;
`;

export const BoxTitle = styled.div`
  width: 93%;
  height: 110px;
  background-color: transparent;
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  flex: 1;
  color: #707070;
  font-size: 1.2em;
  font-weight: 400;
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6em;
  margin-right: 20px;
  position: relative;
`;

export const Input = styled.input`
  width: 285px;
  height: 35px;
  border-style: none;
  border: 1px solid ${(props) => props.border || '#cecece'};
  color: #707070;
  font-size: 0.9em;
  border-radius: 5px;
  outline: none;
  padding-left: 10px;
  &::placeholder{
    font-weight: 300;
    color: #aeaeae;
  }
`;

export const ButtonAdd = styled.button`
  width: 100px;
  height: 44px;
  background-color: #47affc;
  border-style: none;
  border-radius: 6px;
  color: white;
  font-size: 1em;
  font-weight: 300;
  cursor: pointer;
`;
