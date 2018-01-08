import React, { Component } from 'react';
import { Container, View, Header,Item,Icon,Input,Button, Text} from 'native-base';

class SearchTab extends Component  {
render() {

    return (
      <Container>
        <Item style={{backgroundColor: '#3BB9FF', width:250, alignSelf: 'center'}}>
          <Input placeholder="Search Twitter" />
        </Item>
      </Container>

    );
  }
}
export default SearchTab;
