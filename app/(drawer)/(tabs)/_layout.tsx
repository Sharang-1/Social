import FontAwesome from '@expo/vector-icons/FontAwesome';
import {  Tabs, useNavigation } from 'expo-router';
import { Pressable, useColorScheme, Image } from 'react-native';
import { Entypo, EvilIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';

import Colors from '../../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function AvatarHeader(){
  const navigation = useNavigation();
  return(
    <Pressable onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}>
      <Image source={{uri:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png"}}  style={{width: 30,aspectRatio:1, borderRadius:40, marginLeft:10}}/>
    </Pressable>
  )
}

export const unstable_settings = {
  initialRouteName: 'feed',
};

export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="feed"
        options={{
          title: '',
          headerTitle: ()=>(<Image source={{uri:'https://1000logos.net/wp-content/uploads/2017/06/Twitter-Logо.png'}}  style={{width:30, aspectRatio:1}}/>),
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
          headerLeft:()=>(<AvatarHeader/>)
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <EvilIcons name="search" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="two copy"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <MaterialIcons name="groups" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="two copy 2"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Ionicons name="notifications-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="two copy 3"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <MaterialIcons name="mail-outline" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
