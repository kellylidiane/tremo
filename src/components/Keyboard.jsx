import React from 'react';
import { StyleSheet, View } from 'react-native';

import Key from './Key';

export default props => {
    const eachKeyLetter = (letter) => (
        <Key onPress={() => props.addLetter(letter)}>{letter}</Key>
    );

    return (
        <View style={{ marginTop: 30 }}>
            <View style={styles.keyboardRow}>
                {eachKeyLetter('Q')}
                {eachKeyLetter('W')}
                {eachKeyLetter('E')}
                {eachKeyLetter('R')}
                {eachKeyLetter('T')}
                {eachKeyLetter('Y')}
                {eachKeyLetter('U')}
                {eachKeyLetter('I')}
                {eachKeyLetter('O')}
                {eachKeyLetter('P')}
            </View>
            <View style={styles.keyboardRow}>
                {eachKeyLetter('A')}
                {eachKeyLetter('S')}
                {eachKeyLetter('D')}
                {eachKeyLetter('F')}
                {eachKeyLetter('G')}
                {eachKeyLetter('H')}
                {eachKeyLetter('J')}
                {eachKeyLetter('K')}
                {eachKeyLetter('L')}
                <Key onPress={props.delLetter} lg>del</Key>
            </View>
            <View style={styles.keyboardRow}>
                {eachKeyLetter('Z')}
                {eachKeyLetter('X')}
                {eachKeyLetter('C')}
                {eachKeyLetter('V')}
                {eachKeyLetter('B')}
                {eachKeyLetter('N')}
                {eachKeyLetter('M')}
                <Key onPress={props.onSubmit} lg>Ok</Key>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    keyboardRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
