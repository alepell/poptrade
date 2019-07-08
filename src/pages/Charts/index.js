/* eslint-disable no-unused-expressions */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { BarChart} from 'react-native-chart-kit';
import api from '../../services/api';
import { TextView, Text, Container, List, Grafico, Id, Tipo, GraphicButton, GraphicButtonText } from './styles';

export default class Charts extends Component {

  state = {
    graficos: [],
    mensagem: '',
  }

  async componentDidMount() {

    const response = await api.get('/');

    this.setState({
      mensagem: response.data.message,
      graficos: response.data.charts
    });
  }

  handleNavigate = (grafico) => {
    const { navigation } = this.props;

    navigation.navigate('Grafico', { grafico });
  }

  render(){
    const { graficos, mensagem } = this.state;

    return (
      <Container>
        <TextView>
          <Text>{mensagem}</Text>

        </TextView>
        <List
          data={graficos}
          keyExtractor={grafico => String(grafico.id)}
          renderItem={({ item }) => (
            <Grafico>
              <GraphicButton onPress={() => this.handleNavigate(item)}>
                <GraphicButtonText>{`Ver Chart: ${item.id} | tipo: ${item.type}`}</GraphicButtonText>
              </GraphicButton>
            </Grafico>
          )}
        />
      </Container>
    );
  }
}

Charts.navigationOptions = {
  title: 'Charts List'
}
