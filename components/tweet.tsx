import { StyleSheet, Image, Text, View, Pressable } from 'react-native';
import { TweetType } from '../types';
import { Entypo} from '@expo/vector-icons' ;
import {IconButton} from './IconButton';
import { Link } from 'expo-router';

type TweetProps = {
    tweet: TweetType;
}

const Tweet =({ tweet }: TweetProps)=>{
    return(
      <Link href={{ pathname: `/feed/tweet/${tweet.id}`, params: { tweet}}} asChild>
      <Pressable style={styles.maincontainer}>
        <Image style={styles.userImage} source={{ uri: tweet.user.image }} />
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.name}>{tweet.user.name}</Text>
            <Text style={styles.username}>{tweet.user.username} ·2h</Text> 
            <Entypo name="dots-three-horizontal" size={16} color="grey" style = {{marginLeft:'auto', alignItems:'center'}} />
            </View>
            <Text style={styles.content}>{tweet.content}</Text>
            {tweet.image && <Image source={{uri:tweet.image}} style={styles.image}/>}
            <View style={styles.footer}>
                <IconButton icon='comment' text = {tweet.numberOfComments}/>
                <IconButton icon='retweet' text = {tweet.numberOfRetweets}/>
                <IconButton icon='heart' text = {tweet.numberOfLikes}/>
                <IconButton icon='chart' text = {tweet.impressions || 0}/>
                <IconButton icon='share-apple'/>
            </View>
        </View>
    </Pressable>
   </Link>
    );
}

const styles = StyleSheet.create({
    maincontainer: {
      flexDirection: 'row',
      padding:10,
      borderBottomColor: 'lightgrey',
      borderBottomWidth:  StyleSheet.hairlineWidth,
      backgroundColor:'white',
    },
    userImage:{
      width: 50,
      height: 50,
      borderRadius: 50,
    },
    container:{
      marginLeft: 5,
      flex:1,
    },
    name:{
      fontWeight: '600',
    },
    username:{
      color:'grey',
      marginLeft:5,
    },
    content:{
      lineHeight:15,
      marginTop:5,
    },
    image:{
      width:'100%',
      aspectRatio:16/9,
      marginTop: 10,
      borderRadius:15,
    },
    footer:{
      flexDirection:'row',
      marginTop:5,
      padding:5,
      alignItems:'center',
      justifyContent:'space-between'
    },
  });
export default Tweet;