import React from 'react'
import {
  Container,
  BoxTitle,
  Title,
  BoxButton,
  ButtonAdd
} from './styles'

const header = () => (
  <Container>
    <BoxTitle>
      <Title>Multi Tenancy Example</Title>
    </BoxTitle>
    <BoxButton>
      <ButtonAdd>Add User</ButtonAdd>
    </BoxButton>
  </Container>
)

export default header
