import { View } from "react-native";
import { featured, featuredDos } from "../../DB";
import FeaturedRow from "./FeaturedRow";

export default function FeaturedHome() {
  return (
    <View className="mt-5">
      {[featuredDos].map((item, i) => {
        return (
          <FeaturedRow
            key={i}
            title={item.title}
            restaurants={item.restaurants}
            description={item.description}
          />
        );
      })}
      {[featured].map((item, i) => {
        return (
          <FeaturedRow
            key={i}
            title={item.title}
            restaurants={item.restaurants}
            description={item.description}
          />
        );
      })}
    </View>
  );
}
