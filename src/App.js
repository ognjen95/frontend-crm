import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import EntryPage from './pages/entry/EntryPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router className="App">
      {/* <EntryPage /> */}
      <DefaultLayout>// dashboard</DefaultLayout>
    </Router>
  );
}

export default App;
