import React from "react";

import {
  View,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import COLORS from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const AddButton = ({opened, toggleOpened}) => {
  const navigation = useNavigation();
  const animation = React.useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    toggleOpened();
    navigation.navigate('Carte'); 
  };

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: opened ? 1 : 0,
      duration: 300,
      friction: 2,
      useNativeDriver: false,
    }).start();
  }, [opened, animation]);

  const opacity = {
    opacity: animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1],
    }),
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity>

          <Animated.View
            style={[
              styles.item,
              opacity,
              {
                transform: [
                  {
                    translateX: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -60],
                    }),
                  },
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -50],
                    }),
                  },
                ],
              },
            ]}>
            <Image
              source={require("../../../../assets/images/Home.png")}
              resizeMode="contain"
              style={styles.itemIcon}
            />
          </Animated.View>

        </TouchableOpacity>

        <TouchableOpacity  onPress={handlePress}>
          <Animated.View
            style={[
              styles.item,
              opacity,
              {
                transform: [
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -100],
                    }),
                  },
                ],
              },
            ]}>
            <Image
              source={require("../../../../assets/images/map-marker-radius-outline.png")}
              resizeMode="contain"
              style={styles.itemIcon}
            />
          </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Animated.View
            style={[
              styles.item,
              opacity,
              {
                transform: [
                  {
                    translateX: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 60],
                    }),
                  },
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -50],
                    }),
                  },
                ],
              },
            ]}>
            <Image
              source={require("../../../../assets/images/Setting.png")}
              resizeMode="contain"
              style={styles.itemIcon}
            />
          </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handlePress}
          style={styles.addButton}>

          <Animated.View
            style={[
              styles.addButtonInner,
              {
                transform: [
                  {
                    rotate: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["0deg", "45deg"],
                    }),
                  },
                ],
              },
            ]}>
            <Image
              source={require("../../../../assets/images/magnify.png")}
              resizeMode="contain"
              style={styles.addButtonIcon}
            />
          </Animated.View>

        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    height: 0,
  },
  box: {
    position: "relative",
    width: 60,
    height: 60,
    marginTop: -30,
  },
  addButton: {
    shadowOpacity: 0.3,
    shadowColor: COLORS.dark,
    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowRadius: 3,
    elevation: 3
  },
  addButtonInner: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(84, 189, 149, 1)",
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  addButtonIcon: {
    width: 30,
    height: 40,
    tintColor: COLORS.white,
  },
  item: {
    position: "absolute",
    top: 5,
    left: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  itemIcon: {
    width: 30,
    height: 35,
    tintColor: COLORS.white,
  },
});

export default AddButton;