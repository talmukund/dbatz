// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import AddQuestion from "./home/AddQuestion";

class App extends React.Component {
  render() {
    return (
      <div >
        <Header />
        <div>
        {this.props.children} 
        </div> 
        <AddQuestion/>      
        </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
