import React from 'react'
import { render } from 'react-dom'
import CommentBox from './CommentBox'

var App = React.createClass({
  render: function(){
    return <CommentBox url="/api/comments" pollInterval={2000} />
  }
});

export default App;
