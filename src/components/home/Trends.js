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
  render() {
    return (
      <div style={style}>
      <Panel header="Twitter trends" style ={{height: "400px"}} >
      trends
    </Panel>  
    </div>
    );
  }
}

export default Trends;