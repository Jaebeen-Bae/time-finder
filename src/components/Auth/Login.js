import React from 'react'
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import firebase from '../../firebase'

export default function Login() {
  const initialState = {
    email: '',
    password: '',
  }

  const [loginUserState, setRegisterUserState] = React.useState(initialState)
  const [errors, setErrors] = React.useState([])
  const [status, setStatus] = React.useState('')

  const handleChange = event => {
    setRegisterUserState({
      ...loginUserState,
      [event.target.name]: event.target.value,
    })
  }

  const onSubmit = async event => {
    event.preventDefault()
    const errors = []
    if (formIsValid(loginUserState)) {
      const { email, password } = loginUserState
      setErrors(errors)
      setStatus('PENDING!')

      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        setStatus('RESOLVED')
      } catch (err) {
        setStatus('RESOLVED')
        setErrors(errors.concat({ message: err.message }))
      }
    } else {
      let error = { message: 'Please fill the form' }
      setErrors(errors.concat(error))
    }
  }

  const formIsValid = ({ email, password }) => {
    return email && password
  }

  const handleInputError = (errors, inputName) => {
    return errors.some(err =>
      err.message.toLowerCase().includes(inputName.toLowerCase())
    )
      ? 'error'
      : ''
  }

  const { email, password } = loginUserState

  return (
    <div className="fontSetting">
    <Grid textAlign="center" verticalAlign="middle" className="app">
      <Grid.Row style={{ maxWidth: 600, alignContent: "flex-end" }}>
        <Grid.Column style={{ width: "75%" }}>
          <Header as="h1" textAlign="center">
            스케줄 관리를 더 편하고 더 즐겁게,
            <br/>
            <strong>타임파인더</strong>
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ alignContent: "flex-start" }}>
        <Grid.Column style={{ maxWidth: 600 }}>
        <Form size="large" onSubmit={onSubmit}>
          <Segment>
            <Form.Input
              fluid
              type="email"
              name="email"
              icon="mail"
              iconPosition="left"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              className={handleInputError(errors, 'email')}
            />
            <Form.Input
              fluid
              type="password"
              name="password"
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              className={handleInputError(errors, 'password')}
            />
            <Button
              disabled={status === 'PENDING'}
              className={status === 'PENDING' ? 'loading' : ''}
              type="submit"
              fluid
              size="large"
              style={{marginBottom: "14px"}}
            >
              로그인
            </Button>
            <Link to="/register">
            <Button
              disabled={status === 'PENDING'}
              className={status === 'PENDING' ? 'loading' : ''}
              type="register"
              fluid
              size="large"
              color="red"
              style={{marginBottom: "14px"}}
            >
              타임파인더 회원가입
            </Button>
            </Link>
            <div className="find">
              <a>
                아이디/비밀번호 찾기
              </a>
            </div>
          </Segment>
        </Form>
        {errors.length > 0 &&
          errors.map((err, i) => (
            <Message error key={i}>
              <p>{err.message}</p>
            </Message>
          ))}
      </Grid.Column>
      </Grid.Row>
    </Grid>
    </div>
  )
}
