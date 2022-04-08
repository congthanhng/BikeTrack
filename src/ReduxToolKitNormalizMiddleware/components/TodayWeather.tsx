import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import styles from "../../ToDoApp/style";
import { useDispatch, useSelector } from "react-redux";
import {
  bgChanged,
  fetchWeather,
  selectBgGreen,
  selectError,
  selectStatus,
  selectWeather,
} from "../redux/features/weather/weatherSlice";
import { useAppDispatch } from "../redux/hooks";

export default function TodayWeather() {
  const dispatch = useAppDispatch();
  const weather = useSelector(selectWeather);
  const weatherStatus = useSelector(selectStatus);
  const error = useSelector(selectError);
  const bgGreen = useSelector(selectBgGreen);

  useEffect(() => {
    if (weatherStatus === "idle") {
      dispatch(fetchWeather());
    }
  }, [weatherStatus, dispatch]);

  let content;

  if (weatherStatus === "loading") {
    content = <Text>Loading...</Text>;
  } else if (weatherStatus === "succeeded") {
    // Sort posts in reverse chronological order by datetime string
    content = (
      <Text>
        {weather.weather[0].main} , {weather.weather[0].description}, temp:{" "}
        {weather.main.temp}, windSpeed: {weather.wind.speed}
      </Text>
    );
  } else if (weatherStatus === "failed") {
    content = <Text>{error}</Text>;
  }

//   console.log("Weather status: ", weatherStatus);
//   console.log("bgGreen ", bgGreen);
  return (
    <TouchableOpacity onPress={() => dispatch(bgChanged())}>
      <View style={bgGreen ? styles.itemGreen : styles.item}>
        <Text style={styles.sectionTitle}>Today</Text>
        {content}
      </View>
    </TouchableOpacity>
  );
}
