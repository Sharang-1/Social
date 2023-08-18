import { StyleSheet, View , FlatList, Pressable } from 'react-native';
import Tweet from '../../../../components/tweet';
import tweets from '../../../../assets/data/tweets';
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';

const tweet = tweets[0];

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList data ={tweets} renderItem={({item})=><Tweet tweet = {item}/>}/>
      <Pressable >
        <Link href='/new-tweet' asChild>
            <Entypo name="plus" size= {24} color="white" style = {styles.floatingButton}/>
        </Link>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create ({
  page:{
    backgroundColor:'white',
    flex:1,
  },
  floatingButton:{
    backgroundColor:'#1C9DF0',
    padding:15,
    borderRadius:25,
    position:'absolute',
    right:15,
    bottom:15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0, 
      height: 2,
    }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden'
  }
}) ;