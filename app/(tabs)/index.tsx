import { StyleSheet, View , FlatList } from 'react-native';
import Tweet from '../../components/tweet';
import tweets from '../../assets/data/tweets';

const tweet = tweets[0];

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList data ={tweets} renderItem={({item})=><Tweet tweet = {item}/>}/>
    </View>
  );
}

const styles = StyleSheet.create ({
  page:{
    backgroundColor:'white',
    flex:1,
  }
}) ;