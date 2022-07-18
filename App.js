import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Generator from './src/generator';
import Header from './src/header';
import NumList from './src/numlist';

class App extends Component {

  state = {
    appName: 'My First App',
    random: [11, 23, 52, 18]
  }

  onAddRandomNum = () => {
    let randomNumber = Math.floor(Math.random()* 100)+1;
    this.setState(prevState => {
      return {
        random: [...prevState.random, randomNumber]
      }
    })
  }

  onNumDelete = (position) => {
    const newArray = this.state.random.filter((num,idx) => {
      return position != idx
    });

    this.setState({
      random: newArray
    })
  }

  render() {
    return (
      <View style={styles.background}>
        <Header name={this.state.appName}></Header>
        <Generator add={this.onAddRandomNum}/>
        <ScrollView 
          style={styles.scrollView}
          onMomentumScrollBegin={() => alert('begin')}
        >
          <NumList numlist={this.state.random} deleteNum={this.onNumDelete}/>
        </ScrollView >
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 50
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText : {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20
  },
  scrollView: {
    width: '100%'
  }
});

export default App;