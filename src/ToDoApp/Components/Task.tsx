import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../style';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={!props.isCompleted ? styles.itemText: styles.itemTextComplete}>{props.text}</Text>
            </View>
            <TouchableOpacity onPress={() => props.removeTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>Remove</Text>
                    </View>
            </TouchableOpacity>
            {/* <View style={styles.circular}></View> */}
        </View>
    )
}
export default Task;