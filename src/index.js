import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './components/appRouter'

import Header from './components/header'
import Footer from './components/footer'

import './styles/sass/main.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
    <Header />
    <AppRouter />
    <Footer />
    </Router>
  </React.StrictMode>
)