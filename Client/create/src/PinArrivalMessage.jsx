'use strict';
/* jshint quotmark: false */

var React = require('react');
var Actions = require('../RefluxActions');

module.exports = React.createClass({
  resultTextOnChange: function(){
    var newResultText = this.refs.resultText.getDOMNode().value;
    Actions.updatePinAtKey(newResultText, this.props.pinIndex, 'resultText');
  },
  render: function() {
    return (
      <div>
        <div className="bold-title">Arrival Message</div>
        <textarea 
          col="38" 
          rows="4" 
          ref="resultText" 
          value={this.props.pin.resultText}
          placeholder="Ex: Great job! The bar on the corner has the best martinis."
          onChange={this.resultTextOnChange}/>
      </div>
    );
  }
});
