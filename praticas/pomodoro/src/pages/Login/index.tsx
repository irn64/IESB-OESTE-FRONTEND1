import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './styles.module.css'

import { validateMockLogin } from '../../utils/validateMockLogin'
import { useAuthContext } from '../../contexts/AuthContext'

export function Login() {
  const navigate = useNavigate()

  const { login } = useAuthContext()

  const inputRef = useRef<HTMLInputElement>(null)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [message, setMessage] = useState('')

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    const isValid = validateMockLogin({
      username,
      password,
    })

    if (!isValid) {
      setMessage('Usuário ou senha inválidos')
      return
    }

    login()

    setMessage('Login realizado com sucesso')

    navigate('/home')
  }

  function handleRegister() {
    setMessage('Fluxo de cadastro ainda será implementado')
  }

  function handleForgotPassword() {
    setMessage('Fluxo de recuperação de senha ainda será implementado')
  }

  return (
    <div className={styles.container}>
      <form
        className={styles.card}
        onSubmit={handleSubmit}
      >
        <h1>Login</h1>

        <div className={styles.field}>
          <label htmlFor="username">
            Usuário
          </label>

          <input
            ref={inputRef}
            id="username"
            type="text"
            value={username}
            onChange={(event) =>
              setUsername(event.target.value)
            }
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="password">
            Senha
          </label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
          />
        </div>

        <button type="submit">
          Entrar
        </button>

        {message && (
          <p className={styles.message}>
            {message}
          </p>
        )}

        <div className={styles.links}>
          <button
            type="button"
            onClick={handleRegister}
          >
            Não tem conta? Cadastre-se
          </button>

          <button
            type="button"
            onClick={handleForgotPassword}
          >
            Esqueci minha senha
          </button>
        </div>
      </form>
    </div>
  )
}