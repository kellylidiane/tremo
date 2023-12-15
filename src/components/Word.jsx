import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const neutralColor = '#D3C0D2';

export default props => {
    const statusColors = {
        right: 'lightgreen',
        misplaced: 'yellow',
        wrong: neutralColor
    };

    return (
        <View style={styles.wordContainer}>
            {new Array(6).fill({}).map((_, i) => (
                <TouchableOpacity
                    key={Math.random()}
                    onPress={() => props.setCurrentLetterIdx(i)}
                    style={[
                        styles.letter,
                        {
                            backgroundColor: props.status ? statusColors[props.status[i]] : neutralColor,
                            borderColor: props.status ? statusColors[props.status[i]] : neutralColor,
                        },
                        props.currentWord ? styles.activeWord : {},
                        props.currentLetterIdx === i && props.currentWord ? styles.currentLetter : {},
                    ]}
                >
                    <Text style={styles.wordLetter}>{props.word ? props.word[i] : ''}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    wordContainer: {
        flexDirection: 'row',
    },
    letter: {
        width: Dimensions.get('window').width / 7,
        height: Dimensions.get('window').width / 7,
        borderWidth: 2,
        backgroundColor: neutralColor,
        borderRadius: 8,
        marginBottom: 10,
        marginRight: 4,
        borderColor: neutralColor,
    },
    activeWord: {
        borderColor: '#f1f',
        backgroundColor: '#fff'
    },
    currentLetter: {
        backgroundColor: '#fec2ff'
    },
    wordLetter: {
        flex: 1,
        color: '#000',
        fontSize: 35,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    }
});
