const React = require('react'),
      ReactDOM = require('react-dom'),
      Test = require('components/Test'),
      SearchFilters = require('components/SearchFilters.jsx'),
      SearchResults = require('components/SearchResults.jsx'),
      dist = document.getElementById('content');

const App = React.createClass({
  getInitialState() {
    return {};
  },

  render() {
    return (
      <div>
        <SearchFilters />
        <SearchResults />
      </div>
    );
  }
});


ReactDOM.render(
  <App />,
  dist
);


window.React = React; // enable debugger
