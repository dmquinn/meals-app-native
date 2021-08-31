import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummyData";
const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  const handleClick = () => {
    props.navigation.navigate({ routeName: "MealDetails" });
  };
  const handleBack = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.Categoriesscreen}>
      <Text>{selectedCategory.title}</Text>
      <Button title="Go to Details" onPress={handleClick}></Button>
      <Button title="Go Back" onPress={handleBack}></Button>
    </View>
  );
};
CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
    headerStyle: { backgroundColor: "#66b2b2" },
    headerTintColor: "white",
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoryMealsScreen;
