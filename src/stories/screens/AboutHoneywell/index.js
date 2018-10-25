import * as React from "react";
import { Text, View, TouchableOpacity, ScrollView, Button, Image } from 'react-native'
import Textarea from 'react-native-textarea';
import styles from "./styles";

class BlankPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navigateToWelcomeView}>
          <TouchableOpacity style={styles.onClickWelcome} onPress={() => this.props.navigation.navigate("Home")}>
            <Image source={require('../../../assets/left.png')} style={styles.imageBack} />
            <Text style={styles.welcomeLink} >Welcome</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scroll}>
          <View>
            <Text style={styles.aboutHeader}> About Honeywell SEB</Text>
            <Text style={styles.aboutContent}>Honeywell Sensor Evaluation Board(SEB) mobile app enables you to connect with a sensor evaluation boards mounted on Raspberry Pi 3 or Arduino Uno,Honeywell Mobile Application,which can be downloaded for free from the Play store or iOS store,controls the Arduino board or Raspberry board to take readings from the sensor and visualize the same on the mobile device</Text>
          </View>
          {/* <View>
            <Image source={require('../../../assets/sensor.png')} style={{ height: 220, width: 320, marginLeft: 20, marginRight: 20, marginTop: 160, position: 'absolute', resizeMode: 'cover' }} />
          </View> */}
          <View>
            <Text style={styles.accessManual}>Access User Manual></Text>
          </View>
          <View>
            <Text style={styles.feedback}>Feedback &#38; Suggestions</Text>
          </View>

          <View>
            {/* <Image source={require('../../../assets/sensor.png')} style={styles.backgroundImage} /> */}
            <View>
              <Textarea
                containerStyle={styles.feedbackTxtArea}
                style={styles.feedbackText}
                placeholderTextColor={'#c7c7c7'}
                underlineColorAndroid={'transparent'}
              />
            </View>
            <View>
              <Text style={styles.feedback}>Name</Text>
            </View>
            <View>
              <Textarea
                containerStyle={styles.nameTxtArea}
                placeholderTextColor={'#c7c7c7'}
                underlineColorAndroid={'transparent'}
              />
            </View>
            <View>
              <Text style={styles.feedback}>Email</Text>
            </View>
            <View>
              <Textarea
                containerStyle={styles.nameTxtArea}
                placeholderTextColor={'#c7c7c7'}
                underlineColorAndroid={'transparent'}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.submitClick}>
              <Text style={styles.submitText}>Submit Feedback</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.contactUs}>contactus@honeywell.com</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default BlankPage;
