import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Modal} from 'react-native';

class ModalComponent extends Component {
    state = {
        modal: false
    }
    handleModal = () => {
        this.setState({
            modal: this.state.modal ? false : true
        })
    }
    render() {
        return (
            <View style={styles.container}>
               <Text>Hello world</Text>
               <Button
                title='Open Modal'
                onPress={this.handleModal}
               />
               <Modal
                visible={this.state.modal}
                animationType={'slide'}
                onShow={() => alert('Warrring!!!')}
               >
                    <View style={{marginTop: 60, backgroundColor: 'red'}}>
                        <Text>
                            This is modal content
                        </Text>
                        <Button
                            title='Close Modal'
                            onPress={this.handleModal}
                        />
                    </View>
               </Modal>
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



export default ModalComponent;