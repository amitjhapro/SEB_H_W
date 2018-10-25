import * as React from "react";
import { Text, View, TouchableOpacity, Image, StatusBar } from 'react-native'
import styles from "./styles";
import { checkInternetConnection, offlineActionTypes, withNetworkConnectivity } from 'react-native-offline';
import PopupDialog, { SlideAnimation, DialogTitle, DialogButton } from 'react-native-popup-dialog';
//import reducer from "react-native-offline/src/reducer";
import globalStyles from "../../../globalStyles";

/* 
const YourComponent = ({ isConnected }) => (
    <Text>{isConnected ?  'Look ma, I am connected to the internet!' : 'Offline :('}</Text>
  ); */
class HostBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            status1: true,
            status2: false,
            isConnected: '',
            HostBoardList:[
                {
                    id:1,
                    name:'Arduino Yun'
                },
                {
                    id:2,
                    name:'Raspberry Pi'
                }
            ]
        }
        
    }

    listClickEvent = (event) => {
        console.log("dataaaa----" + event);
        //this.setState({ status: event });
        this.setState({ status2: true });
        console.log("dataaaa----" + event);
		this.setState({ selectedIndex: event });
    //this.setState({ nextButtonEnabled: true });
    this.setState({ status2: true });
    }
    list2ClickEvent = (event) => {
        console.log("dataaaa----" + event);
        this.setState({ status1: event });
    }
    hostBoardList = () => {
		return this.state.HostBoardList.map((data)=>{			
			return (
			<TouchableOpacity id="a" onPress={() => this.listClickEvent(`${data.id}`)} key={data.name}>
				<View flexDirection='row' style={styles.division1} >
					<View flexDirection='column' style={styles.col3Css}>
						{/* <Image source={this.state.listDataImageMapping[data.name]} style={styles.ListImgCSS} /> */}
					</View>
					<View flexDirection='column' style={styles.col5Css}>
						<Text style={styles.label}>{data.name}</Text>
					</View>
					<View flexDirection='column' style={styles.col2Css}>
						<Image source={this.state.selectedIndex == `${data.id}` ? require('../../../assets/CheckboxActive.png') : require('../../../assets/Checkbox.png')} style={styles.ListImgCSS} />
					</View>
				</View>
			</TouchableOpacity>
			)
		});
	};
    nextClick() {
        /*        NetInfo.getConnectionInfo().then((connectionInfo) => {
                   alert('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.isConnected);
                 
               });
               withNetworkConnectivity.isConnected.fetch().done(
                   (isConnected) => {  alert(isConnected) }
               ); */
        checkInternetConnection().then(isConnected => {

            if (!isConnected) {
                this.props.navigation.navigate("Sebdevice")
            }
            else {
                this.popupDialog.show();
                this.props.navigation.navigate("Sebdevice")
            }
        });

    }

    render() {
        const { navigate } = this.props.navigation;
        const slideAnimation = new SlideAnimation({
            slideFrom: 'bottom',
        });
        
        return (
            <View style={globalStyles.backgroundStyles}>
                <View>
                    <StatusBar
                        backgroundColor="#303030"
                        barStyle="light-content"
                    />
                </View>
                <View style={styles.background} flexDirection='row'>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                        <Image source={require('../../../assets/hamburgerMenu.png')} style={styles.image2} />
                    </TouchableOpacity>
                    <Text style={styles.home}>Home</Text>
                </View>

                <View>
                    <Image source={require('../../../assets/sensor.png')} style={{ height: 220, width: 412, position: 'absolute', resizeMode: 'cover' }} />
                </View>
                <View style={styles.subheaderCss}>
                    <Text style={styles.header}> Hostboard Selection </Text>
                </View>

                <View style={[styles.cardTop, styles.cardBottom]}>
                    <View flexDirection='column' style={styles.division}>
                        <Text style={styles.header}>Select Host Board</Text>
                    </View>
                    <View style={styles.listViewCss}>
                    {this.hostBoardList()}
                        {/* <TouchableOpacity id="a" onPress={() => this.listClickEvent('1')}>
                            <View flexDirection='row' style={styles.division1} >
                                <View flexDirection='column' style={styles.col3Css}>
                                    <Image source={require('../../../assets/micro.png')} style={styles.ListImgCSS} />
                                </View>
                                <View flexDirection='column' style={styles.col5Css}>
                                    <Text style={styles.label}>Arduino Yun</Text>
                                </View>
                                <View flexDirection='column' style={styles.col2Css}>
                                    <Image source={this.state.status == '1' ? require('../../../assets/CheckboxActive.png') : require('../../../assets/Checkbox.png')} style={styles.ListImgCSS} />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.listClickEvent('2')}>
                            <View flexDirection='row' style={styles.division1}>
                                <View flexDirection='column' style={styles.col3Css}>
                                    <Image source={require('../../../assets/micro.png')} style={styles.ListImgCSS} />
                                </View>
                                <View flexDirection='column' style={styles.col5Css}>
                                    <Text style={styles.label}>Raspberry Pi</Text>
                                </View>
                                <View flexDirection='column' style={styles.col2Css}>
                                    <Image source={this.state.status == '2' ? require('../../../assets/CheckboxActive.png') : require('../../../assets/Checkbox.png')} style={styles.ListImgCSS} />
                                </View>
                            </View>
                        </TouchableOpacity> */}
                    </View>
                </View>

                <View style={[styles.cardTop, styles.cardBottom]}>
                    <View flexDirection='column' style={styles.division2}>
                        <Text style={styles.header}>Select Wireless Option</Text>

                    </View>
                    <View style={[styles.listViewCss, styles.cardBottom]}>
                        <TouchableOpacity onPress={() => this.list2ClickEvent('2')} disabled={true}>
                            <View flexDirection='row' style={styles.division1}>
                                <View flexDirection='column' style={styles.col3Css}>
                                    <Image source={require('../../../assets/bluetooth.png')} />
                                </View>
                                <View flexDirection='column' style={styles.col5Css}>
                                    <Text style={styles.label}>BLE</Text>
                                </View>
                                <View flexDirection='column' style={styles.col2Css}>
                                    <Image source={require('../../../assets/Checkbox.png')} style={styles.ListImgCSS} />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.list2ClickEvent('2')}>
                            <View flexDirection='row' style={styles.division1}>
                                <View flexDirection='column' style={styles.col3Css}>
                                    <Image source={require('../../../assets/wifi.png')} />
                                </View>
                                <View flexDirection='column' style={styles.col5Css}>
                                    <Text style={styles.label}>WiFi</Text>
                                </View>
                                <View flexDirection='column' style={styles.col2Css}>
                                    <Image source={this.state.status1 ? require('../../../assets/CheckboxActive.png') : require('../../../assets/Checkbox.png')} style={styles.ListImgCSS} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


                {this.state.status2 ? <TouchableOpacity style={styles.nextBtnViewCss}
					/* onPress={() =>
						this.props.navigation.navigate("Sebdevice", {name: { item }})} */
                    onPress={this.nextClick.bind(this)}

                >
                    <Text style={styles.next} >Next</Text>
                </TouchableOpacity> :
                    <TouchableOpacity style={styles.nextBtnViewCss1} >
                        <Text style={styles.next1} >Next</Text>
                    </TouchableOpacity>}

                <PopupDialog
                    width={'90%'}
                    containerStyle={{ zIndex: 10, elevation: 10, }}
                    dialogTitle={<DialogTitle title="Honeywell Info"
                        titleStyle={{ backgroundColor: '#B5131C' }}
                        titleTextStyle={{ color: 'white', fontSize: 25 }}
                    />}
                    // titleStyle= {styles.popupheaderCss}

                    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                    dialogAnimation={slideAnimation}
                >
                    <View style={styles.popupCss}>
                        <Text style={styles.popupTextCss}>Seems like you are not connected to any host board. Please connect a host board WiFi to continue</Text>

                    </View>
                    <DialogButton text="OK" buttonStyle={{
                        backgroundColor: '#00bfff', width: '50%', height: '15%', color: 'white', justifyContent: 'center',
                        position: 'absolute',
                        bottom: 10
                    }}
                        textStyle={{ color: 'white' }}
                        onPress={() => {
                            this.popupDialog.dismiss()
                        }} />
                </PopupDialog>

            </View>
        );
    }
}

export default HostBoard;
