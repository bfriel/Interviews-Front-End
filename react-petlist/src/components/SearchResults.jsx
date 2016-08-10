const React = require('react');

const SearchResults = React.createClass({

  render(){
    return(
      <ul>
        {
          this.props.vacays.map( item => {
            return (<li key={item.title}>{item.title}</li>);
          })
        }
      </ul>
    );
  }
});

module.exports = SearchResults;
