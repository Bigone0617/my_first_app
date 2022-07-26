import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class PickerComponent extends Component {

    state = {
        country: 'korea',
        value: 50,
        loading: true
    }

    sliderValueChange = (value) => {
        this.setState({value});

        if(value > 80){
            this.setState({loading: false});
        }else{
            this.setState({loading: true});
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Slider
                    style={{height: 40, width: 300}}
                    value={this.state.value}
                    minimumValue={0}
                    maximumValue={100}
                    onValueChange={this.sliderValueChange}
                    maximumTrackTintColor='red'
                    minimumTrackTintColor='blue'
                    step={1}
                />
                <Text style={styles.input}>{this.state.value}</Text>
                <ActivityIndicator
                    style={{paddingTop: 200}}
                    size="large"
                    color="green"
                    animating={this.state.loading}
                />
                <Picker
                    style={{height: 50, width: 250}}
                    selectedValue={this.state.country}
                    onValueChange={(val, idx) => this.setState({country: val})}
                >
                    <Picker.Item label="KOREA" value="korea" />
                    <Picker.Item label="CANADA" value="canada" />
                </Picker>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        marginBottom: 200,
        alignItems: "center",
    },
    input: {
        width: '100%',
        marginTop: 20,
        fontSize: 25
    }
})



export default PickerComponent;