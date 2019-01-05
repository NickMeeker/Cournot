import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, Button, NavigatorIOS, Text, View, ScrollView, StyleSheet, Dimensions} from 'react-native';
import Firm from '../Utilities/Firm';

var height = Dimensions.get('window').height; //full height
export default class Duopoly extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    navigator: PropTypes.object.isRequired,
  }
  constructor(props, context) {
    super(props, context);
    // there will only ever be two firms, so we can initialize them this way
    this.state = {
      firms: [ {} , {} ],
      q1: null,
      p1: null,
      q2: null,
      p2: null,
      calculated: false
    };
  }

  handleSubmit = () => {
      // this is where the math happens
      console.log(this.state.firms);
      const firmOne = this.state.firms[0];
      const firmTwo = this.state.firms[1];
      const q1 = Number((2*Number(firmOne.demandConstant) - 
                                  2*Number(firmOne.costSlope) - 
                                    Number(firmTwo.demandConstant) + 
                                    Number(firmTwo.costSlope)) 
                                    / 3);
      const q2 = Number((2*Number(firmTwo.demandConstant) - 
                                  2*Number(firmTwo.costSlope) - 
                                    Number(firmOne.demandConstant) + 
                                    Number(firmOne.costSlope)) 
                                    / 3);
      const p1 = Number(firmOne.demandConstant) - Number(q1) - Number(q2);                      
      const p2 = Number(firmTwo.demandConstant) - Number(q1) - Number(q2);
            
      this.setState({q1: q1});
      this.setState({q2: q2});
      this.setState({p1: p1});
      this.setState({p2: p2});                
      this.setState({calculated: true});
      this.forceUpdate();
  }

  outputAnswer = () => {
    if(this.state.calculated) {
      return (
        <View>
          <Text>Firm One: </Text>
          <Text>q1: {this.state.q1}</Text>
          <Text>p1: {this.state.p1}</Text>
          <Text>Firm Two: </Text>
          <Text>q2: {this.state.q2}</Text>
          <Text>p2: {this.state.p2}</Text>
        </View>
      ) 
    } else {
      return (<View></View>);
    }
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
        <View>
          {this.outputAnswer()}
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
