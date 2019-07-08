/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Container, ButtonCharts, Text  } from './styles';

export default class Main extends Component {

  handleNavigate = () =>{
    const { navigation } = this.props;

    navigation.navigate('Charts');
  }



  render(){
    return (
      <Container>
        <ButtonCharts onPress={this.handleNavigate}>
          <Text>Listar Graficos</Text>
        </ButtonCharts>
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'POP Trade'
}
