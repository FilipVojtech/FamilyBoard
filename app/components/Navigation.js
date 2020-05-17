import * as React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

interface AppTabsProps {
}

const Tabs = createBottomTabNavigator();

function Home() {
    return (
        <Text>
            Home
        </Text>
    );
}

function Notes() {
    return (
        <Text>Notes</Text>
    );
}

export const AppTabs: React.FC = ({}) => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name='Home' component={Home}/>
            <Tabs.Screen name='Notes' component={Notes}/>
            {/*<Tabs.Screen name='Calendar'/>*/}
            {/*<Tabs.Screen name='Messages'/>*/}
            {/*<Tabs.Screen name='User'/>*/}
        </Tabs.Navigator>
    );
};
