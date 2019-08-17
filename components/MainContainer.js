import React, {Component} from 'react';
import {
    Text,
    View, 
    StyleSheet
    } from 'react-native';

import StatusScreen from './StatusScreen';
import TabBarContainer from './TabBarContainer'
import LinearGradient from 'react-native-linear-gradient'


class MainContainer extends Component {

    _renderTab(selected, services) {
        const thisService = services.find(s => s.key === selected)
        return (
            <StatusScreen isUp={thisService.isUp} lastUpTime={thisService.lastUpTime}></StatusScreen>
        )
    }
    render(){
        return(
            <LinearGradient colors={['#313d43', '#4a787a']} style={styles.container}>
                {this._renderTab(this.props.selectedService, this.props.services)}
                <TabBarContainer
                    onTabChange={this.props.onServiceChange}
                    selectedService={this.props.selectedService}></TabBarContainer>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default MainContainer;