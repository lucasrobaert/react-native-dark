import React from 'react';
import {View} from 'react-native';
import Card from './components/card';
import Button from './components/button';
import {ManageThemeProvider} from './hooks/theme';
import {
  RootSafeAreaView,
  RootView,
  TitleView,
  TitleText,
  TextContainer,
  TextView,
} from './styles/rootView';
import SwitchComponent from './components/switch';

const App = () => {
  return (
    <ManageThemeProvider>
      <RootSafeAreaView>
        <RootView>
          <TitleView>
            <TitleText>BRASÍLIA</TitleText>
          </TitleView>
          <View>
            <Card />
          </View>
          <TextContainer>
            <TextView>
              Exemplo de dark mode sem uso de lib de terceiros.
            </TextView>
          </TextContainer>

          <Button style={{marginTop: 10}}>Botão de teste</Button>
          <SwitchComponent style={{marginTop: 20}} />
        </RootView>
      </RootSafeAreaView>
    </ManageThemeProvider>
  );
};

export default App;
