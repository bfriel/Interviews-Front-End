const React = require('react'),
      ReactDOM = require('react-dom'),
      Test = require('components/Test'),
      SearchFilters = require('components/SearchFilters.jsx'),
      ResultsIndex = require('components/ResultsIndex.jsx'),
      VacayUtil = require('utils/vacay_util'),
      VacayStore = require('stores/vacay_store'),
      FilterStore = require('stores/filter_store'),
      CSS = require('./index.scss'),
      dist = document.getElementById('content');

const App = React.createClass({
  getInitialState() {
    return {
      vacays: VacayStore.all(),
      filter: FilterStore.params().filter
    };
  },

  componentDidMount() {
    this.vacayListener = VacayStore.addListener(this._vacaysChanged);
    this.filterListener = FilterStore.addListener(this._filterChanged);
    VacayUtil.fetchAllVacays();
  },

  _vacaysChanged() {
    this.setState({vacays: VacayStore.all()});
  },

  _filterChanged() {
    this.setState({filter: FilterStore.params().filter});
    VacayUtil.fetchFilteredVacays(FilterStore.params().filter);
  },

  componentWillUnmount() {
    this.vacayListener.remove();
    this.filterListener.remove();
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
