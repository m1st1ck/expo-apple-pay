import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import ExpoApplePay, {
  MerchantCapability,
  PaymentNetwork,
} from "expo-apple-pay";
import { CompleteStatus } from "expo-apple-pay/ExpoApplePay.types";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          ExpoApplePay.show({
            countryCode: "BG",
            currencyCode: "EUR",
            merchantCapabilities: [MerchantCapability["3DS"]],
            supportedNetworks: [PaymentNetwork.masterCard, PaymentNetwork.visa],
            paymentSummaryItems: [
              {
                label: "Ice",
                amount: 0.51,
              },
              {
                label: "Total",
                amount: 0.51,
              },
            ],
            merchantIdentifier: "merchant...",
          })
            .then((paymentData) => {
              console.log(paymentData);

              setTimeout(() => {
                ExpoApplePay.complete(CompleteStatus.success);
              }, 3000);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        <Text> Test</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
