import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';

// Define a type for a chapter
type Chapter = {
  id: string;
  number: number;
  title: string;
};

// Sample chapter data
const chapters: Chapter[] = [
    { id: '1', number: 1, title: 'CHAPTER 110 AN ACT OF' },
    { id: '2', number: 2, title: 'CHAPTER 111 FALSE FACE' },
    { id: '3', number: 3, title: 'CHAPTER 112 UNBOXING' },
    { id: '4', number: 4, title: 'CHAPTER 113 A VAUGE IDENTITY' },
    { id: '5', number: 5, title: "CHAPTER 114 FLAILIN'" },
];

export default function MainContent() {

  const renderChapter = ({ item }: { item: Chapter }) => (
    <TouchableOpacity 
      style={styles.chapterRow} 
      onPress={() => console.log('Pressed chapter', item.number)}
      activeOpacity={0.7}
    >
        <Fontisto name="checkbox-passive" size={30} color="black" />

        <View style={styles.chapterInfo}>
            <Text style={styles.chapterTitle}>{item.title}</Text>
        </View>

        <MaterialCommunityIcons name="ticket-outline" size={24} color="black" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.content}>
      <FlatList // FlatList for better performance with lists
        data={chapters}
        keyExtractor={(item) => item.id}
        renderItem={renderChapter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 10,
  },
  chapterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    marginVertical: 0,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderColor: 'Black',
    borderWidth: 0.3,
    shadowColor: "darkgray",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  chapterInfo: {
    flex: 1,
    marginHorizontal: 10,
  },
  chapterNumber: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  chapterTitle: {
    fontSize: 14,
    color: '#161616',
    fontWeight: 'bold',
  },
});