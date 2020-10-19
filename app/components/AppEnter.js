import React from 'react';
import {AuthProvider} from '../contexts/AuthProvider';
import Routes from './Routes';
import {Languages} from "../contexts/Languages";
import {ThemesContext} from '../contexts/ThemesContext';
import {Calendars} from '../contexts/CalendarContext';

/**
 * Zde se podtupně aplikují všechny kontexty
 * Nakonec se renderuje samotná aplikace
 */
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
    );
};
