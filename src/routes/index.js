import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../pages/Home';

import GlobalStyle from '../styles/global';

const Routes = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
  )
}

export default Routes;
