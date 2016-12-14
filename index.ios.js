import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class hebrewTestProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>width: 333</Text>
        <Text style={styles.welcome}>
וַֽיְהִ֗י כָּל־נֶ֛פֶשׁ יֹצְאֵ֥י יֶֽרֶךְ־יַעֲקֹ֖ב שִׁבְעִ֣ים נָ֑פֶשׁ וְיוֹסֵ֖ף הָיָ֥ה בְמִצְרָֽיִם׃
      </Text>

        <Text style={styles.instructions}>width: 334</Text>

        <Text style={styles.welcome2}>
וַֽיְהִ֗י כָּל־נֶ֛פֶשׁ יֹצְאֵ֥י יֶֽרֶךְ־יַעֲקֹ֖ב שִׁבְעִ֣ים נָ֑פֶשׁ וְיוֹסֵ֖ף הָיָ֥ה בְמִצְרָֽיִם׃
      </Text>



        <Text style={styles.instructions}>width: 333 -- No Cantillation marks</Text>
        <Text style={styles.welcome}>
וַיְהִי כָּל־נֶפֶשׁ יֹצְאֵי יֶרֶךְ־יַעֲקֹב שִׁבְעִים נָפֶשׁ וְיוֹסֵף הָיָה בְמִצְרָיִם׃
      </Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 36,
    margin:10,
    fontFamily: "Taamey Frank CLM",
    writingDirection: "rtl",
    textAlign: 'right',
    width:333,
  },
  welcome2: {
    fontSize: 36,
    margin:10,
    fontFamily: "Taamey Frank CLM",
    writingDirection: "rtl",
    textAlign: 'right',
    width:334,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('hebrewTestProject', () => hebrewTestProject);
