import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, Button, TextInput, Image} from 'react-native';
import Picker from './src/picker';
import Puppy from './public/puppy.jpeg';

class App extends Component {
  webImgUrl = 'https://picsum.photos/id/237/200/300';

  state = {
    myTextInput: '',
    alphabet: ['a','b','c','d','e'],
  };

  onAddTextInput = () => {
    this.setState(prev => {
      return {
        myTextInput: '',
        alphabet: [...prev.alphabet, prev.myTextInput]
      }
    })
  }

  onChangeInput = (e) => {
    this.setState({
        myTextInput: e
    })
  }

  render() {
    return (
      <View style={styles.background}>
        <Image
          source={{uri: this.webImgUrl}}
          style={{width: '100%', height: 700}}
          resizeMode="contain"
          // 이미지 로드가 완료된 후에 콜백함수 실행
          onLoadEnd={() => alert('img come')}
        />
        <Picker/>
        {/* <TextInput
            value={this.state.myTextInput}
            style={styles.input}
            onChangeText={this.onChangeInput}
            multiline={true}
            maxLength={10}
            // 대문자로 자동 변경
            autoCapitalize={'none'}
            // 입력 못하게 막음
            editable={true}
        />
        <Button
          title="Add Text Input"
          onPress={this.onAddTextInput}
        />
        <ScrollView style={{width: '100%'}}>
          {
            this.state.alphabet.map((data, idx) => {
              return <Text key={idx} style={styles.mainText}>{data}</Text>
            })
          }
        </ScrollView> */}
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
    padding: 20,
    margin: 20,
    backgroundColor: 'pink'
  },
  scrollView: {
    width: '100%'
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
});

export default App;