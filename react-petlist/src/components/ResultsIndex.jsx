const React = require('react'),
      ResultsItem = require('./ResultsItem.jsx');

const ResultsIndex = React.createClass({

  render(){
    const vacays = this.props.vacays;
    const vacayKeys = Object.keys(vacays);
    return(
      <div>
        {
          vacayKeys.map( key => {
            return <ResultsItem vacay={vacays[key]} key={key} />;
          })
        }
      </div>
    );
  }
});

module.exports = ResultsIndex;
