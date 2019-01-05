//https://coolors.co/export/pdf/eccbd9-e1eff6-97d2fb-83bcff-80ffe8
import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput} from 'react-native';


export default class Firm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      demandSlope: null,
      demandConstant: null,
      costSlope: null,
      costConstant: null,
      updated: false
    };
  }

  componentDidUpdate() {
    if(this.state.demandSlope != null &&
        this.state.demandConstant != null &&
        this.state.costSlope != null &&
        this.state.costConstant != null &&
        !this.state.updated) {
          this.setState({updated: true});
          this.props.updateFirm(this.props.firmID, this.state);
        }
  }

  handleChange(name, value) {
    this.setState(() => ({ [name]: value }));
    this.setState({updated: false});
  }

  render() {
    return (
      <View>
        <Text>Inverse Demand Function</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{height: 20}}>P(Q) = </Text>
          <TextInput
            style={{height: 20, width: 40, borderBottomWidth: 1, borderBottomColor: '#424242' }}
            keyboardType = 'default'
            onChangeText={(demandSlope) => this.handleChange('demandSlope', demandSlope)}
            name='demandSlope'
            value={this.state.demandSlope}
          />
          <Text style={{height: 20}}>Q +</Text>
          <TextInput
            style={{height: 20, width: 40, borderBottomWidth: 1, borderBottomColor: '#424242' }}
            keyboardType = 'default'
            onChangeText={(demandConstant) => this.handleChange('demandConstant', demandConstant)}
            value={this.state.demandConstant}
          />
        </View>

        <View style={{marginTop: 10}}>
          <Text>Cost Function:</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{height: 20}}>C(Q) = </Text>
          <TextInput
            style={{height: 20, width: 40, borderBottomWidth: 1, borderBottomColor: '#424242' }}
            keyboardType = 'default'
            onChangeText={(costSlope) => this.handleChange('costSlope', costSlope)}
            value={this.state.costSlope}
          />
          <Text style={{height: 20}}>Q +</Text>
          <TextInput
            style={{height: 20, width: 40, borderBottomWidth: 1, borderBottomColor: '#424242' }}
            keyboardType = 'default'
            onChangeText={(costConstant) => this.handleChange('costConstant', costConstant)}
            value={this.state.costConstant}
          />
        </View>
      </View>
    );
  }
}
