/* eslint-disable eqeqeq */
import React from 'react'
import {
  Container,
  BoxModal,
  Close,
  BoxForm,
  Form,
  BoxTitle,
  Title,
  BoxInput,
  Input,
} from './styles';
import Times from '../../../../assets/svg/times'

Container.defaultStyles.overlay.backgroundColor = '#0000005C';

const create = (props) => (
  <Container isOpen={props.visible} onRequestClose={props.onRequestClose}>
    <BoxModal>
      <BoxForm>
        <Close onClick={props.onRequestClose}>
          <Times />
        </Close>
        <Form onSubmit={props.onSubmit}>
          <BoxTitle>
            <Title>New User</Title>
          </BoxTitle>
          <BoxInput>
            <Input
              type="text"
              placeholder="Name"
              value={props.name}
              border={props.error.field == 'name' ? '#f96767' : null}
              onChange={(event) => {
                if (props.error.field == 'name') {
                  props.setError({});
                  props.setName(event.target.value);
                }

                props.setName(event.target.value);
              }}
            />
          </BoxInput>
          <BoxInput>
            <Input
              type="text"
              placeholder="Email"
              value={props.email}
              border={props.error.field == 'email' ? '#f96767' : null}
              onChange={(event) => {
                if (props.error.field == 'email') {
                  props.setError({});
                  props.setEmail(event.target.value);
                }

                props.setEmail(event.target.value);
              }}
            />
          </BoxInput>
          <BoxInput>
            <Input
              type="password"
              placeholder="Password"
              value={props.password}
              border={props.error.field == 'password' ? '#f96767' : null}
              onChange={(event) => {
                if (props.error.field == 'password') {
                  props.setError({});
                  props.setPassword(event.target.value);
                }

                props.setPassword(event.target.value);
              }}
            />
          </BoxInput>
        </Form>
      </BoxForm>
    </BoxModal>
  </Container>
)

export default create
