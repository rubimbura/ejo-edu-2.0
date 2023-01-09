// import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import Navigation from './navigation/index'
import { Text, View, ActivityIndicator  } from 'react-native'
import { store } from './store'
import { Provider } from 'react-redux'





export default function App() {


  const customFonts = {
    sansBold: require('./styles/fonts/SourceSansPro-Bold.ttf'),
    sansMedium: require('./styles/fonts/SourceSansPro-SemiBold.ttf'),
    sansRegular: require('./styles/fonts/SourceSansPro-Regular.ttf'),
    sansLight: require('./styles/fonts/SourceSansPro-Light.ttf'),
    nostroBold: require('./styles/fonts/NotoSerifTC-Bold.otf'),
    nostroMedium: require('./styles/fonts/NotoSerifTC-Medium.otf'),
    notoRegular: require('./styles/fonts/NotoSerifTC-Regular.otf'),
    nostroLight: require('./styles/fonts/NotoSerifTC-Light.otf'),

  };

  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><ActivityIndicator/></View>;
  }


  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}

