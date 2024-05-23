import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Platform, Linking, TextInput, ActivityIndicator, FlatList } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from './style'
import Feather from 'react-native-vector-icons/Feather';
import AuthContext from '../../contexts/Auth';
import axios from 'axios';



export default function Home() {
    const [loading, setLoading] = useState(false)
    const { user } = useContext(AuthContext)
    const [treinos, setTreinos] = useState({})

    const handleCheckWork = () => {

        setLoading(true)

        axios.post("http://localhost:80/login/", {
            user
        })
            .then((res) => {

                setLoading(false)

                if (res) {
                    setTreinos(res)
                }

                return

            })
            .catch((error) => {
                console.log(error)
            })


    }

    useEffect(() => {
        handleCheckWork()
    }, [])

    return (
        <SafeAreaView style={styles.conteiner}>
            {treinos ? 
            <View style={styles.alertConteiner}>
                <Feather name='alert-triangle' size={70} color="red" />
                <Text style={styles.txtAlert}>NENHUM TREINO DISPONIVEL</Text>
            </View> 
            :
            <View>
                <FlatList
                    data={[{ title: 'Title Text', key: 'item1' }]}
                    renderItem={({ item, index, separators }) => (
                        <View>
                            <Text>{item.title}</Text>
                        </View>
                    )}
                />
            </View>
            }
        </SafeAreaView>
    )
}