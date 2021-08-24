import React, { createContext, useEffect, useState } from 'react';
import { Platform, AppState } from 'react-native';
import { PERMISSIONS, PermissionStatus, request, check, openSettings } from 'react-native-permissions';


export interface PermissionsState{
    locationStatus: PermissionStatus
}

export const permissionInitState: PermissionsState = {
    locationStatus: 'unavailable',
}

type PermissionsContextProps = {
    permissions: PermissionsState;
    askLocationsPermission: () => void;
    checkLocationsPermission: () => void;
}

export const PermissionsContext = createContext({} as PermissionsContextProps); // TODO: pendiente definir que debe exportar

export const PermissionsProvider = ({children}: any) => {

    const [permissions, setPermissions] = useState(permissionInitState);

    useEffect(() => {
        AppState.addEventListener('change', state => {
            if(state !== 'active') return;
            checkLocationsPermission();
        });
        return () => {
            AppState.removeEventListener('change', state => {

            })
        }
    }, [])

    const askLocationsPermission = async() => {
        let permissionStatus: PermissionStatus;
        if (Platform.OS === 'ios') {
            // permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        }else{
            // permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        if(permissionStatus === 'blocked') openSettings();
        setPermissions({
            ...permissions,
            locationStatus:permissionStatus
        })
    }
    const checkLocationsPermission = async() => {
        let permissionStatus: PermissionStatus;
        if (Platform.OS === 'ios') {
            // permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        }else{
            // permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }
        setPermissions({
            ...permissions,
            locationStatus:permissionStatus
        })
    }

    return (
        <PermissionsContext.Provider value={{
            permissions,
            askLocationsPermission,
            checkLocationsPermission,
        }}>
            {children}
        </PermissionsContext.Provider>
    )

}