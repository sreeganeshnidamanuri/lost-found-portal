// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RoutesApp from './routes'

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="container">
        <RoutesApp />
      </main>
      <Footer />
    </div>
  )
}
