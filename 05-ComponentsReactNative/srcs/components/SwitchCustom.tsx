import React, { useContext } from 'react'
import { Switch } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props{
    isEnabled: boolean;
    toggleSwitch: () => void;
}
export const SwitchCustom = ({isEnabled, toggleSwitch}:Props) => {
    const {theme} = useContext(ThemeContext);
    return (
        <Switch
            trackColor={{ false: theme.colors.text, true: theme.dividerColor }}
            thumbColor={isEnabled ? theme.colors.primary : theme.colors.border}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}
