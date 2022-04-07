import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import styles from '../../ToDoApp/style'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather, selectWeather } from '../redux/features/weather/weatherSlice'
import { useAppDispatch } from '../redux/hooks'

export default function TodayWeather() {
    const dispatch = useDispatch()
    const weather = useSelector(selectWeather)

    const weatherStatus = useSelector((state) => state.weather.status)
    const error = useSelector((state) => state.weather.error)

    useEffect(() => {
        if (weatherStatus === 'idle') {
            dispatch(fetchWeather())
        }
    }, [weatherStatus, dispatch])

    let content

    if (weatherStatus === 'loading') {
        content = <Text >Loading...</Text>
    } else if (weatherStatus === 'succeeded') {
        // Sort posts in reverse chronological order by datetime string
        content = <Text >{weather.weather.weather[0].main} , {weather.weather.weather[0].description}, 
        temp: {weather.weather.main.temp}, windSpeed: {weather.weather.wind.speed}</Text>

    } else if (weatherStatus === 'failed') {
        content = <Text>{error}</Text>
    }

    console.log("Weather status: ", weatherStatus)
    // useEffect(() => {
    //     if (weatherStatus === 'idle') {
    //         dispatch(fetchWeather())
    //     }
    // }, [weatherStatus, dispatch])
    return (
        <View style={styles.item}>
            <Text style={styles.sectionTitle}>Today</Text>
            {content}
        </View>
    )
}