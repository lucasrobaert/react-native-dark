import React from 'react';
import {View} from 'react-native';
import Card from './components/card';
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
          <SwitchComponent />
        </RootView>
      </RootSafeAreaView>
    </ManageThemeProvider>
  );
};

export default App;
