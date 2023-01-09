import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import TimeTableView from '../common/components/TimeTable/TimeTableView';
import Color from '../constants/Colors'
import {genTimeBlock} from '../common/components/utils';







export default function TimeTable (props) {

  const numOfDays= 7
  const pivotDate = genTimeBlock('mon')

  const {periods} = props


 const scrollViewRef = (ref) => {
    // this.timetableRef = ref;
  };


    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <TimeTableView
            scrollViewRef={scrollViewRef}
            events={periods}
            pivotTime={8}
            pivotEndTime={18}
            pivotDate={pivotDate}
            numberOfDays={numOfDays}
            onEventPress={props.handlePeriodChange}
            headerStyle={styles.headerStyle}
            formatDateHeader="dd"
            locale="en"
          />
        </View>
      </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Color.primary
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
});