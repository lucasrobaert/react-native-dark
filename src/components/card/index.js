import React from 'react';
import {View, Text} from 'react-native';
import {Card, ImageView} from './styles';

const CardComponent = () => {
  return (
    <Card>
      <ImageView
        // type={type}
        source={require('../../assets/img.jpeg')}
        resizeMode="cover"
      />
    </Card>
  );
};

export default CardComponent;
