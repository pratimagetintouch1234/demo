import React from "react";
import { StyleSheet, Text,View, SafeAreaView,Image } from "react-native";
import Icons from "../../utils/Icons";
import GlobalStyle from '../Styles';
export default class HealthScreen extends React.Component{
    render(){
        return(
            <View style={{margin:10}}>
               <Image source={Icons.DELIVERY} style={{marginLeft:5,width:70,height:60}}/>
               <View style={{flexDirection:'row',marginTop:-50,paddingLeft:80,justifyContent:'space-between'}}>
                   <Text style={GlobalStyle.textContainer}>Bookings</Text>
                   <Text style={GlobalStyle.textContainer}>1 day ago</Text>
                </View>
                <View style={{ flexDirection: 'row',marginTop:10,paddingLeft:80,justifyContent:'space-between'}}>
                      <Text style={{fontSize:17,color:'black',fontWeight:'700',}}>Health - Home Doctors</Text>  
                      <Image source={Icons.DIRECTION} style={{width:30,height:30}}/>   
                </View>
                
           </View>
           
        );
    }
}
