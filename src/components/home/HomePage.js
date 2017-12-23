import React from 'react';
import Trends from "./Trends";
import {Panel, ListGroup, ListGroupItem, Tabs, Tab } from 'react-bootstrap';

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
                Tab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 content
                </Tab>                
              </Tabs>
            </ListGroupItem>
            <ListGroupItem style={itemStyle}>Item 2</ListGroupItem>
            <ListGroupItem style={itemStyle}>Item 2</ListGroupItem>
            <ListGroupItem style={itemStyle}>Item 2</ListGroupItem>
            <ListGroupItem style={itemStyle}>Item 2</ListGroupItem>
          </ListGroup>
          Some more panel content here.
        </Panel>
        <Trends />
      </span>
    );
  }
}

export default HomePage;