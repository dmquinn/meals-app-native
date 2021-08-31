import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MealDetailsScreen = (props) => {
  const handlePress = () => {
    props.navigation.popToTop();
  };
  return (
    <View style={styles.Categoriesscreen}>
      <Text>Categories go Here</Text>
      <Button title="Back to Caregories" onPress={handlePress}></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MealDetailsScreen;
