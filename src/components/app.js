// This component handles the App template used on every page.
import React, { PropTypes } from "react";
import Header from "./common/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{marginTop:"80px"}}>{this.props.children}</div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
