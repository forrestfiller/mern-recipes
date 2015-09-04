var React = require('react');

var DefaultLayout = require('../layouts/default');

var Recipe = require('./recipe');

module.exports = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    recipes: React.PropTypes.array,
    page: React.PropTypes.number,
    pages: React.PropTypes.number
  },
  render: function () {
    var recipes = this.props.recipes.map(function (item, index) {
      return (
        <li key={ item._id }>
          <h2>{ item.title }</h2>
          <Recipe recipe={ item } />
        </li>
      );
    });
    return (
      <ul>
        { recipes }
      </ul>
    );
  }
});
