import { StyleSheet, Text, TextInput } from 'react-native';

const Input = props => {
    return (
        <>
            <TextInput style={styles.InputPlace} placeholder={props.name} secureTextEntry={props.security} />
        </>
    );
}

const styles = StyleSheet.create({
    InputPlace: {
        backgroundColor: '#F6F6F6',
        paddingStart: 15,
        width: 321,
        height: 46,
        padding: 10,
        borderWidth: 0,
        borderRadius: 10,
        elevation: 4,
        marginTop: 21
    },
})

export default Input;
