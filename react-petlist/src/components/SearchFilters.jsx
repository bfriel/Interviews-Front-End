const React = require('react'),
      FilterActions = require('../actions/filter_actions'),
      VacayUtil = require('../utils/vacay_util');

const SearchFilters = React.createClass({

  getInitialState() {
    return {
      boardingClicked: false,
      sittingClicked: false
    };
  },

  handleBoardingClick() {
    if (this.state.boardingClicked === false) {
      this.setState({
        boardingClicked: true,
        sittingClicked: false
      });
      FilterActions.updateFilter("?service=boarding");
    } else {
      this.setState({boardingClicked: false});
      VacayUtil.fetchAllVacays();
    }
  },

  handleSittingClick() {
    if (this.state.sittingClicked === false) {
      this.setState({
        boardingClicked: false,
        sittingClicked: true
      });
      FilterActions.updateFilter("?service=sitting");
    } else {
      this.setState({sittingClicked: false});
      VacayUtil.fetchAllVacays();
    }
  },

  render(){
    let boardingClass = this.state.boardingClicked ? 'click-state' : 'filter-title';
    let sittingClass =  this.state.sittingClicked ? 'click-state' : 'filter-title';
    return(
      <div className="filters-container">
        <p className="filter-header">
          Looking For
        </p>
        <div className="filter-option"
          onClick={this.handleBoardingClick}>
          <p className={boardingClass}>
            Boarding
          </p>
          <p className="filter-description">
            at Host's home
          </p>
        </div>
        <div className="filter-option"
          onClick={this.handleSittingClick}>
          <p className={sittingClass}>
            Sitting
          </p>
          <p className="filter-description">
            at my home
          </p>
        </div>
      </div>
    );
  }

});

module.exports = SearchFilters;
