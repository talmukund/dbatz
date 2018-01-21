import React, { PropTypes } from "react";
import Trends from "./Trends";
import {
  Panel,
  ListGroup,
  ListGroupItem,
  Tabs,
  Tab,
  Button
} from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadQuestion } from "../../action/questionAction";

const style = {
  width: "50%",
  backgroundcolor: "white",
  marginLeft: "20px",
  float: "left"
};

const itemStyle = {
  height: "200px"
};
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.question);
    return (
      <span>
        <Trends title="Hot topics" height="450px" />
        <Panel header="Panel heading" style={style}>
          Some default panel content here.
          <ListGroup fill>
            {this.props.question.map(q => {
              return (
                <ListGroupItem style={itemStyle}>
                  {q.title}
                  <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title={q.tab1}>
                      <Button bsStyle="primary">Add Answers</Button>
                    </Tab>
                    <Tab eventKey={2} title={q.tab2}>
                      tab2 content
                    </Tab>
                  </Tabs>
                </ListGroupItem>
              );
            })}
          </ListGroup>
          Some more panel content here.
        </Panel>
        <Trends title="who to follow" height="300px"/>
      </span>
    );
  }
}

HomePage.propTypes = {
  question: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    question: state.question
  };
}

export default connect(mapStateToProps)(HomePage);
