import "react-native-gesture-handler";
import { LogBox,View } from "react-native";
import RootNavigator from "./src/routes";
<<<<<<< HEAD
// import { Provider } from "react-redux";
// import { store } from "./src/redux/store";
=======
import { Provider } from "redux";
import { store } from "./src/redux/store";
import { useFonts } from "expo-font";


>>>>>>> aa2bef82ab739a81545f7e49fa68701b2ee8ae09

LogBox.ignoreLogs(["VirtualizedLists", "Warning:..."]);
LogBox.ignoreAllLogs();

export default function App() {

  const [loaded] = useFonts({
    regular: require("./assets/Fonts/ProximaNova_Regular.otf"),
    bold: require("./assets/Fonts/ProximaNova_Bold.otf"),

 
  });

  if (!loaded) return <View />;

  return (
    //  <Provider store={store}>
      <RootNavigator />
  //  </Provider>
  );
}
