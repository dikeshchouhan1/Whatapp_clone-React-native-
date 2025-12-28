import imagepath from "@/src/constants/imagepath";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";
const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
        setIsLoading(true);
        setTimeout(()=>{
           router.push("/(auth)/Terms_agree");
        },3000)
    },2000)
  },[]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image
          source={imagepath.logo}
          style={styles.logo_style}
          resizeMode="contain"
        />
        <Text style={styles.dev_text}>DevChat</Text>
      </View>
      <View style={styles.footer}>
        {isLoading ? (
  <>
    <ActivityIndicator size={moderateScale(40)} />
    <Text style={styles.loding_text}>Loading...</Text>
  </>
) : (
  <>
    <Text style={styles.from_text}>From</Text>
    <Text style={styles.facebook_text}>DevChat</Text>
  </>
)}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(50),
  },
  header: {},
  body: {
    alignItems: "center",
    gap: verticalScale(10),
  },
  footer: {
    alignItems: "center",
    height:verticalScale(80),
    justifyContent:"flex-end"
  },
  from_text: {
    fontSize: moderateScale(12),
    color: "#867373",
  },
  facebook_text: {
    fontSize: moderateScale(15),
    color: "#514f4fff",
  },
  logo_style: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(10),
  },
  dev_text: {
    fontSize: moderateScale(35),
    color: "#0c0c0cff",
    fontWeight: "bold",
  },
  loding_text:{
    fontSize: moderateScale(20),
    color: "#545382ff",
    fontWeight: "bold",
    marginTop:verticalScale(15),
  }
});

export default Auth;
