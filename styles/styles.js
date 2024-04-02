import { StyleSheet, Dimensions } from 'react-native';
const DeviceWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    homeMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeGrid: {
        flexDirection: "row",
    },
    opButton: {
        width: DeviceWidth * 0.4,
        height: DeviceWidth * 0.4,
        alignSelf: "center",
    },
    centerize: {
        alignSelf: "center"
    }
  });
