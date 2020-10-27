import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

/**
* calculator....
*/

class Calc extends React.Component {
  state: {
    ornd1: number,
    ornd2: number,
    optr: string,
    result : number,
    isOpe : boolean,
    opeDone: boolean
  }

  constructor() {
    super()
    this.state ={
      ornd1 : 0,
      ornd2 : 0,
      optr : '+',
      result : 0,
      isOpe : false,
      opeDone : false,
    }
  }

  /*
  * enter the number...
  */
  enterNum(numToEnter) {
    var { ornd1, ornd2, isOpe, opeDone } = this.state
    if(opeDone) {
      this.cleanUp()
    }
    if ( isOpe == false ) {
      ornd1 = ornd1 + numToEnter + ""
      this.setState({ ornd1 : ornd1 })
    }else {
      ornd2 = ornd2 + numToEnter + ""
      this.setState({ ornd2 : ornd2 })
    }
  }

  /*
  * remove the last number...
  */
  removeNum() {
    var { ornd1, ornd2, isOpe } = this.state

    if ( isOpe == false ) {
      if( ornd1 != '0' ) {
        ornd1 = ornd1.substr(0, ornd1.length -1)
        if (ornd1 == '') {
            ornd1 = 0
        }
        this.setState({ ornd1 : ornd1 })
      }
    }else {
      if( ornd2 != '0' ) {
        ornd2 = ornd2.substr(0, ornd2.length -1)
        if (ornd2 == '') {
            ornd2 = 0
        }
        this.setState({ ornd2 : ornd2 })
      }
    }
  }

  /*
  * set the operation..
  */
  ope(o) {
    this.setState({ optr : o, isOpe : true })
  }

  calc() {
    var { ornd1, ornd2, optr } = this.state
    var res = 0
    if ( optr == '+' ) {
      res = parseFloat(ornd1) + parseFloat(ornd2)
    }else if ( optr == '-' ) {
      res = parseFloat(ornd1) - parseFloat(ornd2)
    }else if ( optr == '/' ) {
      res = parseFloat(ornd1) / parseFloat(ornd2)
    }else if ( optr == '*' ) {
      res = parseFloat(ornd1) * parseFloat(ornd2)
    }else if ( optr == '%' ) {
      res = parseFloat(ornd1) % parseFloat(ornd2)
    }
    this.setState({ result : res, optr : '+', isOpe : false, ornd1 : 0, ornd2 : 0, opeDone : true })
  }

  cleanUp() {
    this.setState({ result : 0, optr : '+', isOpe : false, ornd1 : 0, ornd2 : 0, opeDone : false })
  }

  /*
  * render function...
  */
  render() {
    const { ornd1, ornd2, optr, result } = this.state
    const backSign = '<-'
    return(
      <View style="mainBody" >
        <Text style={styles.inField} > { ornd1 } { optr } { ornd2 }   </Text>
        <Text style={styles.rField} > { result } = </Text>
        <View style={styles.btnBoard}>
          <View style={styles.btnRow} >
            <TouchableOpacity style={styles.btn} onPress={() => this.enterNum(1)} >
              <Text style={styles.btntxt} > 1 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.enterNum(2)} >
              <Text style={styles.btntxt} > 2 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.enterNum(3)} >
              <Text style={styles.btntxt} > 3 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.ope('+')} >
              <Text style={styles.btntxt} > + </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.btnRow} >
            <TouchableOpacity style={styles.btn} onPress={() => this.enterNum(4)} >
              <Text style={styles.btntxt} > 4 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.enterNum(5)} >
              <Text style={styles.btntxt} > 5 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.enterNum(6)} >
              <Text style={styles.btntxt} > 6 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.ope('/')} >
              <Text style={styles.btntxt} > / </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.btnRow} >
            <TouchableOpacity style={styles.btn} onPress={() => this.enterNum(7)} >
              <Text style={styles.btntxt} > 7 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.enterNum(8)} >
              <Text style={styles.btntxt} > 8 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.enterNum(9)} >
              <Text style={styles.btntxt} > 9 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.ope('-')} >
              <Text style={styles.btntxt} > - </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.btnRow} >
            <TouchableOpacity style={styles.btn} onPress={() => this.enterNum(0)} >
              <Text style={styles.btntxt} > 0 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.enterNum('.')} >
              <Text style={styles.btntxt} > . </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.ope('*')} >
              <Text style={styles.btntxt} > * </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.ope('%')} >
              <Text style={styles.btntxt} > % </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.btnRow} >
            <TouchableOpacity style={styles.btnBig} onPress={() => this.calc()} >
              <Text style={styles.btntxt} > = </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnBig} onPress={() => this.removeNum()} >
              <Text style={styles.btntxt} > { backSign } </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btnBig} onPress={() => this.cleanUp()} >
            <Text style={styles.btntxt} > Clear </Text>
          </TouchableOpacity>
        </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
    inField: {
      marginTop: 70,
      fontSize: 20,
      color: 'white',
      textAlign: 'right',
      backgroundColor: '#157',
    },
    rField: {
      fontSize: 20,
      color: 'white',
      textAlign: 'right',
      backgroundColor: '#154',
    },
    btn:{
      width: 70,
      height: 50,
      margin: 2,
      paddingTop: 10,
      backgroundColor: 'blue',
      alignItems: 'center',
      alignContent: 'center'
    },
    btnBig:{
      width: 144,
      height: 50,
      margin: 2,
      paddingTop: 10,
      backgroundColor: 'blue',
      alignItems: 'center',
      alignContent: 'center'
    },
    btntxt:{
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
    },
    btnBoard: {
      padding: 3,
      margin: 30,
      alignItems: 'center',
      alignContent: 'center'
    },
    btnRow: {
      flexDirection: 'row'
    },
});

/* end calculator */

export default Calc;
