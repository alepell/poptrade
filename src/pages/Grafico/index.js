/* eslint-disable no-unused-expressions */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Dimensions} from 'react-native';
import { BarChart, PieChart} from 'react-native-chart-kit';
import api from '../../services/api';


export default class Grafico extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Grafico: ${navigation.getParam('grafico').id}`,
  });

  state = {
    graph: [],
  };

  async componentDidMount(){

    const { navigation } = this.props;
    const grafico = navigation.getParam('grafico');

    const response = await api.get(`/chart/${grafico.id}`);

    const teste = {
      chartdata: response.data.chartData,
      chartlabel: response.data.chartLabel
    }

    this.setState({ graph: [response.data] })


  }

   render(){
    const { graph } = this.state;
    const { navigation } = this.props;

    const data = {
      labels: [
        graph.chartLabels,
      ],
      datasets: [{
        data: [10, 20, 30]
      }]
    }

    return(
      <BarChart

      data={ data }
      width={Dimensions.get('window').width} // from react-native
      height={200}

      chartConfig={{
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        }
      }}
      />
    )
   }

}

