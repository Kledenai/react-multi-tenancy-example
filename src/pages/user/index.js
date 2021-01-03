import React, { useState, useEffect } from 'react'
import {
  Container,
  BoxUsers,
  BoxUser,
  Number,
  Name,
  Email,
} from './styles'
import Header from '../components/header'
import api from '../../services/api'

export default function User() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const loadUsers = async () => {
      const response = await api.get('/user')

      setUsers(response.data)
    }

    loadUsers()
  }, [])

  return (
    <Container>
      <Header />
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
    </Container>
  )
}
