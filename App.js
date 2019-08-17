/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import MainContainer from './components/MainContainer'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedService: 'db',
      services: [
        { key: 'web', isUp: true, lastUpTime: null },
        { key: 'db', isUp: false, lastUpTime: new Date((new Date()).getTime() - 5 * 60 * 1000) },
        { key: 'mail', isUp: true, lastUpTime: null },
      ]
    }
    this._switchService = this._switchService.bind(this)
  }

  _switchService(nextService) {
    this.setState({
      selectedService: nextService
    })
  }
  render() {
    return (
      <MainContainer selectedService={this.state.selectedService} services={this.state.services} onServiceChange={this._switchService}></MainContainer>
    );
  }
}





export default App;
