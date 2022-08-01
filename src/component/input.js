import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

class InputBox extends Component {

    state = {
        myTextInput: ''
    }

    onChangeInput = (e) => {
        this.setState({
            myTextInput: e
        })
       this.props.changeValue(e, this.props.name)
    }

    render() {
        return (
            <View style={styles(this.props.name).mainView}>
                <View style={styles.inputWrap}>
                    <Text style={styles.text}>{this.props.name}</Text>
                    <TextInput
                        value={this.state.myTextInput}
                        style={styles(this.props.name).input}
                        onChangeText={this.onChangeInput}
                        multiline={false}
                        maxLength={this.props.name === 'name' ? 5 : 11}
                        // 대문자로 자동 변경
                        autoCapitalize={'none'}
                        // 입력 못하게 막음
                        editable={true}
                    />
                </View>
            </View>
        )
    }
}

const styles = (name) => StyleSheet.create({
    mainView: {
        width: `${name === 'name' ? '30%' : '50%'}`,
    },
    inputWrap: {
        display: 'flex',
        float: 'left'
    },
    text: {
        padding: 0
    },
    input: {
        width: '100%',
        backgroundColor: '#cecece',
        marginTop: 20,
        fontSize: 25,
        padding: 10,
    },
})



export default InputBox;