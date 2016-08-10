const React = require('react');

const ResultsItem = React.createClass({
  render() {
    const vacay = this.props.vacay;
    return(
      <div>
        <div>
          {vacay.title}
        </div>
        <div>
          {vacay.description}
        </div>
        <div>
          {vacay.user.first} {vacay.user.last}
        </div>
        <div>
          {vacay.pet.first} {vacay.pet.last}
        </div>
      </div>
    );
  }
});

module.exports = ResultsItem;
