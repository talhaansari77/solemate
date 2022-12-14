import "react-native-gesture-handler";
import { LogBox,View } from "react-native";
import RootNavigator from "./src/routes";


import { Provider } from "redux";
import { store } from "./src/redux/store";
import { useFonts } from "expo-font";




LogBox.ignoreLogs(["VirtualizedLists", "Warning:..."]);
LogBox.ignoreAllLogs();

export default function App() {

  const [loaded] = useFonts({
    regular: require("./assets/Fonts/ProximaNova_Regular.otf"),
    bold: require("./assets/Fonts/ProximaNova_Bold.otf"),
    extra: require("./assets/Fonts/ProximaNova_Extrabold.otf"),



 
  });

  if (!loaded) return <View />;

  return (
    //  <Provider store={store}>
      <RootNavigator />
  //  </Provider>
  );
}
