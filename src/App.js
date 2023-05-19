import Navbar from './components/navbar';
import './index.css';
import Teams from './components/teams';
import Players from './components/players';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Addplayer from './components/addplayer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/" element={<Players/>}/>
            <Route path="/teams" element={<Teams/>}/>
            <Route path="addplayer" element={<Addplayer/>}/>
          </Routes>
        </Navbar>
      </BrowserRouter>
    </>
  );
}

export default App;
