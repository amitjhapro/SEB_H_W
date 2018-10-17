import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
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

const Drawer = DrawerNavigator(
	{
		HostBoard: { screen: HostBoard },
		Help:{screen:Help}
	},
	{
		initialRouteName: "HostBoard",
		contentComponent: Sidebar,
		drawerWidth:210
	}
);

const App = StackNavigator(
	{
		Login: { screen: Login },
		Home: { screen: Home },
		BlankPage: { screen: BlankPage },
		AboutHoneywell: { screen: AboutHoneywell },
		Sebboard: { screen: Sebboard },
		Sebdevice: { screen: Sebdevice },
		Sensorselection:{screen:Sensorselection},
		GenPartNo :{screen:GenPartNo},
		Arduinohelp:{screen:Arduinohelp},
		Raspberryhelp:{screen:Raspberryhelp},
		Drawer: { screen: Drawer },
	},
	{
		initialRouteName: "Home",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);
