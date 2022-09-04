import "react-native-gesture-handler";
import { LogBox } from "react-native";
import RootNavigator from "./src/routes";
// import { Provider } from "react-redux";
// import { store } from "./src/redux/store";

LogBox.ignoreLogs(["VirtualizedLists", "Warning:..."]);
LogBox.ignoreAllLogs();

export default function App() {
  return (
    // <Provider store={store}>
      <RootNavigator />
    // </Provider>
  );
}
