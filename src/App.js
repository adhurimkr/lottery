import {Routes,Route} from 'react-router-dom'
import { Layout } from './Components/Layout';
import { Home } from './pages/Home';
import { SessionPlayers } from './pages/SessionPlayers';
import { Stats } from './pages/Stats';
import { Winners } from './pages/Winners';

function App() {
  return (
    <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="winners" element={<Winners />} />
      <Route path="stats" element={<Stats />} />
      <Route path="session-players" element={<SessionPlayers />} />
    </Routes>
    </Layout>
  );
}

export default App;
