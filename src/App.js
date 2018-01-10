import React from 'react';
import Search from './containers/search';
import Profile from './containers/profile'
import { BrowserRouter ,Switch, Route} from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Search}/>
      <Route path='/:username' component={Profile}/>
    </Switch>
  </BrowserRouter>
);

export default App;
