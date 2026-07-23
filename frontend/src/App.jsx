import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { Toaster } from 'react-hot-toast'

import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import OnboardingPage from './pages/OnBoardingPage'
import LoginPage from './pages/LoginPage'
import NotificationsPage from './pages/NotificationsPage'
import CallPage from './pages/CallPage'
import ChatPage from './pages/ChatPage'
import FriendsPage from './pages/FriendsPage'
import LandingPage from './pages/LandingPage'

import PageLoader from './components/PageLoader'

import useAuthUser from './hooks/useAuthUser'
import Layout from './components/Layout'
import { useThemeStore } from './store/useThemeStore'
import GlobalCursor from './components/GlobalCursor'


const App = () => {

  const { isLoading, authUser, isConnecting } = useAuthUser();
  const { theme } = useThemeStore();

  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;

  return (
    <div className='h-screen lg:cursor-none' data-theme={theme}>
      <GlobalCursor />
      <Routes>

        <Route path='/' element={isAuthenticated ? (
          isOnboarded ? (
            <Layout showSidebar={true}>
              <HomePage />
            </Layout>
          ) : (
            <Navigate to="/onboarding" />
          )
        ) : (
          <LandingPage />
        )} />

        <Route path='/signup' element={!isAuthenticated ? <SignUpPage /> : <Navigate to={isOnboarded ? '/' : "/onboarding"} />} />

        <Route path='/login' element={!isAuthenticated ? <LoginPage /> : <Navigate to={isOnboarded ? '/' : "/onboarding"} />} />

        <Route path='/notifications' element={isLoading ? (
          <PageLoader isConnecting={isConnecting} />
        ) : isAuthenticated && isOnboarded ? (
          <Layout showSidebar={true}>
            <NotificationsPage />
          </Layout>
        ) : (
          <Navigate to={isAuthenticated ? "/onboarding" : "/login"} />
        )} />

        <Route path='/friends' element={isLoading ? (
          <PageLoader isConnecting={isConnecting} />
        ) : isAuthenticated && isOnboarded ? (
          <Layout showSidebar={true}>
            <FriendsPage />
          </Layout>
        ) : (
          <Navigate to={isAuthenticated ? "/onboarding" : "/login"} />
        )} />

        <Route path='/call/:id' element={isLoading ? (
          <PageLoader isConnecting={isConnecting} />
        ) : isAuthenticated && isOnboarded ? (
          <CallPage />
        ) : (
          <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
        )} />

        <Route path='/chat/:id' element={isLoading ? (
          <PageLoader isConnecting={isConnecting} />
        ) :
          isAuthenticated && isOnboarded ? (
            <Layout showSidebar={false}>
              <ChatPage />
            </Layout>
          ) : (
            <Navigate to={isAuthenticated ? "/onboarding" : "/login"} />
          )
        } />

        <Route path='/onboarding' element={isLoading ? (
          <PageLoader isConnecting={isConnecting} />
        ) : isAuthenticated ? (
          !isOnboarded ? (
            <OnboardingPage />
          ) : (
            <Navigate to="/" />
          )
        ) : (
          <Navigate to="/login" />
        )} />

      </Routes>
      <Toaster />
    </div>
  )
}

export default App
