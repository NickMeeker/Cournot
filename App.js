//https://coolors.co/export/pdf/eccbd9-e1eff6-97d2fb-83bcff-80ffe8
import React from 'react';
import PropTypes from 'prop-types';
import {Image, TouchableOpacity, NavigatorIOS, Text, View, ScrollView, StyleSheet} from 'react-native';
import Duopoly from './scenes/Duopoly';
import Oligopoly from './scenes/Oligopoly';

export default class App extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'Home',
        }}
        style={{flex: 1}}
      />
    );
  }
}

class MyScene extends React.Component {
  state = {
    firms: []
  }
  
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    navigator: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this._onDuopoly = this._onDuopoly.bind(this);
    this._onOligopoly = this._onOligopoly.bind(this);
  }

  _onDuopoly() {
    this.props.navigator.push({
      component: Duopoly,
      title: 'Duopoly'
    });
  }

  _onOligopoly() {
    this.props.navigator.push({
      component: Oligopoly,
      title: 'Oligopoly'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Please select your Cournot model type</Text>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <TouchableOpacity onPress={this._onDuopoly}>
            <View>
              <Text style={{alignSelf: 'center'}}>Duopoly</Text>
              <Image style={styles.twoDots} source={require('./assets/twoDots.png')} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onOligopoly}>
            <View>
              <Text style={{alignSelf: 'center'}}>Three-Firm Oligopoly</Text>
              <Image style={styles.threeDots} source={require('./assets/threeDots.png')} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 200
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#424242',
  },
  instructions: {
    textAlign: 'center',
    color: '#424242',
    marginBottom: 5,
  },
  button: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
  },
  buttonText: {
    color: '#e1eff6',
  },
  twoDots: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  threeDots: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'center'
  }
});
