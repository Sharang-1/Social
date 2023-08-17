import { EvilIcons} from '@expo/vector-icons' ;
import { Text, View } from 'react-native';

type IconProps ={
    icon: React.ComponentProps<typeof EvilIcons>['name'];
    text?: string | number;
};

export const IconButton = ({ icon, text }:IconProps)=>{
    return(
        <View style={{flexDirection:'row'}}>
            <EvilIcons name= {icon} size={22} color="grey" />
            <Text style={{fontSize:12, color:'grey'}}>{text}</Text>
        </View>
    )
};
