import React from 'react';
import InputMask from 'react-input-mask';

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(e) {
    this.setState({
      ...this.state,
      value: e.target.value
    });
  }

  render() {
    return (
      <InputMask
        value={this.state.value}
        onChange={this.updateValue}
        mask="(99) 99999-9999"
      />
    );
  }
}
