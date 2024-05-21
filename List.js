import React from 'react';
import {View} from 'react-native';
import Supression from './Supression';

const List = ({ data, removeItem }) => {
    return (
        <View>
            {data.map((item, index) => (
                <Supression key={index} item={item} removeItem={() => removeItem(index)} />
            ))}
        </View>
    );
};

export default List;