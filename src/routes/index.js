import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../pages/Home';
import Size from '../pages/Size';
import Filling from '../pages/Filling';
import Results from '../pages/Results';

import GlobalStyle from '../styles/global';

const Routes = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/step2" component={Size}/>
        <Route exact path="/step3" component={Filling}/>
        <Route exact path="/results" component={Results}/>
      </Switch>
    </Router>
  )
}

export default Routes;
