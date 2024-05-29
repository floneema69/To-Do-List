import React from 'react';
import {View} from 'react-native';
import Supression from './Supression';

const List = ({ data, removeItem , modifItem}) => {
    return (
        <View>
            {data.map((item, index) => (
                <Supression key={index} item={item} removeItem={() => removeItem(index)} modifItem={(newValue) => modifItem(index, newValue)} />
            ))}
        </View>
    );
};

export default List;