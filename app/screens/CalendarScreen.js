import React from 'react';
import {
    View,
    Button,
} from 'react-native';
import {CalendarList, LocaleConfig} from 'react-native-calendars';

//Obrazovka Rutin
//TODO: Kalendář, kde rodiče mohou spravovat rutiny sobě a dětem
export default function CalendarScreen() {

    LocaleConfig.locales['cz'] = {
        monthNames: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
        monthNamesShort: ['Led.', 'Úno.', 'Bře.', 'Dub.', 'Kvě.', 'Čvn.', 'Čvc.', 'Srp.', 'Zář.', 'Říj.', 'Lis.', 'Pro.'],
        dayNames: ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'],
        dayNamesShort: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
        today: 'Dnes',
    };
    LocaleConfig.defaultLocale = 'cz';

    return (
        <React.Fragment>
            <CalendarList
                horizontal={true}
                pagingEnabled={true}
                firstDay={1}
            />
            <View>
                <Button title={'Dnes'} onPress={() => console.log('returning to today')}/>
            </View>
        </React.Fragment>
    );
}
