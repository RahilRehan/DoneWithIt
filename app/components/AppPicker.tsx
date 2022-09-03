import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Platform, Modal, Button } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from '../config/styles'
import AppText from './AppText'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Screen from './Screen'

interface Props {
	icon: any
	[x: string]: any
	placeholder: string
}

const AppPicker: React.FC<Props> = ({ icon, placeholder, ...rest }) => {

    const [modalVisible, setModalVisible] = useState(false)

	return (
        <>

        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={styles.container}>
                {icon && (
                    <MaterialCommunityIcons
                        style={styles.icon}
                        name={icon}
                        size={20}
                        color="grey"
                    />
                )}
                <AppText style={styles.text}>{placeholder}</AppText>
                <MaterialCommunityIcons
                    name="chevron-down"
                    size={20}
                    color="grey"
                />
            </View>
        </TouchableWithoutFeedback>
        
        <Modal visible={modalVisible} animationType="slide">
            <Screen>
                <Button title="Close" onPress={() => setModalVisible(false)}/>
            </Screen>
        </Modal>

        </>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.light,
		borderRadius: 25,
		flexDirection: 'row',
		width: '100%',
		padding: 15,
		marginVertical: 10,
	},
	icon: {
		marginRight: 10,
	},
	text: {
		flex: 1,
	},
})

export default AppPicker
