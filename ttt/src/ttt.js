import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

/*
* Tic Tac Toe ---
*/

class TTT extends React.Component {

  state : { clickstate: number[], sFlag : boolean, winProb : number[], res : string };

  constructor() {
    super()
    this.state={ clickstate: [0,0,0,0,0,0,0,0,0], sFlag : false, winProb : [
      [0,1,2],
      [0,4,8],
      [0,3,6],
      [1,4,7],
      [2,4,6],
      [2,5,8],
      [3,4,5],
      [0,1,2],
      [6,7,8]
    ],
    res: 'O\'s turn'
    }
  }

  switchFlag() {
    var { sFlag } = this.state
    if( sFlag ) {
      sFlag = false
    }else {
      sFlag = true
    }
    this.setState({ sFlag : sFlag })
    return sFlag ;
  }

  clicked(targetId) {
    const { clickstate } = this.state
    if ( clickstate[targetId] == 0 ) {
      if( this.switchFlag() ) {
        clickstate[targetId] = 1
        this.setState({ clickstate : clickstate, res : 'X\'s turn' })
      }else {
        clickstate[targetId] = -1
        this.setState({ clickstate : clickstate, res : 'O\'s turn' })
      }
      this.winCheck()
    }
  }

  winCheck() {
    var { clickstate, winProb, res } = this.state

    for(var i = 0; i < 9; i++) {
      var tempX = 0, tempY = 0;
      for(var j = 0; j < 3 ; j++) {
        if(clickstate[winProb[i][j]] == 1){
          tempX++;
        }else if(clickstate[winProb[i][j]] == -1){
          tempY++;
        }
      }
      if( tempX == 3 ) {
         clickstate = [1,1,1,1,1,1,1,1,1]
         res = 'O wins'
         this.setState({ clickstate : clickstate, res : res})
      }else if( tempY == 3 ){
        clickstate = [-1,-1,-1,-1,-1,-1,-1,-1,-1]
        res = 'X wins'
        this.setState({ clickstate : clickstate, res : res})
      }
    }
  }

  resetAll() {
      var { clickstate, sFlag, winProb, res } = this.state
      this.setState({ clickstate: [0,0,0,0,0,0,0,0,0], sFlag : false, winProb : [
        [0,1,2],
        [0,4,8],
        [0,3,6],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [3,4,5],
        [0,1,2],
      ],
      res: '-'})
  }

