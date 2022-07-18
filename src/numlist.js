import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, Button} from 'react-native';

const NumList = (props) => {
    return (
        props.numlist.map((num, idx) => (
            <TouchableOpacity style={styles.numList} key={idx} onPress={() => props.deleteNum(idx)}>
                <Text>{num}</Text>
            </TouchableOpacity>
        ))
    )
}

const styles = StyleSheet.create({
    numList: {
        backgroundColor: '#cecece',
        alignItems: 'center',
        padding: 5,
        width: '100%',
        marginTop: 5
    }
});

export default NumList;