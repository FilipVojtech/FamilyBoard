import React from 'react';
import {AuthProvider} from './AuthProvider';
import Routes from './Routes';
import {ThemesContext} from './ThemesContext';
import {Calendars} from './CalendarContext';

export default function AppEnter() {
    return (
        <ThemesContext>
            <AuthProvider>
                <Calendars>
                    <Routes/>
                </Calendars>
            </AuthProvider>
        </ThemesContext>
    );
};
