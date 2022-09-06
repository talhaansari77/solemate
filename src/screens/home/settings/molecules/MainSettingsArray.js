import { useNavigation } from '@react-navigation/native';
import icons from '../../../../../assets/icons'

const MainSettingsArray = [
    {
        id: 1,
        name: "Settings",
        icon: icons.settingIcon,
        onPress:()=> useNavigation
    },
    {
        id: 2,
        name: "Support Center",
        icon: icons.questionMarkIcon,
        routesNames: ['GeneralSettings']
    },
    {
        id: 3,
        name: "Log Out",
        icon: icons.logIcon,
        routesNames: ['Settings']
    },
]

export default MainSettingsArray;