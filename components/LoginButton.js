import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

class LoginButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.txtLogin}>Login</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    btnLogin: {
        alignItems: 'center',
        backgroundColor: '#323232',
        padding: 10,
        borderRadius: 10,
        width: 133,
        height: 46,
        justifyContent: 'center',
        marginTop: 88
    },
    txtLogin: {
        color: 'white',
        fontSize: 15
    }
})

export default LoginButton;
