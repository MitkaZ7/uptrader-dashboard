import { Routes, Route, useNavigate } from 'react-router-dom'
import Layout from '../Layout'
import Projects from '../Projects/Projects'
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Projects />} />
        </Route>
      </Routes>
    </div>


  );
}

export default App;
