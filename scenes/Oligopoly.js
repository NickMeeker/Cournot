import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, Button, NavigatorIOS, Text, View, ScrollView, StyleSheet, Dimensions} from 'react-native';
import Firm from '../Utilities/Firm';

export default class Oligopoly extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    navigator: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    // there will only ever be three firms, so we can initialize them this way
    this.state = {
      firms: [ {} , {}, {} ]
    };
  }

  handleSubmit = () => {
    console.log(this.state.firms);
  }

  updateFirm = (firmID, firmState) => {
    const newFirms = this.state.firms.slice();
    switch(firmID){
      case '1':
        newFirms[0] = firmState;
        this.setState({firms: newFirms});
        break;
      case '2':
        newFirms[1] = firmState;
        this.setState({firms: newFirms});
        break;
      case '3':
        newFirms[2] = firmState;
        this.setState({firms: newFirms});
        break;
      default:
        console.log('This is very very bad. This should never happen.');
        break;
    }
  }

  render() {
    return (
      <ScrollView scrollEnabled={false}>
        <View style={styles.container}>
          <Text>Firm One:</Text>
          <Firm firmID='1' updateFirm={this.updateFirm}/>
          <Text style={{marginTop: 30, height: 20}}>Firm Two: </Text>
          <Firm firmID='2' updateFirm={this.updateFirm}/>
          <Text style={{marginTop: 30, height: 20}}>Firm Three: </Text>
          <Firm firmID='3' updateFirm={this.updateFirm}/>
        </View>
        <View>
          <Button
            style={{paddingTop: 5}}
            title="Calculate Equilibrium"
            color="#841584"
            onPress={this.handleSubmit}
            accessibilityLabel="Calculate Equilibrium"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  }
});