import React, {useContext} from 'react';
import {CalendarList, LocaleConfig} from 'react-native-calendars';
import {ThemeContext} from '../components/ThemesContext';
import {CalendarContext} from '../components/CalendarContext';

//Obrazovka Rutin
//TODO: Kalendář, kde rodiče mohou spravovat rutiny sobě a dětem
export default function CalendarScreen({navigation}) {
    const {mainColor} = useContext(ThemeContext);
    const {events, markedDates} = useContext(CalendarContext);

    LocaleConfig.locales['cz'] = {
        monthNames: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
        monthNamesShort: ['Led', 'Úno', 'Bře', 'Dub', 'Kvě', 'Čvn', 'Čvc', 'Srp', 'Zář', 'Říj', 'Lis', 'Pro'],
        dayNames: ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'],
        dayNamesShort: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
        today: 'Dnes',
    };
    LocaleConfig.defaultLocale = 'cz';

    console.log();
    console.log(markedDates);
    console.log(...markedDates);

    return (
        <React.Fragment>
            {/*<View style={{flexDirection: 'row'}}>*/}
            {/*    <Button title={'Dnes'} onPress={() => console.log('returning to today')}/>*/}
            {/*</View>*/}
            <CalendarList
                horizontal={true}
                pagingEnabled={true}
                firstDay={1}
                markedDates={markedDates}
                theme={{
                    todayTextColor: mainColor,
                    dotColor: mainColor,
                }}
                onDayPress={(day) => {
                    navigation.navigate('AddEvent', day);
                }}
            />
        </React.Fragment>
    );
}
