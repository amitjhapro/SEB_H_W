import * as React from "react";
import { Text, View, Image } from 'react-native'
import styles from "./styles";
class Home extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.logo}>
          <Image source={require('../../../assets/Honeywelllogo.png')} style={styles.logo} />
        </View>
        <View style={styles.gif}>
          <Text style={styles.text}>*GIF Placeholder*</Text>
        </View>
        <View style = {styles.linksContainer}> 
          <Text onPress={() => this.props.navigation.navigate("HostBoard")} style={styles.selectHostBoardLink} >Select host board></Text>
          <Text onPress={() => this.props.navigation.navigate('AboutHoneywell')} style={styles.aboutHoneywellSeb} >About Honeywell SEB</Text>
        </View>

      </View>
    );
  }
}

export default Home; 
