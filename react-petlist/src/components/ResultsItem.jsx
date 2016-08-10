const React = require('react'),
      Format = require('../utils/format');

const ResultsItem = React.createClass({
  render() {
    const vacay = this.props.vacay;
    return(
      <div className="results-item">
        <h2 className="results-item-title">
          {Format.capitalize(vacay.title)}
        </h2>
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
