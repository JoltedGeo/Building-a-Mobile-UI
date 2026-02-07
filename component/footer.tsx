import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function Footer() {
  return (
    <View style={styles.footer}>
        <TouchableOpacity onPress={() => {}}>
            <SimpleLineIcons name="home" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
            <SimpleLineIcons name="book-open" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
            <MaterialCommunityIcons name="bookshelf" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
            <SimpleLineIcons name="user" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
            <MaterialCommunityIcons name="crown-outline" size={31} color="black" />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",           // Layout children in a row
    justifyContent: "space-between", // Space left/right items
    alignItems: "center",           // Vertically center everything
    backgroundColor: "White",
    paddingHorizontal: 25,          // Add horizontal padding
    height: 50,
    borderTopColor: 'black',
    borderTopWidth: 0.5,
  },
});
