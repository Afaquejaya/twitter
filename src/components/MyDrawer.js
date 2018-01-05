import React from 'react';
import { Body, Card, CardItem, Content, Container, Deckswiper, Footer, Header, Icon, ListItem, List, Left, Right, Text, Thumbnail, View } from 'native-base';
import { Image, StatusBar, Settings } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class MyDrawer extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <View>
                                <Thumbnail source={ require('../images/icon.jpg')} />
                                <Text style={{ fontWeight: 'bold'}}> Paras Sidhu<Icon name="arrow-dropdown" style={{ color: '#3BB9FF' }} /></Text>
                                <Text note>@parassidhu1</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text>xyz Following</Text>
                                <Text>abc Followers</Text>
                            </View>
                            </View>
                        </CardItem>

                        <CardItem style={{ elevation: 2 }} >
                          <List>
                              <ListItem button noborder icon>
                                <Left>
                                    <Icon name='person' style={style.iconStyle} />
                                        <Text>Profile</Text>
                                    </Left>
                                </ListItem>

                                <ListItem button noborder icon>
                                    <Left>
                                        <Icon name='list-box' style={style.iconStyle} />
                                            <Text>Lists</Text>
                                    </Left>
                                </ListItem>

                                <ListItem button noborder icon>
                                    <Left>
                                        <Icon name='flash' style={style.iconStyle} />
                                            <Text>Flash</Text>
                                    </Left>
                                </ListItem>

                                <ListItem button noborder icon>
                                    <Left>
                                        <Icon name='albums' style={style.iconStyle} />
                                            <Text>Albums</Text>
                                    </Left>
                                </ListItem>
                          </List>
                      </CardItem>

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

const style = {
  iconStyle: {
    color: '#3BB9FF'
  }
};
