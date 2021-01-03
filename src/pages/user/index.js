import React, { useState, useEffect } from 'react'
import {
  Container,
  BoxUser,
  Name,
  Email,
} from './styles'
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
      {
        users.map((user) => (
          <BoxUser>
            <Name>{user.name}</Name>
            <Email>{user.email}</Email>
          </BoxUser>
        ))
      }
    </Container>
  )
}
