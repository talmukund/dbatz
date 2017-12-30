import React, {PropTypes} from 'react';
import Trends from "./Trends";
import {Panel, ListGroup, ListGroupItem, Tabs, Tab } from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadQuestion} from "../../action/questionAction";

const style = {  
  width: "50%",
  backgroundcolor: "white",
  marginLeft: "20px",
  float: "left"
};

const itemStyle = {
  height:"200px"
};
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return( 
    <span>
        <Trends />
        <Panel header="Panel heading" style={style}>
          Some default panel content here.
          <ListGroup fill>
            <ListGroupItem style={itemStyle}>
              <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Tab 1">
                  Tab 1 content
                </Tab>
                <Tab eventKey={2} title="Tab 2">
                {this.props.state}
                </Tab>                
              </Tabs>
            </ListGroupItem>            
          </ListGroup>
          Some more panel content here.
        </Panel>
        <Trends />
      </span>
    );
  }
}

export default connect()( HomePage);