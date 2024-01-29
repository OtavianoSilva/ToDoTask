import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import CategoryModal from '../CategoryModal';
import { styles } from "./styles";

const data = [
    { label: 'Sports', value: '1' },
    { label: 'School', value: '2' },
    { label: 'Mobile Dev', value: '3' },
    { label: 'Life', value: '4' },
    { label: 'Dog', value: '5' },
];

export default function CategoryDropdown() {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    Select Category:
                </Text>
            )
        }
        return null;
    };

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.title}>Category: </Text>
                <CategoryModal />
            </View>
            <View style={styles.bottomView}>
                {renderLabel()}
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select item' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                    renderLeftIcon={() => (
                        <AntDesign
                            style={styles.icon}
                            color={isFocus ? 'blue' : 'black'}
                            name="Safety"
                            size={20}
                        />
                    )}
                />
            </View>
        </View>
    );
};