  /*
  * render function...
  */
  render() {
    const { clickstate, res } = this.state
    return(
      <View style={styles.tttBoard} >
        <View style={styles.tttHead} >
          <Text style={styles.tttTtl} > Tic Tac Toe </Text>
        </View>
        <View style={styles.tttCol} >
          <TouchableOpacity style={styles.tttblock} onPress={(e) => this.clicked(0)}>
          { (clickstate[0] != 0) ?
              (clickstate[0] == 1) ?
                <Text style={styles.ttttext} > O </Text>
              :
                <Text  style={styles.ttttext} > X </Text>
            :
              <Text  style={styles.ttttext} > _ </Text>
          }
          </TouchableOpacity>
          <TouchableOpacity style={styles.tttblock} onPress={(e) => this.clicked(1)}>
          { (clickstate[1] != 0) ?
              (clickstate[1] == 1) ?
                <Text style={styles.ttttext} > O </Text>
              :
                <Text  style={styles.ttttext} > X </Text>
            :
              <Text  style={styles.ttttext} > _ </Text>
          }
          </TouchableOpacity>
          <TouchableOpacity style={styles.tttblock} onPress={(e) => this.clicked(2)}>
          { (clickstate[2] != 0) ?
              (clickstate[2] == 1) ?
                <Text style={styles.ttttext} > O </Text>
              :
                <Text  style={styles.ttttext} > X </Text>
            :
              <Text  style={styles.ttttext} > _ </Text>
          }
          </TouchableOpacity>
        </View>
        <View style={styles.tttCol} >
          <TouchableOpacity style={styles.tttblock} onPress={(e) => this.clicked(3)}>
          { (clickstate[3] != 0) ?
              (clickstate[3] == 1) ?
                <Text style={styles.ttttext} > O </Text>
              :
                <Text  style={styles.ttttext} > X </Text>
            :
              <Text  style={styles.ttttext} > _ </Text>
          }
          </TouchableOpacity>
          <TouchableOpacity style={styles.tttblock} onPress={(e) => this.clicked(4)}>
          { (clickstate[4] != 0) ?
              (clickstate[4] == 1) ?
                <Text style={styles.ttttext} > O </Text>
              :
                <Text  style={styles.ttttext} > X </Text>
            :
              <Text  style={styles.ttttext} > _ </Text>
          }
          </TouchableOpacity>
          <TouchableOpacity style={styles.tttblock} onPress={(e) => this.clicked(5)}>
          { (clickstate[5] != 0) ?
              (clickstate[5] == 1) ?
                <Text style={styles.ttttext} > O </Text>
              :
                <Text  style={styles.ttttext} > X </Text>
            :
              <Text  style={styles.ttttext} > _ </Text>
          }
          </TouchableOpacity>
        </View>
        <View style={styles.tttCol} >
          <TouchableOpacity style={styles.tttblock} onPress={(e) => this.clicked(6)}>
          { (clickstate[6] != 0) ?
              (clickstate[6] == 1) ?
                <Text style={styles.ttttext} > O </Text>
              :
                <Text  style={styles.ttttext} > X </Text>
            :
              <Text  style={styles.ttttext} > _ </Text>
          }
          </TouchableOpacity>
          <TouchableOpacity style={styles.tttblock} onPress={(e) => this.clicked(7)}>
          { (clickstate[7] != 0) ?
              (clickstate[7] == 1) ?
                <Text style={styles.ttttext} > O </Text>
              :
                <Text  style={styles.ttttext} > X </Text>
            :
              <Text  style={styles.ttttext} > _ </Text>
          }
          </TouchableOpacity>
          <TouchableOpacity style={styles.tttblock} onPress={(e) => this.clicked(8)}>
          { (clickstate[8] != 0) ?
              (clickstate[8] == 1) ?
                <Text style={styles.ttttext} > O </Text>
              :
                <Text  style={styles.ttttext} > X </Text>
            :
              <Text  style={styles.ttttext} > _ </Text>
          }
          </TouchableOpacity>
        </View>
        <View style={styles.tttFoot} >
          <Text style={styles.tttRes} > { res } </Text>
          <TouchableOpacity style={styles.resetBtn} onPress={(e) => this.resetAll()}>
            <Text style={styles.resetTxt} > Reset </Text>
          </TouchableOpacity>
        </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  tttblock: {
    backgroundColor: 'blue',
    margin: 2,
    height: 70,
    width: 70,
    paddingTop: 7,
    color: 'white',
    alignContent: 'center',
    alignItems: 'center',
  },
  tttCol: {
    flexDirection: 'row',
    margin: 2,
  },
  tttBoard: {
    margin: 30,
    marginTop: 100,
    padding: 20,
    backgroundColor: '#147',
    alignContent: 'center',
    alignItems: 'center',
  },
  ttttext: {
    fontSize: 40,
    color: 'white',
  },
  tttTtl: {
    fontSize: 30,
    color: 'white',
    paddingBottom: 10,
  },resetTxt: {
    fontSize: 20,
    color: 'white',
    paddingBottom: 10,
  }, resetBtn: {
    backgroundColor: 'blue',
    margin: 2,
    height: 50,
    width: 150,
    paddingTop: 7,
    alignContent: 'center',
    alignItems: 'center',
  },tttFoot : {
    paddingTop: 7,
    alignContent: 'center',
    alignItems: 'center',
  },tttRes : {
    fontSize: 15,
    color: 'white',
    paddingBottom: 10,
  }
});


export default TTT;
