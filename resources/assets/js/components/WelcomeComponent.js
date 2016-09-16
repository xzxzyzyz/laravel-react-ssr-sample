import React, { Component, PropTypes } from 'react';

class WelcomeComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    alert(this.props.title);
  }

  render() {
    return (
      <div className="title" onClick={this.handleClick}>{this.props.title}</div>
    );
  }
}

export default WelcomeComponent;