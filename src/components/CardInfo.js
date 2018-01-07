import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Icon } from 'native-base';

//Receives props and return the view
const CardInfo = (props) => {
    CardInfo.PropTypes = {
      name: PropTypes.string,
      id: PropTypes.string,
      time: PropTypes.string,
      text: PropTypes.string
    };
    const { name, id, time, text } = props;

    return (
      <View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.titleStyle}>{name}</Text>
          <Text note>  {id} </Text>
          <Text note>  {time}</Text>
          <Icon name='arrow-dropdown' style={{marginLeft:15}} />
        </View>

      <Text style={styles.textStyle}>{text}</Text>
      </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 14,
    fontFamily: 'Cochin'
  },
  titleStyle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
};

export default CardInfo;
