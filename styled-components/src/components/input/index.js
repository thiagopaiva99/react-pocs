import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 0.5em;
  margin: 5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

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
    return <StyledInput value={this.state.value} onChange={this.updateValue} />;
  }
}
