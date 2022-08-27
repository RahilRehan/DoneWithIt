import React from 'react';
import { FlatList, Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const messages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/mosh.jpg")
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/mosh.jpg")
    },
    {
        id: 3,
        title: "T3",
        description: "D3",
        image: require("../assets/mosh.jpg")
    }
]

function Messages() {
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) => 
                    <ListItem 
                        image={item.image} 
                        title={item.title} 
                        subTitle={item.description} 
                        onPress={() => console.log("Message selected", item)}
                    />
                }
                ItemSeparatorComponent={() => 
                    <ListItemSeparator/>
                }
            />
        </Screen>
    );
}

export default Messages;