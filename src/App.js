import { Routes, Route } from 'react-router';

import Navbar from './components/navbar/Navbar';
import Compare from './components/compare/Compare';
import History from './components/history/History';

const App = () => {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Compare />} />
            <Route path='/history' element={<History />} />    
        </Routes>
        </>
    );
}

export default App;
