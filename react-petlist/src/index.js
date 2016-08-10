const React = require('react'),
      ReactDOM = require('react-dom'),
      Test = require('components/Test'),
      SearchFilters = require('components/SearchFilters.jsx'),
      ResultsIndex = require('components/ResultsIndex.jsx'),
      VacayUtil = require('utils/vacay_util'),
      VacayStore = require('stores/vacay_store'),
      CSS = require('./index.scss'),
      dist = document.getElementById('content');

const App = React.createClass({
  getInitialState() {
    return {
      vacays: VacayStore.all()
    };
  },

  componentDidMount() {
    this.vacayListener = VacayStore.addListener(this._vacaysChanged);
    VacayUtil.fetchAllVacays();
  },

  _vacaysChanged() {
    this.setState({vacays: VacayStore.all()});
  },

  render() {
    return (
      <div className="app-container">
        <SearchFilters />
        <ResultsIndex vacays={this.state.vacays} />
      </div>
    );
  }
});


ReactDOM.render(
  <App />,
  dist
);


window.React = React; // enable debugger
