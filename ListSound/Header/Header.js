import React, { useState } from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from './HeaderStyle'

export default function Header () {
    return (
        <View style={styles.titleAppBox}>
            <View style={styles.boxProfile}>
                <View style={styles.profileImg}></View>
                <Text style={styles.textProfile}>username</Text>
            </View>
        </View>
    )
}