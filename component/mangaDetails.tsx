import { Button } from "@react-navigation/elements";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function MangaDetails() {
  return (
    <View style={styles.detailFormat}>
        <Text style={styles.starRating}>⭐ 66,098</Text>
        
        <View style={styles.titleRow}>
            <Text style={styles.h1}>GACHIAKUTA</Text>

            <TouchableOpacity style={styles.rightIcon} onPress={() => console.log('Pressed >')}>
                <MaterialCommunityIcons name="greater-than" size={20} color="blue" />
            </TouchableOpacity>
        </View>

        <Text style={styles.authorDetails}>Manga by Kei Urana graffiti design by Hideyoshi Andou</Text>
        <Text style={styles.chapterUpdate}>New Ch Update: Every Tuesday</Text>

        <TouchableOpacity style={styles.favoriteButton} onPress={() => console.log('Pressed Action')}>
            <Octicons name="star-fill" size={28} color="gold" />
        </TouchableOpacity>

        <View style={styles.genreRow}>
            <TouchableOpacity style={styles.genreButtons} onPress={() => console.log('Pressed Action')}>
                <Text style={styles.genreText}>Action · Battle</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.genreButtons} onPress={() => console.log('Pressed Comedy')}>
                <Text style={styles.genreText}>Anime</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.genreButtons} onPress={() => console.log('Pressed Drama')}>
                <Text style={styles.genreText}>Award Winner</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
        
    },
    detailFormat: {
        width: '100%',
        height: 200, //180
        backgroundColor: 'white',
        borderBottomColor: 'darkgray',
        borderBottomWidth: 0.5,
    },
    h1: {
        flexDirection: 'row',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'blue',
        marginLeft: 20,
        marginTop: 5,
    },
    starRating: {
        color: 'gold',
        fontSize: 16,
        marginLeft: 20,
        marginTop: 5,
        fontWeight: 'bold',
    },
    authorDetails: {
        color: 'black',
        fontSize: 15,
        marginLeft: 20,
        marginTop: 5,
        fontWeight: 'bold',
        maxWidth: '70%',
    },
    chapterUpdate: {
        color: 'gray',
        fontSize: 13,
        marginLeft: 20,
        marginTop: 7.5,
        marginBottom: 7.5,
    },
    genreButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        flexWrap: 'wrap',
        maxWidth: '100%',
        marginTop: 10,
        marginLeft: 10,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    genreRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 5,
    },
    favoriteButton: {
        position: 'absolute',
        top: 10,
        right: 15,
        width: 48,
        height: 48,
        borderRadius: 28,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'darkgray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    genreText: {
        color: 'black',
        fontSize: 13,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightIcon: {
        marginLeft: 6,
        marginTop: 5,
    },
});