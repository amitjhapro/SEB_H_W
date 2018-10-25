import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { AppState, Text, SafeAreaView } from 'react-native';
import { Root } from "native-base";
import Home from "./container/HomeContainer";
import AboutHoneywell from "./container/AboutHoneywellContainer";
import Sebboard from "./container/SebboardContainer";
import Sebdevice from "./container/SebdeviceContainer";
import Sidebar from "./container/SidebarContainer";
import Sensorselection from './container/sensorSeclation';
import GenPartNo from './container/GenPartNoContainer';
import HostBoard from './container/HostboardContainer';
import Help from './container/HelpContainer';
import Arduinohelp from './stories/screens/Help/arduino'
import Raspberryhelp from './stories/screens/Help/raspberry';
import Settings from './container/SettingsContainer';
import Documentation from './container/DocumentationContainer';
import AirflowSensors from './stories/screens/Documentation/airflow_sensors'
import AmplifiedAirflow from './stories/screens/Documentation/amplified_airflow'
import ZephyrHAF from './stories/screens/Documentation/zephyr_HAF'
import LoadProfile from './stories/screens/Settings/loadprofile'
import SaveProfile from './stories/screens/Settings/saveprofile'
import SendData from './stories/screens/Settings/senddata'
import WifiManager from 'react-native-wifi';
const Drawer = DrawerNavigator(
	{
		HostBoard: { screen: HostBoard },
		Help: { screen: Help },
		Documentation: { screen: Documentation },
		Settings: { screen: Settings }
	},
	{
		initialRouteName: "HostBoard",
		contentComponent: Sidebar,
		drawerWidth: 210
	}
);

const App = StackNavigator(
	{
		Home: { screen: Home },
		AboutHoneywell: { screen: AboutHoneywell },
		Sebboard: { screen: Sebboard },
		Sebdevice: { screen: Sebdevice },
		Sensorselection: { screen: Sensorselection },
		GenPartNo: { screen: GenPartNo },
		Arduinohelp: { screen: Arduinohelp },
		Raspberryhelp: { screen: Raspberryhelp },
		Drawer: { screen: Drawer },
		AirflowSensors: { screen: AirflowSensors },
		AmplifiedAirflow: { screen: AmplifiedAirflow },
		ZephyrHAF: { screen: ZephyrHAF },
		LoadProfile: { screen: LoadProfile },
		SaveProfile: { screen: SaveProfile },
		SendData: { screen: SendData }
	},
	{
		initialRouteName: "Home",
		headerMode: "none",
	}
);


/* WifiManager.getCurrentWifiSSID()
.then((ssid) => {
    alert("Your current connected wifi SSID is " + ssid)
}, () => {
    alert('Cannot get current SSID!');
}); */
export default () => (
	<Root>
		<SafeAreaView style={styles.safeArea}>
			<App />
		</SafeAreaView>
	</Root>
);

const styles = {
	safeArea: {
		flex: 1,
		backgroundColor: '#303030'
	}
};