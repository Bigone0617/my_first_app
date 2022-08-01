import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, Button, Image} from 'react-native';
import InputBox from './src/component/input';

class App extends Component {

  state = {
    phones : [],
    name : '',
    number : ''
  };

  savePhoneNumber = () => {
    let newPhones = this.state.phones;
    newPhones.push({
      name: this.state.name,
      number: this.state.number
    })

    this.setState({
      phones : [...newPhones],
      name: '',
      number: ''
    })
  }

  changeValue = (e, key) => {
    if(key === 'name'){
      this.setState({
        name : e
      })
    }else{
      this.setState({
        number : e
      })
    }
  };

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.inputWrapper}>
          <InputBox name={'name'} value={this.state.name} changeValue={this.changeValue}/>
          <InputBox name={'phone'} value={this.state.number} changeValue={this.changeValue}/>
          <Button
            title='저장'
            onPress={() => this.savePhoneNumber()}
          />
        </View>
        <ScrollView>
          {
            this.state.phones?.map((data, idx) => {
              return <View key={idx}><Text>name: {data.name}, number: {data.number}</Text></View>
            })
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50
  },
  inputWrapper: {
    display: 'flex',
    width: '100%',
  },
});

export default App;