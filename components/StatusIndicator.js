import React, {Component} from 'react';

import {
    View, 
    Text, 
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'


const StatusIndicator = (props) => (
    <View style={styles.border}>
        <Text style={styles.character}>
            <Icon name={props.isUp ? 'check': 'times'} size={180}></Icon>
        </Text>
    </View>
)

const styles = StyleSheet.create({
    bbrder: {
        borderWidth: 20,
        borderColor: '#F21D44',
        borderRadius: 200,
        width: 240,
        height: 240,
        justifyContent: 'center'
    },
    character: {
        fontSize: 160,
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#BF1534'
    }
})


export default StatusIndicator;