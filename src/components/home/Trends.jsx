import React from 'react';
import {Panel} from 'react-bootstrap';

const style = {
  height: "400px",
  width: "18%",
  backgroundcolor: "white",
  marginLeft: "30px",
  float: "left"
};

class Trends extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={style}>
      <Panel header={this.props.title} style ={{height: this.props.height}} >
      "contents"
    </Panel>  
    </div>
    );
  }
}

export default Trends;