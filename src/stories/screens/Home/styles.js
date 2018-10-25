import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    paddingTop: 70
  },
  gif: {
    backgroundColor: "#D8D8D8",
    padding: 10,
    marginTop: 50,
    opacity: 0.75,
    height: 291,
    width: '88%',
    alignItems: 'center'
  },
  linksContainer: {
    marginBottom: 25
  },
  selectHostBoardLink: {
    height: 20,
    width: 140,
    fontFamily: "Honeywell Sans TT",
    color: '#1792E5',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: -0.38,
    lineHeight: 20
  },
  aboutHoneywellSeb: {
    width: 143,
    color: '#A0A0A0',
    fontSize: 14,
    fontFamily: "Honeywell Sans TT",
    fontWeight: '500',
    lineHeight: 17,
    paddingTop: 10
  }
});
