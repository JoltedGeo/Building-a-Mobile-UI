import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="chevron-back" size={34} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>GACHIAKUTA</Text>

      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="share-social-outline" size={34} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",           // Layout children in a row
    justifyContent: "space-between", // Space left/right items
    alignItems: "center",           // Vertically center everything
    backgroundColor: "blue",
    paddingHorizontal: 10,          // Add horizontal padding
    height: 80,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
