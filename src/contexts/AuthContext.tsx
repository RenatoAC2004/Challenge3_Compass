import React, { useContext, useEffect, useState, ReactNode } from "react"
import { auth } from "../firebase/firebase"
import {
  onAuthStateChanged,
  signOut as firebaseSignOut,
  User,
} from "firebase/auth"

interface AuthContextType {
  currentUser: User | null
  userLoggedIn: boolean
  loading: boolean
  signOut: () => void
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser)
    return unsubscribe
  }, [])

  async function initializeUser(user: User | null) {
    if (user) {
      setCurrentUser(user)
      setUserLoggedIn(true)
    } else {
      setCurrentUser(null)
      setUserLoggedIn(false)
    }
    setLoading(false)
  }

  const signOut = async () => {
    await firebaseSignOut(auth)
  }

  const value: AuthContextType = {
    currentUser,
    userLoggedIn,
    loading,
    signOut,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
