import React, { useState } from 'react';

import { SafeAreaView, StyleSheet, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';

import EventCalendar from 'react-native-events-calendar';

import { Card } from 'react-native-paper';


let { width } = Dimensions.get('window');

const App = () => {
  const [start, setStart] = useState('')

  const [end, setEnd] = useState('')

  const [title, setTitle] = useState('')

  const [summary, setSummary] = useState('')

  const [events, setEvents] = useState([
    {
      start: '2022-09-19 08:00:00',
      end: '2022-09-19 10:00:00',
      title: 'Business Meeting',
      summary: 'Project Outlook',
    },

     {
      start: '2022-09-19 11:00:00',
      end: '2022-09-19 13:00:00',
      title: 'Lee-Anne Birthday Party',
      summary: 'Horshoe Hotel',
    },

    {
      start: '2022-09-22 10:00:00',
      end: '2020-09-22 12:00:00',
      title: 'Important UI/UX meeting',
      summary: 'Call to every one',
    },
    {
      start: '2022-09-20 13:30:00',
      end: '2020-01-02 15:30:00',
      title: 'Client Meeting',
      summary: 'Wishes for project',
    },
    {
      start: '2022-10-01 08:30:00',
      end: '2020-10-01 17:00:00',
      title: 'Paper Work at Office',
      summary: 'Time Management',
    },
    {
      start: '2022-09-27 10:10:00',
      end: '2020-02-04 00:00:00',
      title: 'New Product Launch',
      summary: 'Merchandise for Business',
    },
  ]);


const addTask = (() =>{
    setEvents((events) => [...events, {start:start, end:end, title:title, summary:summary}])
    console.log(events)
  })


  const eventClicked = (event) => {
    alert(JSON.stringify(event));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>

        <TextInput placeholder='Start date' onChangeText={(task) => setStart(task)}></TextInput>

     <TextInput placeholder='End date' onChangeText={(task) => setEnd(task)}></TextInput>

     <TextInput placeholder='Title' onChangeText={(task) => setTitle(task)}></TextInput>

     <TextInput placeholder='Summary' onChangeText={(task) => setSummary(task)}></TextInput>

    <TouchableOpacity onPress={addTask}>Add</TouchableOpacity>

        <EventCalendar
          eventTapped={eventClicked}
          events={events}
          width={width}
          size={60}
          scrollToFirst
        />
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});