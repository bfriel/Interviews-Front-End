const React = require('react'),
      ReactDOM = require('react-dom'),
      Test = require('components/Test'),
      SearchFilters = require('components/SearchFilters.jsx'),
      SearchResults = require('components/SearchResults.jsx'),
      VacayUtil = require('utils/vacay_util'),
      VacayStore = require('stores/vacay_store'),
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
      <div>
        <SearchFilters />
        <SearchResults vacays={this.state.vacays} />
      </div>
    );
  }
});


ReactDOM.render(
  <App />,
  dist
);


window.React = React; // enable debugger
