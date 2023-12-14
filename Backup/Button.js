import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

export default function Button(props) {


    const buttonFill = props.type.type === 'add' ? { title: "Add to watchlist", text: '+' } : { title: "Remove from watchlist", text: '-' };
    const transferClick = () => { props.onClick() };

    return (
        <Text className="plusminus" value={props.id} title={buttonFill.title} onClick={transferClick}>{buttonFill.text}</Text>
    )
}  