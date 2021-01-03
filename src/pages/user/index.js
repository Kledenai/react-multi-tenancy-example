import React, { useState, useEffect } from 'react';
import {
  Container,
  BoxUsers,
  BoxUser,
  Number,
  Name,
  Email,
} from './styles';
import Header from '../components/header';
import ModalCreate from './components/create';
import api from '../../services/api';

export default function User() {
  const [users, setUsers] = useState([]);
  const [modalAdd, setModalAdd] = useState(false);
  const [error, setError] = useState({});

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const loadUsers = async () => {
      const response = await api.get('/user')

      setUsers(response.data)
    }

    loadUsers()
  }, [])

  const openModalAdd = () => {
    setModalAdd(true)
  }

  const CloseModalAdd = () => {
    setModalAdd(false);
  };

  const createUser = async () => {
    try {
      const response = await api.post('/user/create', {
        name: name,
        email: email,
        password: password,
      })

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Header onClick={openModalAdd} />
      <BoxUsers>
        {
          users.map((user) => (
            <BoxUser key={user.id}>
              <Number>{user.id}</Number>
              <Name>{user.name}</Name>
              <Email>{user.email}</Email>
            </BoxUser>
          ))
        }
      </BoxUsers>
      <ModalCreate
        visible={modalAdd}
        error={error}
        setError={setError}
        onRequestClose={CloseModalAdd}
        onSubmit={createUser}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
    </Container>
  )
}
