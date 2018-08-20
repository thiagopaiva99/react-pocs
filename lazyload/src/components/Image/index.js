import React from 'react';
import LazyLoad from 'react-lazyload';

export default class Image extends React.Component {
  render() {
    return (
      <div>
        <LazyLoad throttle={200} height={this.props.height}>
          <img src={this.props.url} />
        </LazyLoad>
      </div>
    );
  }
}
