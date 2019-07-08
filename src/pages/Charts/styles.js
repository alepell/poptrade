import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 10px;

`;

export const TextView = styled.View`
  justify-content: center;
  align-items: center;
  border: 1px solid #00abed;
  margin-top: 10px;
  border-radius: 50px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Text = styled.Text`

  font-weight: bold;
  color: #00abed;
  font-size: 16px;
  padding: 5px;

`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Grafico = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Id = styled.Text`
  color: #333;
  font-weight: bold;
`;

export const Tipo = styled.Text`
  color: black;
  font-weight: bold;
`;

export const GraphicButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  background: #00abed;
  padding: 20px;
`;

export const GraphicButtonText = styled.Text`

  color: #fff;


`;
