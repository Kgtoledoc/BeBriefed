import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import Tabs from 'react-native-tabs';
import TabBarItem from './TabBarItem';

const TabBarContainer = (props) => (
    <Tabs
        style={styles.tabContainer}
        selected={props.selectedService}
        onSelect={comp => {
            props.onTabChange(comp.props.name)
        }} 
    >
        <TabBarItem name="web" label="Web Server" icon="server"></TabBarItem>
        <TabBarItem name="db" label="DB Server" icon="database"></TabBarItem>
        <TabBarItem name="mail" label="Mail Server" icon="envelope-o"></TabBarItem>
    </Tabs>
);

const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: '#343434',
        borderTopWidth: 1,
        borderTopColor: '#262626',
        height: 96
    }
})

export default TabBarContainer;