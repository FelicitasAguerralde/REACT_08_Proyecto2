import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Presentation } from './components/Presentation'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App 