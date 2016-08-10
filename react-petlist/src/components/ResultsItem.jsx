const React = require('react');

const ResultsItem = React.createClass({
  render() {
    const vacay = this.props.vacay;
    return(
      <div className="results-item">
        <div className="results-item-title">
          {vacay.title}
        </div>
        <div className="results-item-user">
          {vacay.user.first} {vacay.user.last} | {vacay.pet.name}
        </div>
        <div className="results-item-description">
          {vacay.description}
        </div>
      </div>
    );
  }
});

module.exports = ResultsItem;
