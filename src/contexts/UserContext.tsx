import { useRouter } from 'next/navigation'
import { parseCookies } from 'nookies'
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'
import { useQuery } from 'react-query'
import { IUser } from '../interfaces/user/user'
import { findUser } from '../services/user/user'

interface UserContextProps {
  children: ReactNode
}

interface UserContextData {
  user: IUser | null
  isAuthenticated: boolean
  loginUser: (userData?: IUser) => void
  logoutUser: () => void
}

const UserContext = createContext<UserContextData | undefined>(undefined)

const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState<IUser | null>(null)

  const isAuthenticated = !!user

  const { data: userData } = useQuery<IUser | null>(
    'management/user',
    async () => {
      const token = localStorage.getItem('token')
      const { userId } = parseCookies()

      if (token && userId) {
        const response = await findUser(userId, token)
        return response
      } else {
        // router.push('/login')
        return null
      }
    },
    {
      initialData: null,
    },
  )

  useEffect(() => {
    if (userData) {
      setUser(userData)
    }
  }, [userData])

  const loginUser = (userData?: IUser | undefined) => {
    setUser(userData || null)
  }

  const logoutUser = () => {
    setUser(null)
  }

  return (
    <UserContext.Provider
      value={{ user, isAuthenticated, loginUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  )
}

const useUser = (): UserContextData => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser deve ser usado dentro de um UserProvider')
  }
  return context
}

export { UserProvider, useUser }
