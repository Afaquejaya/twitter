import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {Content} from 'native-base';
import CardDetail from './components/CardDetail';

const HomeTab = () => {
  return (
    <Content>
      <CardDetail />
      <CardDetail />
      <CardDetail />
      <CardDetail />
    </Content>
    );
  };

export default HomeTab;
