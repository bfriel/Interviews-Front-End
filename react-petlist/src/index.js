const React = require('react'),
      ReactDOM = require('react-dom'),
      Test = require('components/Test'),
      CSS = require('./index.scss'),
      App = require('components/App'),
      dist = document.getElementById('content');

ReactDOM.render(
  <App />,
  dist
);

window.React = React; // enable debugger
