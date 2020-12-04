import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Popular from './Components/Popular/Popular';
import { routes } from './Constants/constants';
import classes from './App.module.scss';
import Artist from './Components/Artist/Artist';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';

function App() {
  return (
    <div className={classes.app}>
      <Router>
      <Header />
        <div className={classes.container}>
          <Switch>
            <Route exact path={routes.MAIN} component={Popular} />
            <Route path={`${routes.ARTIST}${routes.ID}`} component={Artist} />
            <Route path={`${routes.SEARCH}`} component={Search} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
