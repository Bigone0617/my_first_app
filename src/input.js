import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

class Input extends Component {

    state = {
        myTextInput: ''
    }

    onChangeInput = (e) => {
        this.setState({
            myTextInput: e
        })
    }

    render() {
        return (
            <View style={styles.mainView}>
                <TextInput
                    value={this.state.myTextInput}
                    style={styles.input}
                    onChangeText={this.onChangeInput}
                    multiline={true}
                    maxLength={10}
                    // 대문자로 자동 변경
                    autoCapitalize={'none'}
                    // 입력 못하게 막음
                    editable={false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        width: '100%',
    },
    input: {
        width: '100%',
        backgroundColor: '#cecece',
        marginTop: 20,
        fontSize: 25,
        padding: 10,
    },
})



export default Input;