import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import CoinPage from './pages/CoinPage';
import { makeStyles } from '@material-ui/core';
function App() {

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: 'white',
      minHeight: '100vh'
    }
  }))

  const classes = useStyles()
  return (
    <Router>
                                                            

      <div className={classes.App}>
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/coins/:id" component={CoinPage} />
      </div>
    </Router>
  );
}

export default App;
