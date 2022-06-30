import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigators/MainNavigator';
import { defaultTheme } from './src/constants/themes'; 
import { navigationRef } from './src/navigators/RootNavigation';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef} theme={defaultTheme}>
      <MainNavigator/>
    </NavigationContainer>
  );
}
