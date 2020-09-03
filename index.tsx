import React, { Component } from 'react';
import { render } from 'react-dom';
import { Chart } from './Chart';

interface AppProps { }
interface AppState {
  name: string;
}

const App = () =>  {
  return (
    <div>
      <Chart/>
    </div>
  );
}

render(<App />, document.getElementById('root'));
