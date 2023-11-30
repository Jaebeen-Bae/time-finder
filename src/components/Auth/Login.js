import React from 'react'
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import firebase from '../../firebase'
import LOGO from '../../images/about/time-finder.png'
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
      setStatus('PENDING')

      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        setStatus('RESOLVED')
      } catch (err) {
        setStatus('RESOLVED')
        setErrors(errors.concat({ message: err.message }))
      }
    } else {
      let error = { message: '이메일과 비밀번호를 입력해주세요.' }
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
    <div className="app auth">
      <div>
        <a href="/">
          <img src={LOGO} width="50%"/>
        </a>
        <h1>
          <strong>타임파인더</strong>
        </h1>
        <Form size="large" onSubmit={onSubmit}>
          <Segment className="loginBox">
            <Form.Input
              fluid
              type="email"
              name="email"
              icon="mail"
              iconPosition="left"
              placeholder="이메일"
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
              placeholder="비밀번호"
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
              className="loginButton mgb-14"
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
                className="blue mgb-14"
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
      </div>
    </div>
  )
}
