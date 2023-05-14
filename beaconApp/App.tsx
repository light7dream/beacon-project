import { NativeBaseProvider, StatusBar } from "native-base";
import middlwareThunk from 'redux-thunk'
import { Provider, } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './src/redux/reducers/rootReducer';
const store = createStore(rootReducer, applyMiddleware(middlwareThunk))

import { THEME } from "./src/styles/theme";

import  Routes from "./route";

export default function App() {
  // const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <Provider store={store}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {<Routes />}
      </Provider>
    </NativeBaseProvider>
  );
}