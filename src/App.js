import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import EntryPage from './pages/entry/EntryPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import NewTicketPage from './pages/new-ticekt/NewTicketPage';

function App() {
  return (
    <Router className="App">
      {/* <EntryPage /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        <NewTicketPage />
      </DefaultLayout>
    </Router>
  );
}

export default App;
