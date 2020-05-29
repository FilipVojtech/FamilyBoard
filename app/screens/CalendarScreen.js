import React, {useContext, useState} from 'react';
import {CalendarList, LocaleConfig} from 'react-native-calendars';
import {ThemeContext} from '../components/ThemesContext';
import {CalendarContext} from '../components/CalendarContext';
import Agenda from '../components/Agenda';

//Obrazovka Rutin
//TODO: Kalendář, kde rodiče mohou spravovat rutiny sobě a dětem
export default function CalendarScreen({navigation}) {
    const {mainColor} = useContext(ThemeContext);
    const {markedDates} = useContext(CalendarContext);
    const [selectedDay, setSelectedDay] = useState(new Date());

    /**
     * Kalendář
     * Po kliknutí na datum se vybere datum a přepne se výpis událostí
     * Po kliknutí na vybrané datum znovu se začne vytvářet událost
     */
    return (
        <React.Fragment>
            {/*<View style={{flexDirection: 'row'}}>*/}
            {/*    <Button title={'Dnes'} onPress={() => console.log('returning to today')}/>*/}
            {/*</View>*/}
            <CalendarList
                horizontal={true}
                pagingEnabled={true}
                firstDay={1}
                markedDates={{markedDates}.markedDates}
                theme={{
                    todayTextColor: mainColor,
                    dotColor: mainColor,
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                }}
                onDayPress={(day) => {
                    setSelectedDay(day.timestamp);
                    if (selectedDay === day.timestamp) {
                        navigation.navigate('AddEvent', day);
                    }
                }}
            />
            <Agenda selectedDay={selectedDay}/>
        </React.Fragment>
    );
}

//Překlad kalendáře
LocaleConfig.locales['cz'] = {
    monthNames: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
    monthNamesShort: ['Led', 'Úno', 'Bře', 'Dub', 'Kvě', 'Čvn', 'Čvc', 'Srp', 'Zář', 'Říj', 'Lis', 'Pro'],
    dayNames: ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'],
    dayNamesShort: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
    today: 'Dnes',
};
LocaleConfig.defaultLocale = 'cz';
