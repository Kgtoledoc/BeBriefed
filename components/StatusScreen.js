import React, {Component} from 'react';
import {
    View,
    Text, 
    StyleSheet
} from 'react-native';
import StatusIndicator from './StatusIndicator';

import moment from 'moment'

class StatusScreen extends Component {
    render(){
        let lastUpComponent
        if(!this.props.isUp){
            const relativeTime = moment().to(this.props.lastUpTime)
            lastUpComponent = <Text style={styles.lastUpText}>Last up: {relativeTime}</Text>
        }
        return(
            <View style={styles.container}>
                <StatusIndicator isUp={this.props.isUp}></StatusIndicator>
                <Text style={styles.statusText}>Service {this.props.isUp ? 'Up': 'Down'}</Text>
                {lastUpComponent}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusText: {
        fontSize: 30,
    },
    lastUpText: {
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
        color: '#b1b3b6',
        backgroundColor: 'rgba(0,0,0,0)',
    }
}
)

export default StatusScreen;