import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../components/AuthProvider';

//Domovská obrazovka
//Domovkská obrazovka obsahuje stručný přehled z ostatních karet
export default function HomeScreen() {
    const {user} = useContext(AuthContext);
    const greets = ['Ahoj', 'Vítej', 'Dobrý den'];
    const quotes = [
        'Najdi si tři koníčky, které miluješ:\n' +
        'Jeden, díky kterému si vyděláš peníze.\n' +
        'Druhý, díky kterému budeš ve formě.\n' +
        'Třetí, díky kterému budeš kreativní.',
        'Chyby jsou důkazem toho, že se o něco snažíš.',
        'Co si myslíš o sobě ty, je mnohem důležitější než to, co si o tobě myslí ostatní.',
        'Dávej si cíle. Nemluv o nich. Začni je tiše plnit. A nakonec si pořádně zatleskej.',
        'Dávej si pozor na svá slova. Mohou být odpuštěna, ale ne zapomenuta.',
        'Dělat, co máš rád, znamená být svobodný.\n' +
        'Mít rád, co děláš, znamená být šťastný.',
        'Být šťastný neznamená, že je všechno perfektní. Znamená to, ses rozhodl užívat si života i přes všechny jeho nedokonalosti.',
        'Jediný limit jsi ty sám.',
        'Každý je génius, ale pokud budete posuzovat rybu podle její schopnosti vylézt na strom, bude celý svůj život žít s vědomím, že je neschopná.',
        'Konej dobro a dobro se ti vrátí.',
        'Na nic nečekej, život utíká rychleji, než si myslíš.',
        'Následuj své srdce, ale nezapomeň si s sebou vzít i svůj rozum.',
        'Nejlepší vzdělání, kterého můžeš dosáhnout, získáš díky cestování. Nic tě nenaučí víc, než když budeš objevovat svět a sbírat zážitky.',
        'Nejprve se tě budou ptát, proč to děláš. A potom se tě budou ptát, jak jsi to udělal.',
        'Někdy ti jeden den na novém místě dá víc než deset let života doma.',
        'Neočekávej nic a važ si všeho.',
        'Nepřestávej, dokud na sebe nebudeš hrdý.',
        'Pracuj, když ostatní spí. Uč se, když ostatní paří. Šetři, když ostatní utrácejí. Žij život, o kterém ostatní sní.',
        'Představivost je důležitější než znalosti.',
        'Přestaň čekat, až bude pátek, až bude léto nebo až se do tebe zamiluje. Šťastný můžeš být jen tehdy, když přestaneš čekat.',
        'Přítel je ten, před kým se nebojíš říct nahlas, cokoliv tě napadne.',
        'Šťastný je ten, kdo se raduje z ostatních a nikomu nic nezávidí',
        'Šťastný je ten, kdo žije ze dne na den, na nic si nestěžuje a je vděčný za každou maličkost.',
        'Svůj život můžeš jednoduše změnit tak, že se na něj začneš dívat z jiného úhlu.',
        'Teorie pravděpodobnosti: čím více přání máš, tím víc se ti jich splní. Nejdůležitější je nepřestat snít.',
        'V přístavu je loď vždy v bezpečí, ale to není její účel.',
        'Zeptej se sám sebe, jestli tě to, co děláš dnes, dovede tam, kde chceš být zítra.',
        'Žij jako horkovzdušný balón: zahoď vše, co nepotřebuješ, a vznášej se nad zemí.',
        'Život je lepší, když se směješ.',
        'Život je série tisíců malých zázraků. Všímej si jich',
    ];

    return (
        <View style={style.container}>
            <Text style={style.greet}>{greets[Math.floor(Math.random() * greets.length)]}, {user.name}</Text>
            <Text style={style.quote}>{quotes[Math.floor(Math.random() * quotes.length)]}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 10,
    },
    greet: {
        textAlignVertical: 'top',
        textAlign: 'center',
        fontSize: 30,
    },
    quote: {
        fontStyle: 'italic',
        textAlign: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
    },
});
