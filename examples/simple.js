const React = require('react');
const ReactDOM = require('react-dom');
const SublimeVideo = require('react-sublime-video');
const Source = SublimeVideo.Source;

const style = {
  width: '49%',
  margin: '0.5%',
  float: 'left',
};

ReactDOM.render(
  <div>
    <SublimeVideo autoPlay loop style={style}
      src="https://os.alipayobjects.com/rmsportal/FqkQMyFqNqielOw.mp4"
    />
    <SublimeVideo loop style={style}
      src="https://os.alipayobjects.com/rmsportal/FqkQMyFqNqielOw.mp4"
    />
    <SublimeVideo style={style}
      src="https://os.alipayobjects.com/rmsportal/FqkQMyFqNqielOw.mp4"
    />
    <SublimeVideo style={style}>
      <Source type="video/mp4"
        src="https://os.alipayobjects.com/rmsportal/FqkQMyFqNqielOw.mp4"
      />
    </SublimeVideo>
  </div>
  , document.getElementById('__react-content'));
