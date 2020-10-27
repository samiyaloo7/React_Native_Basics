/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Calc from './src/calc';
import TTT from './src/ttt';

class App extends React.Component {
  state:{ ch : boolean, isSel : boolean }

  constructor() {
    super()
    this.state = { ch: false, isSel : false}
  }

  chooseApp(ch) {
    if ( ch == 'calc' ) {
        this.setState({ ch: true, isSel : true })
    }else if ( ch == 'ttt' ) {
        this.setState({ ch: false, isSel : true })
    }else {
        this.setState({ isSel : false })
    }
  }

  render() {
    const { ch, isSel } = this.state
    if (isSel) {
        if(ch) {
            return( <Calc /> );
        }else {
            return(  <TTT /> );
        }
    }else {
      return(
        <View style={styles.mainHome}>
          <TouchableOpacity style={styles.chBtn} onPress={ () => this.chooseApp('calc') } >
            <Text style={styles.btnText} > Calc </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chBtn} onPress={ () => this.chooseApp('ttt') } >
            <Text style={styles.btnText} > TicTacToe </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
    chBtn: {
      backgroundColor: 'blue',
      height: 70,
      width: 150,
      paddingTop: 10,
      margin: 3,
    },
    mainHome: {
      padding: 50,
      flex: 5,
      backgroundColor: '#153',
      alignItems: 'center',
      alignContent: 'center',
    },
    btnText : {
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
    }
});

export default App;
