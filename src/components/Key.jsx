import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default props => (
    <TouchableOpacity
        style={[styles.buttonContainer, props.lg ? styles.buttonLg : {}]}
        onPress={props.onPress}
    >
        <Text style={styles.buttonLabel}>{props.children}</Text>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
    buttonContainer: {
        width: Dimensions.get('window').width / 12,
        height: Dimensions.get('window').width / 7,
        borderWidth: 1,
        marginRight: 3,
        marginBottom: 3,
        borderColor: '#f1f',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        backgroundColor: '#f1f'
    },
    buttonLabel: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 23
    },
    buttonLg: {
        width: Dimensions.get('window').width / 9,
        backgroundColor: '#910091',
        borderColor: '#910091',
    }
});
