import React from 'react';
import { Body, Button, Content, Card, CardItem, Container, Fab, Footer, FooterTab, Header, Item, Input, Icon, Left, Right, Text, Tab, Tabs, Title, Thumbnail, TabHeading, ScrollableTab } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { PropTypes } from 'prop-types';
import NotificationsTab from '../NotificationsTab';
import MessagesTab from '../MessagesTab';
import HomeTab from '../HomeTab';

export default class Main extends React.Component {

  static contextTypes = {
      drawer: PropTypes.object.isRequired
  };

  constructor() {
      super();
      this.state = {
        fontLoaded: false
      };
  }

  render() {
    return (
      <Container>
        <View>
            <Header hasTabs style={{ backgroundColor: 'white' }}>
                <Left>
                    <TouchableOpacity onPress={this.context.drawer.open}>
                        <Thumbnail small source={require('../images/icon.jpg')} />
                    </TouchableOpacity>
                </Left>
            <Body>
                <Title style={{ color: 'black', alignContent: 'flex-start' }} >Home</Title>
            </Body>
            <Right />
            </Header>
        </View>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: '#3BB9FF', borderBottomWidth: 0 }}>
                <Tab
                    heading={ <TabHeading style={{backgroundColor:'white' }}>
                    <Icon name="home" style={{color:'#3BB9FF'}} /></TabHeading> }>
                    <HomeTab />
                 </Tab>
                 <Tab heading={<TabHeading style={{ backgroundColor: 'white'}} ><Icon name="search" style={{color:'#3BB9FF'}} /></TabHeading>}>
                 </Tab>
                 <Tab heading={ <TabHeading style={{backgroundColor:'white'}}><Icon name="notifications" style={{color:'#3BB9FF'}}/></TabHeading>}>
                    <NotificationsTab />
                 </Tab>
                 <Tab heading={ <TabHeading style={{backgroundColor:'white'}}><Icon name="mail" style={{color:'#3BB9FF'}} /></TabHeading> }>
                    <MessagesTab />
                 </Tab>
             </Tabs>

             <Fab style={{ backgroundColor: '#3BB9FF', marginBottom: 30 }} position='bottomRight'>
                <Icon name='create' />
             </Fab>

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
