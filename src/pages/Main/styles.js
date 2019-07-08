import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;

`;

export const ButtonCharts = styled(RectButton)`

  justify-content: center;
  align-items: center;
  background: #00abed;
  padding: 20px;
  border-radius: 50px;

`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
