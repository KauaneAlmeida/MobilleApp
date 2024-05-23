import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import styles from './style'
import ButtonComponent from '../../components/ButtonComponent'
import AuthContext from '../../contexts/Auth'


export default function Profile() {

    const { logout } = useContext(AuthContext)

    return (
        <SafeAreaView style={styles.conteiner}>
            <ButtonComponent label="Deslogar" click={logout} />
        </SafeAreaView>
    )
}