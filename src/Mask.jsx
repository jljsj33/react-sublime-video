import React, { PropTypes } from 'react';
import IconSVGAnim from 'rc-icon-anim/lib/IconSVGAnim';

const maskStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.35)',
  cursor: 'pointer',
};

const buttonStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  margin: -30,
  borderRadius: 30,
  backgroundColor: '#fff',
};


export default class Mask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: props.defaultVisible,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  getAnimation() {
    return this.state.visible ?
      [
        { d: 'M20 15L20 45L45 30Z', style: { rotate: 0 }, delay: 150 },
        { d: 'M20 15L20 45L45 30Z', style: { rotate: 0 }, delay: 150 },
      ] :
      [
        { d: 'M15 18L15 27L45 27L45 18Z', style: { rotate: 90 } },
        { d: 'M15 33L15 42L45 42L45 33Z', style: { rotate: 90 } },
      ];
  }

  getIconChildren() {
    return this.state.visible ?
      [<path
        d="M20 15L20 45L45 30Z"
        fill="#999"
        key="a0"
        style={{ transformOrigin: '30px 30px', transform: 'rotate(90deg)' }}
      />, <path
        d="M20 15L20 45L45 30Z"
        fill="#999"
        key="a1"
        style={{ transformOrigin: '30px 30px', transform: 'rotate(90deg)' }}
      />] :
      [<path
        d="M15 18L15 27L45 27L45 18Z"
        fill="#999"
        key="b0"
        style={{ transformOrigin: '30px 30px', transform: 'rotate(90deg)' }}
      />, <path
        d="M15 33L15 42L45 42L45 33Z"
        fill="#999"
        key="b1"
        style={{ transformOrigin: '30px 30px', transform: 'rotate(90deg)' }}
      />];
  }

  handleClick() {
    const visible = this.state.visible;
    this.setState({
      visible: !visible,
    });

    // If mask is visible now, the video is going to play. Otherwise...
    const shouldPlay = visible;
    this.props.onClick(shouldPlay);
  }

  render() {
    const style = {
      ...maskStyle,
      opacity: this.state.visible ? 1 : 0,
      transition: this.state.visible ?
        'opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)' :
        'opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s',
    };
    const children = this.getIconChildren();
    const animation = this.getAnimation().map(item => {
      return { ...item, duration: 300, ease: 'easeOutQuint' };
    });
    return (
      <section style={style} onClick={this.handleClick}>
        <IconSVGAnim style={buttonStyle}
          viewBox="0 0 60 60"
          width="60"
          height="60"
          appear={false}
          animation={animation}
        >
          {children}
        </IconSVGAnim>
      </section>
    );
  }
}

Mask.propTypes = {
  defaultVisible: PropTypes.bool,
  onClick: PropTypes.func,
};
