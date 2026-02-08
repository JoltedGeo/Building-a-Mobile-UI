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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#242ba1",
    paddingHorizontal: 10,
    height: 60,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
