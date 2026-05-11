import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'
import { AuthContextProvider } from './contexts/AuthContext/AuthContextProvider'

import { MessagesContainer } from './components/MessagesContainer'

import { MainRouter } from './routers/MainRouter'

import './styles/theme.css'
import './styles/globals.css'

export function App() {
  return (
    <TaskContextProvider>
      <AuthContextProvider>
        <MessagesContainer>
          <MainRouter />
        </MessagesContainer>
      </AuthContextProvider>
    </TaskContextProvider>
  )
}