import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function Footer() {
  return (
    <View style={styles.footer}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
            <SimpleLineIcons name="home" size={24} color="black" />
            <Text style={styles.iconText}>HOME</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
            <SimpleLineIcons name="book-open" size={24} color="black" />
            <Text style={styles.iconText}>Serialized</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
            <MaterialCommunityIcons name="bookshelf" size={30} color="black" />
            <Text style={styles.iconText}>Bookshelf</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
            <SimpleLineIcons name="user" size={24} color="black" />
            <Text style={styles.iconText}>My Page</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
            <MaterialCommunityIcons name="crown-outline" size={31} color="black" />
            <Text style={styles.iconText}>Ranking</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "White",
    paddingHorizontal: 25,
    height: 50,
    borderTopColor: 'black',
    borderTopWidth: 0.5,
  },
  iconContainer: {
    alignItems: "center",
  },
  iconText: {
    fontSize: 12,
    color: "black",
    marginTop: 2,
  },
});
