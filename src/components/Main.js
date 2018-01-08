import React, {Component} from 'react';
import { Body, Button, Content, Card, CardItem, Container, Fab, Footer, FooterTab, Header, Item, Input, Icon, Left, Right, Text, Tab, Tabs, Title, Thumbnail, TabHeading, ScrollableTab } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, Platform, View, ScrollView } from 'react-native';
import { PropTypes } from 'prop-types';
import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';

//Imports made to inflate Tabs
import NotificationsTab from '../NotificationsTab';
import MessagesTab from '../MessagesTab';
import HomeTab from '../HomeTab';
import SearchTab from '../SearchTab';
import MyDrawer from '../components/MyDrawer';

//Class for home screen which further inflates HomeTab
class HomeScreen extends React.Component{
 render() {
   return (
     <Container>
     <Fab style={{ backgroundColor: '#3BB9FF', marginBottom: 30 }} position='bottomRight'>
                <Icon name='create' />
     </Fab>

      <ScrollView>
      <HomeTab/>

      </ScrollView>

      <Footer style={{backgroundColor: 'white', height: 45}}>
                <FooterTab style={{backgroundColor: 'white'}}>
                    <Button>
                        <Text style={{fontSize: 12, color: '#3BB9FF', fontWeight: 'bold'}}> All</Text>
                    </Button>
                    <Button>
                        <Text style={{fontSize: 12, color: '#A9A9A9'}}> Mentions</Text>
                    </Button>
                </FooterTab>
                <Right>
                    <Icon style={{ marginRight: 10, color: '#3BB9FF' }} name='settings' />
                </Right>
              </Footer>
     </Container>
             );
        }
     }

//Tab Navigator which provides Header flexibility
const MainScreenNavigator = TabNavigator(
  {
    Home: { screen: HomeScreen,
      navigationOptions:{
      tabBarIcon:({tintColor}) => (
        <Icon name='home' style={styles.navStyle}/>
     ),
   }
     },
    Search: { screen: SearchTab,
                navigationOptions: {
                 headerTitle: <Input
                                   placeholder='Search Twitter'
                                   style={{width: '100%', backgroundColor:'#c0deed'}}/>,

                 tabBarIcon:({tintColor}) => (
                   <Icon name='search' style={styles.navStyle}/>

              ),
            },
     },
    Notifications: { screen: NotificationsTab,
      navigationOptions : {
          headerTitle: 'Notifications',
          tabBarIcon:({tintColor}) => (
              <Icon name='notifications' style={styles.navStyle} />
       ),
     },
     },
    Messages:{screen:MessagesTab,
      navigationOptions : {
          headerTitle: 'Messages',
          tabBarIcon:({tintColor}) => (
            <Icon name='mail' style={styles.navStyle}/>

       ),
     },
    }
  },
  {

   animationEnabled: true,
   tabBarOptions: {
      activeTintColor: '#3BB9FF',
      inactiveTintColor: '#3BB9FF',
      activeBackgroundColor:'#fff',
      inactiveBackgroundColor: '#fff',
      showIcon: true,
      showLabel:false,
      style: { backgroundColor: '#fff'},
    },
  }
);

//StackNavigator used to switch between tabs
  const Stack = StackNavigator({
       Home: {
          screen: MainScreenNavigator,
          navigationOptions:({navigation}) =>({
            title:'Home',
            headerLeft: <DrawerButton navigation={navigation} />,
            headerStyle: {
              backgroundColor: '#fff',
              elevation:0,
            },
       }),
    },
  });

// Drawer corner icon
  const DrawerButton=({navigation})=>(
      <Button transparent
              onPress={() => navigation.navigate("DrawerOpen")}
      >

      <Thumbnail small source={require('../images/icon.jpg')} style={{marginLeft: 10}} />
      </Button>
  );

//DrawerNavigator handles Drawer layout
  const RootDrawer = DrawerNavigator(
   {
     Home:{
       screen: Stack,
     }
   },
   {
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',

      contentComponent: props => <MyDrawer {...props} />

   }

       );

  const styles = StyleSheet.create({
      icon: {
          width: 25,
          height: 25,
      },

      navStyle: {
          color: '#3BB9FF'
      }
   });

export default RootDrawer;
