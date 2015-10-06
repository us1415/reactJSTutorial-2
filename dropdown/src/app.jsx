var React = require('react');
var dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert', // text on button
  items: [ // List of items to show in the dropdown
  ]
};

var element = React.createElement(Dropdown, options);
React.render(element, document.querySelection('.container'));
