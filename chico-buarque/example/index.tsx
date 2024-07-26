import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ChicoBuarque from '../.';

const App = () => {
  return (
    <div>
      <ChicoBuarque />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
