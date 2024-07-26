import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Stone from "../src"

const App = () => {
  return (
    <div>
      <Stone />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
