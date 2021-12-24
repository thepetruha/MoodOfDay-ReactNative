import React from 'react'
import {
    SafeAreaView,
    Text,
    View,
    Image
} from 'react-native';
import { Audio } from 'expo-av';
import Carousel from 'react-native-snap-carousel';
import styles from './ListSoundStyle';
import Header from './Header/Header'

export function PlaySoundAudio({ req }) {
    const [sound, setSound] = React.useState();
    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(req);
        setSound(sound);

        await sound.playAsync();
    }

    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    React.useEffect(() => {
        playSound()
    }, [])

    return (<View></View>);
}

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            next: false,
            activeIndex: 0,
            carouselItems: [
                {
                    id: 1,
                    title: "Item 1",
                    text: "Text 1",
                    sound: require("../assets/sound1.mp3"),
                    img: require("../assets/img/img1.jpg")
                },
                {
                    id: 2,
                    title: "Item 2",
                    text: "Text 2",
                    sound: require("../assets/sound2.mp3"),
                    img: require("../assets/img/img2.jpg")
                },
                {
                    id: 3,
                    title: "Item 3",
                    text: "Text 3",
                    sound: require("../assets/sound3.mp3"),
                    img: require("../assets/img/img3.jpg")
                },
                {
                    id: 4,
                    title: "Item 4",
                    text: "Text 4",
                    sound: require("../assets/sound4.mp3"),
                    img: require("../assets/img/img4.jpg")
                },
                {
                    id: 5,
                    title: "Item 5",
                    text: "Text 5",
                    sound: require("../assets/sound5.mp3"),
                    img: require("../assets/img/img5.jpg")
                },
            ]
        }
    }

    _renderItem({ item, index }) {
        return (
            <View style={styles.itemList}>
                {/* <View style={styles.bluerIMG}>
                    <Text style={{fontSize: 10}}>{item.title}</Text>
                    <Text>{item.text}</Text>
                </View> */}
                <Image style={styles.img} source={item.img} />
            </View>
        )
    }

    render() {
        const { carouselItems, activeIndex } = this.state;
        const audioComponent = carouselItems.map((obj, index) => {
            if (index === activeIndex) {
                return <PlaySoundAudio req={obj.sound} />
            }
        })

        return (
            <SafeAreaView style={styles.contentList}>
                <Text style={styles.titleAppText}>Mood of Day</Text>
                <View style={styles.contentCarousel}>
                    {audioComponent}
                    <Carousel
                        layout={"default"}
                        ref={ref => carouselRef = ref}
                        data={this.state.carouselItems}
                        renderItem={this._renderItem}
                        sliderWidth={400}
                        itemWidth={300}
                        onSnapToItem={(index) => { this.setState({ activeIndex: index }); }}
                    />
                </View>
                <Header />
            </SafeAreaView>
        );
    }
}