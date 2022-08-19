import React from "react";
import { StyleSheet,Text,View ,Image} from "react-native";
import Icons from "../../utils/Icons";
const Hospital=()=>{
    return(
    <View style={{margin: 10}}>
        <Text style={{fontSize:12,marginBottom:5,marginTop:-85,marginLeft:215,color:'gray'}}>Need</Text>
        <View
          style={{
            padding: 10,
            width:'43%',
            height: 45,
            marginLeft:210,
            justifyContent: 'flex-start',
            elevation: 6,
            borderRadius: 10,
            shadowOffset: {width: 0, height: 2},
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'lightgrey',
            flexDirection: 'row',
          }}>
             
                <Image source={Icons.HOSPITAL} style={{marginTop:-10,marginLeft:10,width:35,height:40}}/>
                <Text style={{justifyContent: 'center',fontWeight:'700'}}>     Biryani</Text>
            
         </View>
    </View>
    )
};
export default Hospital;
