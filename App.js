import React from 'react';
import {AuthProvider} from './app/contexts/AuthProvider';
import {Languages} from "./app/contexts/Languages";
import {ThemesContext} from './app/contexts/ThemesContext';
import {Calendars} from './app/contexts/CalendarContext';
import Routes from './app/components/Routes';

export default function AppEnter() {
    return (
        <ThemesContext>
            <Languages>
                <AuthProvider>
                    <Calendars>
                        <Routes/>
                    </Calendars>
                </AuthProvider>
            </Languages>
        </ThemesContext>
    )
};
