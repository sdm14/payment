import React from 'react';
import { Wrapper } from './components/Wrapper';
import './index.css'
import { Route } from 'react-router-dom';
import { OperatorItem } from './components/OperatorItem';

function App(props) {



  return (
    <div className="app">
      <Route path={'/'} exact render={() => <Wrapper />} />
      <Route path={'/operator/:id'} render={() => <OperatorItem />} />
    </div>
  );
}

export default App;
