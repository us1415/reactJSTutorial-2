var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://fiery-inferno-7763.firebaseio.com/';

var App = React.createClass({
  componentWillMount: function(){
    this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
  },
  render: function() {
    return <h1 className="red">
      Hello React!
    </h1>
  }
});


var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
