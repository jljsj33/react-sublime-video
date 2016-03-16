import React, { PropTypes } from 'react';

const startButton = 'M-10 -15 L15 0 L-10 15 L-10 0Z M-10 -15 15 0 L-10 15 L-10 0Z';
// const pauseButton = 'M-12 -15 L-3 -15 L-3 15 L-12 15Z M3 -15 12 -15 L12 15 L3 15Z';

const maskStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.35)',
  cursor: 'pointer',
  transition: 'opacity 0.6s ease',
};

const buttonStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: 60,
  height: 60,
  margin: -30,
};

export default class Mask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: props.defaultVisible,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const visible = this.state.visible;
    this.setState({ visible: !visible });
    this.props.onClick(visible);
  }

  render() {
    const style = {
      ...maskStyle,
      opacity: this.state.visible ? 1 : 0,
    };

    return (
      <section style={style} onClick={this.handleClick}>
        <svg style={buttonStyle}>
          <g transform="matrix(1, 0, 0, 1, 30, 30)">
            <circle r="30" fill="#fff" />
            <path d={startButton} fill="#999" />
          </g>
        </svg>
      </section>
    );
  }
}

Mask.propTypes = {
  defaultVisible: PropTypes.bool,
  onClick: PropTypes.func,
};
