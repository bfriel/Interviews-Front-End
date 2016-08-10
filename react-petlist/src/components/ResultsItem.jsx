const React = require('react'),
      Format = require('../utils/format');

const ResultsItem = React.createClass({
  getInitialState() {
    return {
      url: Format.formatURL(this.props.vacay.title)
    };
  },

  render() {
    const vacay = this.props.vacay;
    return(
      <div className="results-item">
        <a href={this.state.url} target="_blank">
          <h2 className="results-item-title">
          {Format.capitalize(vacay.title)}
          </h2>
        </a>
        <h3 className="results-item-user">
          {Format.formatUsername(vacay.user.first, vacay.user.last)}
          {' '} | {' '}
          {Format.capitalize(vacay.pet.name)}
        </h3>
        <p className="results-item-description">
          {Format.shortenDescription(vacay.description, 48)}
        </p>
      </div>
    );
  }
});

module.exports = ResultsItem;
