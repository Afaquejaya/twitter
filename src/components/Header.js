import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class HeaderExample extends Component {
  render() {
    return (
      <Container>
        <Header  style={{backgroundColor:"#fff", elevation:0, searchBar: true}}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={{color:"#000"}}>Home</Title>
          </Body>
        </Header>
      </Container>
    );
  }
}
