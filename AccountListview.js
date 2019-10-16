import React from 'react';
import { View, ListView, FlatList, StyleSheet, Text } from 'react-native';
import AccountRow from './AccountRow';

const AccountListview = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => <AccountRow
                    name={item.name}
                    email={item.email}
                    image_url={item.image_url}
                />}
            />

    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AccountListview;
