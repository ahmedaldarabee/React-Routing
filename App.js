import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Show from './components/showNeed';

export default function App() {
  return (
    <>
      <div className="App">
      <BrowserRouter>
        <Show/>
      </BrowserRouter>
      </div>
    </>
  )
}