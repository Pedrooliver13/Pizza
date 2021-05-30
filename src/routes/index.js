import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Header from '../components/Header';
import Step2 from '../pages/Step2';
import Step3 from '../pages/Step3';
import Results from '../pages/Results';

import GlobalStyle from '../styles/global';

const Routes = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/step2" component={Step2}/>
        <Route exact path="/step3" component={Step3}/>
        <Route exact path="/results" component={Results}/>
      </Switch>
    </Router>
  )
}

export default Routes;
