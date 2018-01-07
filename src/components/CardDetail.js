import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Left, Thumbnail, Body, Icon, Button, CardItem } from 'native-base';
import Card from './Card';
import CardInfo from './CardInfo';

//Contains information about an individual card
//Using comments inside the tags caused errors
/*Was inteding to use CardSection instead of CardItem but had some issues*/
const CardDetail = () => {
  return (
    <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../images/modi.jpg')} style={{alignSelf:'flex-start'}} />
            <Body style={{flexDirection:'row'}}>

            <CardInfo
                name="Narendra Modi"
                id="@narendramodi"
                time="1h"
                text="I bow to the great Savitribai Phule on her Jayanti. She gave utmost importance to education and social reform. We are deeply guided by her ideals and are working tirelessly towards fulfilling her vision." />
            </Body>
          </Left>
        </CardItem>
        {/*Card Image*/}
        <CardItem cardBody>
            <Image source={require('../images/timeline.jpg')} style={{height: 220, width: 400, alignSelf: 'center'}}/>
        </CardItem>

        {/*Retweet, Like etc. buttons*/}
        <CardItem style={{ justifyContent: 'center' }}>

              <Button small iconLeft transparent>
                <Icon name="chatboxes" />
                <Text style={styles.textStyle }>4,283</Text>
              </Button>

            <Button small iconLeft transparent>
               <Icon name="repeat" />
               <Text style={styles.textStyle }>1M</Text>
             </Button>

              <Button small iconLeft transparent>
                <Icon name="heart" />
                <Text style={styles.textStyle }>5.2M</Text>
              </Button>

              <Button default small transparent>
                <Icon name="mail" />
                <Text style={styles.textStyle }>5,987</Text>
                </Button>
          </CardItem>
        </Card>

    );
  };

    const styles = {
         textStyle: {
           paddingLeft: 10,
           color: '#3BB9FF'
         }

    };

export default CardDetail;
