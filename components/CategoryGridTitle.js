import { View, Pressable, Text } from "react-native";

const CategoryGridTitle = (title, color) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTitle;
