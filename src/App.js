import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <HomePage />
      </DndProvider>
    </div>
  );
}

export default App;
