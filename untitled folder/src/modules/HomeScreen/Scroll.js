import * as React from 'react';
import {
  View,
  Animated,
  useWindowDimensions,
  Dimensions,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import Icons from '../../utils/Icons';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
export default class MenuItems extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'Register'},
      {key: 'Earn'},
      {key: 'Contacts'},
      {key: 'Preferences'},
      {key: 'Feedback'},
      {key: 'GIT Coins'},
      {key: 'Help'},
      {key: 'Join Our Team'},
    ],
  };
  getTabBarIcon = (props) => {
    const {route} = props
      if (route.key === 'Register') {
         return(
          //<Animated.View>
          <View style={ProfileStyle.InnerView}>
          <View style={ProfileStyle.InnerinnerView}>
            <Image style={ProfileStyle.Financeimg} source={Icons.REGISTER}/>
            <GradientText style={ProfileStyle.htext}>{StringOflanguage.hFinance}</GradientText>
          </View>
        </View>
        //</Animated.View>
        )
      } 
      else if(route.key=='Earn'){
        return(

          <View style={ProfileStyle.InnerView} >
            <View style={ProfileStyle.InnerinnerView}>
            <Image style={ProfileStyle.Customizeimg} source={Icons.EARN}/>
            <GradientText style={ProfileStyle.htext}>{StringOflanguage.hcustomize}</GradientText>
            </View>
          </View>

          )
      }
      else if(route.key=='Contacts'){
        return(
          <View style={ProfileStyle.InnerView}>
          <View style={ProfileStyle.InnerinnerView}>
            <Image style={ProfileStyle.csgsimg} source={Icons.CONTACT}/>
            <GradientText style={ProfileStyle.htext}>{StringOflanguage.hcontacts}</GradientText>
            </View>
            </View>
          )
      }
      else if(route.key=='Preferences'){
        return(
          <View style={ProfileStyle.InnerView}>
          <View style={ProfileStyle.InnerinnerView}>
          <Image style={ProfileStyle.csgsimg} source={Icons.PREFERENCES}/>
          <GradientText style={ProfileStyle.htext}>{StringOflanguage.hSettings}</GradientText>
          </View>
          </View>
         )
      }
      else if(route.key=='Feedback'){
        return(
          <View style={ProfileStyle.InnerView}>
          <View style={ProfileStyle.InnerinnerView}>
          <Image style={ProfileStyle.csgsimg} source={Icons.FEEDBACK}/>
          <GradientText style={ProfileStyle.htext}>{StringOflanguage.hsecuirty}</GradientText>
          </View>
          </View>
          )
      }
      else if(route.key=='GIT Coins'){
        return(

          <View style={ProfileStyle.InnerView}>
            <View style={ProfileStyle.InnerinnerView}>
            <Image style={ProfileStyle.csgsimg} source={Icons.GITCOINS}/>
            <GradientText style={ProfileStyle.htext}>{StringOflanguage.hGeneral}</GradientText>
            </View>
          </View>
          )
      }
      else if(route.key=='Help'){
        return(

          <View style={ProfileStyle.InnerView}>
            <View style={ProfileStyle.InnerinnerView}>
            <Image style={ProfileStyle.csgsimg} source={Icons.HELP}/>
            <GradientText style={ProfileStyle.htext}>{StringOflanguage.hGeneral}</GradientText>
            </View>
          </View>
          )
      }
      else if(route.key=='Join Our Team'){
        return(

          <View style={ProfileStyle.InnerView}>
            <View style={ProfileStyle.InnerinnerView}>
            <Image style={ProfileStyle.csgsimg} source={Icons.JOIN}/>
            <GradientText style={ProfileStyle.htext}>{StringOflanguage.hGeneral}</GradientText>
            </View>
          </View>
          )
      }
}
}


renderScene = ({route}) => {
  switch (route.key) {
    case 'Register':
      return <Index/>;


    case 'Earn':
      return <BottomSheetCustomizeScreen/>
    case 'Contacts':
      return <BottomSheetContactsScreen/>
    case 'Preferences':
      return <BottomSheetSettingsScreen/> 
    case 'Feedback':
      return <BottomSheetSecurityScreen/>
    case 'GIT Coins':
      return <BottomSheetGeneralScreen/>
    case 'Help':
      return <BottomSheetGeneralScreen/>
    case 'Join Our Team':
      return <BottomSheetGeneralScreen/>
    default:
      return null;
  }
};
render() {
    return (
      
      <TabView
                  
            navigationState={this.state}
            
            
            activeTintColor="#ffffff"
            inactiveColor="#ffffff"
            showsIndicator={false}
            onIndexChange={index => this.setState({index})}
        //    initialLayout={{height: 250, width: Dimensions.get('window').width}}
            renderTabBar={props =>
                 
                
                 <View>
                   <KeyboardAvoidingView>
                  <ScrollView
                    horizontal={true}

                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={false}> 
                  <TabBar
                  style={{backgroundColor:"#00000007",borderRadius:10,padding:10,elevation:0,shadowColor:"#000000",shadowOffset:{width:0,height:0}}}
                
                    {...props}
                    pressColor={'transparent'}
                    indicatorStyle={{ width:"0%"}}
                    pressOpacity={0}
                    //scrollEnabled
                    
                    
                    
                    
                    renderIcon={
                      props => this.getTabBarIcon(props)
                  }
                    tabStyle={styles.bubble}
                    labelStyle={styles.noLabel}
                />
                  </ScrollView> 
                 </KeyboardAvoidingView>
                </View>
                 
                
            }
            tabBarPosition={'top'}
            
        />
    );
}
const styles = StyleSheet.create({
    noLabel: {
        display: 'none',
        backgroundColor:"#000000"
        
        
    },
    bubble: {
        backgroundColor: '#FFFFFF',
        width:"20%",
        height:"5%",
        justifyContent:"center",
        alignItems:"center",  
        borderRadius:10,
        padding:25,
        
    },
    tabBarTitleContainer:{
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column"
  
    }
  })

