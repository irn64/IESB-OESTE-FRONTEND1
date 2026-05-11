import { MOCK_CREDENTIALS } from '../constants/mockCredentials'

interface LoginData {
  username: string
  password: string
}

export function validateMockLogin({
  username,
  password,
}: LoginData) {
  return (
    username === MOCK_CREDENTIALS.username &&
    password === MOCK_CREDENTIALS.password
  )
}