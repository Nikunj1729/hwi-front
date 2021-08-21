import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import FormPage from './pages/formpage';
import FormPage1 from './pages/formpage1';
import HomePage from './pages/homepage';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Switch>
          <Route path='/login' render={()=>(<FormPage/>)}/>
          <Route path='/signin' render={()=>(<FormPage1/>)}/>
          <Route path='/' component={HomePage} props/>
        </Switch>
      </div>
    );
  }
}

export default App;