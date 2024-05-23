import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import styles from "./style"

export default function ButtonComponent({label, click}: { label: any, click: any }) {
  return (
    <TouchableOpacity style={styles.bnt} onPress={click}>
        <Text style={styles.textBnt}>{label}</Text>
    </TouchableOpacity>
  )
}