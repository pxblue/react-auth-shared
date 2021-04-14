/**
 * @packageDocumentation
 * @module AuthUIContextProvider
 */

import React from 'react';
import { AuthUIContextProviderProps } from './types';
import { AuthUIContext } from './context';

export const AuthUIContextProvider: React.FC<AuthUIContextProviderProps> = (props) => {
    // Extract the needed properties out
    // Context value will not change unless a sub function is changed
    // NOTE: When adding new props to AuthUIContextProviderProps be sure
    // to also add them here so the parameters are copied.
    const memoizedProps = React.useMemo(() => {
        const propsForContext: AuthUIContextProviderProps = {
            authActions: props.authActions,
            registrationActions: props.registrationActions,
            showSelfRegistration: props.showSelfRegistration,
            enableInviteRegistration: props.enableInviteRegistration,
            showContactSupport: props.showContactSupport,
            enableResetPassword: props.enableResetPassword,
            showRememberMe: props.showRememberMe,
            showCybersecurityBadge: props.showCybersecurityBadge,
            allowDebugMode: props.allowDebugMode,
            projectImage: props.projectImage,
            background: props.background,
            contactEmail: props.contactEmail,
            contactPhone: props.contactPhone,
            contactPhoneLink: props.contactPhoneLink,
            htmlEula: props.htmlEula,
            loginActions: props.loginActions,
            loginFooter: props.loginFooter,
            loginHeader: props.loginHeader,
            passwordRequirements: props.passwordRequirements,
            customAccountDetails: props.customAccountDetails,
            customRegistrationSuccessScreen: props.customRegistrationSuccessScreen,
        };

        return propsForContext;
    }, [
        props.allowDebugMode,
        props.authActions,
        props.background,
        props.contactEmail,
        props.contactPhone,
        props.contactPhoneLink,
        props.customAccountDetails,
        props.customRegistrationSuccessScreen,
        props.enableInviteRegistration,
        props.enableResetPassword,
        props.htmlEula,
        props.loginActions,
        props.loginFooter,
        props.loginHeader,
        props.passwordRequirements,
        props.projectImage,
        props.registrationActions,
        props.showContactSupport,
        props.showRememberMe,
        props.showCybersecurityBadge,
        props.showSelfRegistration,
    ]);

    return <AuthUIContext.Provider value={memoizedProps}>{props.children}</AuthUIContext.Provider>;
};
