import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import LoginPage from './pages/login.jsx'
import SignupPage from './pages/signup.jsx'
import Dashboard from './pages/dashboard.jsx'
import LandingPage from './pages/LandingPage.jsx'
import { isSupabaseConfigured, supabase } from './lib/supabaseClient.js'

function useSessionState() {
  const [isChecking, setIsChecking] = useState(true)
  const [session, setSession] = useState(null)

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setSession(null)
      setIsChecking(false)
      return
    }

    let active = true

    supabase.auth.getSession().then(({ data }) => {
      if (!active) return
      setSession(data.session)
      setIsChecking(false)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession)
      setIsChecking(false)
    })

    return () => {
      active = false
      subscription.unsubscribe()
    }
  }, [])

  return { isChecking, session }
}

function ProtectedRoute({ children }) {
  const { isChecking, session } = useSessionState()

  if (isChecking) {
    return <div className="auth-loader">Checking session...</div>
  }

  if (!session) {
    return <Navigate to="/login" replace />
  }

  return children
}

function PublicAuthRoute({ children }) {
  const { isChecking, session } = useSessionState()

  if (isChecking) {
    return <div className="auth-loader">Checking session...</div>
  }

  if (session) {
    return <Navigate to="/dashboard" replace />
  }

  return children
}

function LandingRoute() {
  const navigate = useNavigate()

  return (
    <LandingPage
      onLogin={() => navigate('/login')}
      onSignup={() => navigate('/signup')}
    />
  )
}

export default function App() {
  if (!isSupabaseConfigured) {
    return (
      <div className="auth-loader" style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', textAlign: 'center', padding: '24px' }}>
        <div>
          <h2 style={{ marginBottom: '8px' }}>Frontend environment is not configured</h2>
          <p>Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your deployment environment, then redeploy.</p>
        </div>
      </div>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<LandingRoute />} />
      <Route
        path="/login"
        element={(
          <PublicAuthRoute>
            <LoginPage />
          </PublicAuthRoute>
        )}
      />
      <Route
        path="/signup"
        element={(
          <PublicAuthRoute>
            <SignupPage />
          </PublicAuthRoute>
        )}
      />
      <Route
        path="/dashboard"
        element={(
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        )}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
