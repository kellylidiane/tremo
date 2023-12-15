import React, { useState } from 'react';
import { Alert, StyleSheet, SafeAreaView } from 'react-native';

import Keyboard from './src/components/Keyboard';
import Word from './src/components/Word';

export default function App() {
  const answer = ['M', 'U', 'L', 'H', 'E', 'R'];
  const [word, setWord] = useState([]);
  const [currentAttempt, setCurrentAttempt] = useState(0);
  const [status, setStatus] = useState({});
  const [currentLetterIdx, setCurrentLetterIdx] = useState(0);
  const [attempts, setAttempts] = useState({});

  const addLetter = (letter) => {
    const newWord = [...word];
    newWord[currentLetterIdx] = letter;
    setWord(newWord);
    setCurrentLetterIdx(currentLetterIdx === 5 ? 5 : currentLetterIdx + 1);
  };

  const delLetter = () => {
    const copyWord = word;

    if (currentLetterIdx === 0) {
      copyWord[0] = '';
      setWord(copyWord);
      setCurrentLetterIdx(5);
    } else {
      copyWord[currentLetterIdx] = '';
      setCurrentLetterIdx(currentLetterIdx - 1);
      setWord(copyWord);
    }
  };

  const rightAnswer = rowStatus => (rowStatus.reduce((acc, curr) => (
    acc && curr === 'right'
  ), true));

  const onSubmit = () => {
    if (currentAttempt === null) {
      return;
    }
    const newStatus = status;
    const rowStatus = [];
    const copyAnswer = [...answer];
    const copyAttempts = attempts;

    for (let i = 0; i < 6; i++) {
      const eachInsertedLetter = word[i];

      if (eachInsertedLetter === answer[i]) {
        rowStatus[i] = 'right';
      } else if (copyAnswer.indexOf(eachInsertedLetter) !== -1
        && eachInsertedLetter !== word[copyAnswer.indexOf(eachInsertedLetter)]) {
        rowStatus[i] = 'misplaced';
        copyAnswer[copyAnswer.indexOf(eachInsertedLetter)] = '';
      } else {
        rowStatus[i] = 'wrong';
      }
    }
    newStatus[currentAttempt] = rowStatus;
    copyAttempts[currentAttempt] = word;

    setWord('');
    setStatus(newStatus);
    setCurrentAttempt(currentAttempt + 1);
    setCurrentLetterIdx(0);
    setAttempts(copyAttempts);

    if (rightAnswer(rowStatus)) {
      Alert.alert('Parabéns!', 'Você desvendeu a palavra do dia!');
      setCurrentAttempt(null);
    } else if (currentAttempt === 4) {
      Alert.alert('Você perdeu!', `A resposta certa é ${answer.join('')}`);
      setCurrentAttempt(null);
    } else {
      setCurrentAttempt(currentAttempt + 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {new Array(5).fill({}).map((_, i) => (
        <Word
          key={i}
          currentLetterIdx={currentLetterIdx}
          setCurrentLetterIdx={setCurrentLetterIdx}
          currentWord={currentAttempt === i}
          status={status[i]}
          word={currentAttempt === i ? word : attempts[i]}
        />
      ))}
      <Keyboard addLetter={addLetter} onSubmit={onSubmit} delLetter={delLetter} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
