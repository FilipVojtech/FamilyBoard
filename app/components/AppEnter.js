import React from 'react';
import {AuthProvider} from '../contexts/AuthProvider';
import Routes from './Routes';
import {ThemesContext} from '../contexts/ThemesContext';
import {Calendars} from './CalendarContext';

/**
 * Zde se podtupně aplikují všechny kontexty
 * Nakonec se renderuje samotná aplikace
 */
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
