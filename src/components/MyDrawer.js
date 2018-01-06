import React from 'react';
import { Body, Card, CardItem, Content, Container, Deckswiper, Footer, Header, Icon, ListItem, List, Left, Right, Text, Thumbnail, View } from 'native-base';
import { Image, StatusBar, Settings } from 'react-native';
import { StackNavigator } from 'react-navigation';
// Our list to load items in drawer
const list = [{name: "Profile",icon: 'person'},{name: "Lists", icon: 'list-box'},{name: "Moments",icon: 'flash'}, {name: 'Highlights',icon:'albums'} ];

export default class MyDrawer extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                        {/* Top part of drawer*/}
                            <View>
                                <Thumbnail source={require('../images/icon.jpg')} />
                                <Text style={{ fontWeight: 'bold' }}> Paras Sidhu   <Icon name="arrow-dropdown" style={{ color: '#3BB9FF', alignContent: 'center' }} /></Text>
                                <Text note>@parassidhu1</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text>xyz Following </Text>
                                <Text>abc Followers</Text>
                            </View>
                            </View>
                        </CardItem>

                        {/*Main middle part loaded using constant defined at line 6*/}
                        <CardItem style={{ elevation: 1 }}>
                          <List
                            dataArray={list}
                            renderRow={data => {
                              return (
                                <ListItem
                                  button noborder icon>
                                    <Left>
                                      <Icon name={data.icon} />
                                    </Left>
                                    <Body>
                                      <Text>{data.name}</Text>
                                    </Body>
                                </ListItem>
                              );
                          }}
                          />
                        </CardItem>

                      {/* Bottom part of drawer (above footer)*/}
                      <CardItem>
                            <List>
                                <ListItem button noborder>
                                    <Text>Settings and Privacy</Text>
                                </ListItem>

                                <ListItem button noborder>
                                    <Text>Help Center</Text>
                                </ListItem>
                            </List>
                      </CardItem>
                  </Card>
              </Content>

              <Footer style={{ backgroundColor: 'white' }}>
                  <Left>
                      <Icon style={{ marginLeft: 20, color: '#3BB9FF' }} name='moon' />
                  </Left>
                  <Right>
                      <Icon style={{ marginRight: 15, color: '#3BB9FF' }} name='qr-scanner' />
                  </Right>
              </Footer>
          </Container>
        );
    }
}
