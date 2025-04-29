import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Frontpage from './pages/Frontpage';
import Games from './pages/Games';
import Home from './pages/Home';
import Join from './pages/Join';
import Status from './pages/Status';
import Team from './pages/Team';
import './App.css'
import NewPlayer from './pages/NewPlayer';

function App() {
  return (
    <Routes>
      {/* Frontpage (no Layout/Header) */}
      <Route path="/" element={<Frontpage />} />

      {/* All other routes (with Layout/Header) */}
      <Route element={<Layout />}>
        <Route path="/games" element={<Games />} />
        <Route path="/home" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/status" element={<Status />} />
        <Route path="/team" element={<Team />} />
        <Route path="/new_player" element={<NewPlayer/>}/>
      </Route>
    </Routes>
  )
}

export default App
