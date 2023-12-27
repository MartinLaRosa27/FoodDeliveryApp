import { View } from "react-native";
import { featured } from "../../DB";
import FeaturedRow from "./FeaturedRow";

export default function FeaturedHome() {
  return (
    <View className="mt-5">
      {[featured, featured, featured].map((item, i) => {
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
