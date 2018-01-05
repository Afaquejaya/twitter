import React from 'react';
import { Body, Button, Content, Card, CardItem, Container, Fab, Footer, FooterTab, Header, Item, Input, Icon, Left, Right, Text, Tab, Tabs, Title, Thumbnail, TabHeading, ScrollableTab } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { PropTypes } from 'prop-types';

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
            <Header hasTabs style={{backgroundColor: "white"}}>
                <Left>
                    <TouchableOpacity onPress={this.context.drawer.open}>
                        <Thumbnail source={require("../images/icon.jpg")} />
                    </TouchableOpacity>
                </Left>
            <Body>
                <Title style={{color: "black", alignContent: 'flex-start'}} >Home</Title>
            </Body>
            <Right/>
            </Header>
        </View>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: '#3BB9FF', borderBottomWidth: 0 }}>
        <Tab heading={<TabHeading style={{backgroundColor:'white'}}>
        <Icon name="home" style={{color:'#3BB9FF'}} /></TabHeading> }>
                 </Tab>
                 <Tab heading={ <TabHeading style={{backgroundColor:'white'}} ><Icon name="search" style={{color:'#3BB9FF'}} /></TabHeading>}>
                 </Tab>
                 <Tab heading={ <TabHeading style={{backgroundColor:'white'}}><Icon name="notifications" style={{color:'#3BB9FF'}}/></TabHeading>}>
                 </Tab>
                 <Tab heading={ <TabHeading style={{backgroundColor:'white'}}><Icon name="mail" style={{color:'#3BB9FF'}} /></TabHeading> }>
                 </Tab>
             </Tabs>
         </Container>
    );
  }





}
