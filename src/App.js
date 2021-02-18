import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import EntryPage from './pages/entry/EntryPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import NewTicketPage from './pages/new-ticekt/NewTicketPage';
import TicketList from './pages/ticket-listing/TicketList';
import Ticket from './pages/ticket/Ticket';
import PrivateRoute from './components/private-route/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={EntryPage} />
          <DefaultLayout>
            <PrivateRoute>
              <Route path="/tickets" component={TicketList} />
              <Route path="/new-ticket" component={NewTicketPage} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/ticket/:id" component={Ticket} />
            </PrivateRoute>
          </DefaultLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
