import React from 'react'
import {
  Container,
  BoxTitle,
  Title,
  BoxButton,
  ButtonAdd
} from './styles'

const header = (props) => (
  <Container>
    <BoxTitle>
      <Title>Multi Tenancy Example</Title>
    </BoxTitle>
    <BoxButton>
      <ButtonAdd onClick={props.onClick}>add user</ButtonAdd>
    </BoxButton>
  </Container>
)

export default header
