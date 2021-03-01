import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  // initialize state with constructor function
  // constructor(props) {
  //   super(props); //reference to the React.Component constructor()
  //   this.state = { latitude: null, errorMessage: '' };
  // }
  state = { latitude: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      //ALWAYS USE setState TO UPDATE THE STATE!!!
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (this.state.latitude && !this.state.errorMessage) {
      return <SeasonDisplay latitude={this.state.latitude}/>
    }

    return <Spinner message="Please accept location request"/>;
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
};

ReactDOM.render(<App/>, document.querySelector('#root'));
