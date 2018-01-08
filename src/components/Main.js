import React from 'react';
import { Body, Button, Content, Card, CardItem, Container, Fab, Footer, FooterTab, Header, Item, Input, Icon, Left, Right, Text, Tab, Tabs, Title, Thumbnail, TabHeading, ScrollableTab } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { PropTypes } from 'prop-types';
import NotificationsTab from '../NotificationsTab';
import MessagesTab from '../MessagesTab';
import HomeTab from '../HomeTab';
import SearchTab from '../SearchTab';

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
            <Header hasTabs style={styles.background}>
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
                    heading={ <TabHeading style={styles.background}>
                    <Icon name="home" style={styles.tabStyle} /></TabHeading> }>
                    <HomeTab />
                 </Tab>
                 <Tab heading={<TabHeading style={styles.background} ><Icon name="search" style={styles.tabStyle} /></TabHeading>}>
                    <SearchTab />
                 </Tab>
                 <Tab heading={ <TabHeading style={styles.background}><Icon name="notifications" style={styles.tabStyle}/></TabHeading>}>
                    <NotificationsTab />
                 </Tab>
                 <Tab heading={ <TabHeading style={styles.background}><Icon name="mail" style={styles.tabStyle} /></TabHeading> }>
                    <MessagesTab />
                 </Tab>
             </Tabs>

             <Fab style={{ backgroundColor: '#3BB9FF', marginBottom: 30 }} position='bottomRight'>
                <Icon name='create' />
             </Fab>

             <Footer style={{backgroundColor: 'white', height: 45}}>
                <FooterTab style={styles.background}>
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


const styles={
    background: {
      backgroundColor: 'white'
    },
    tabStyle: {
      color:'#3BB9FF'
    }
};
