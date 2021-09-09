import React, {useState, useLayoutEffect, useCallback} from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {
  const [response, setResponse] = useState('')

  const getResponse = useCallback(() => {
    return axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json').then((response) => {
      setResponse(response.data.insult)
    });
  },[])

  useLayoutEffect(() => {
    getResponse()
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.insultText}>{`''${response}''`}</Text>
      <TouchableOpacity onPress={() => getResponse()} style={styles.generateBtn}>
        <Text style={styles.generateBtnText}>Generate New</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8
  },
  insultText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 38,
    lineHeight: 42,
    textAlign: 'center',
    color: '#232A34',
    marginBottom: 50
  },
  generateBtn:{
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#F57223'
  },
  generateBtnText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
    color: '#FFFFFF'
  }
});
