import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems:'flex-start',
        flex: 1,
        flexDirection: 'row',
        marginRight:16,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        borderRadius:10,
        paddingLeft:5,
        justifyContent: 'center',
        backgroundColor:'#1F9BF1',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
        color: '#FFFFFF',
    },
    photo: {
        height: 40,
        width: 40,
        marginRight:5,

    },
});


const AccountRow = ({name,email,image_url}) => (

    <View>
      <View style={styles.container}>
        <Image source={{ uri: image_url }} style={styles.photo} />
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {name}
            </Text>
            <Text style={styles.description}>
                {email}
            </Text>
        </View>
      </View>
    </View>
);

export default AccountRow;
