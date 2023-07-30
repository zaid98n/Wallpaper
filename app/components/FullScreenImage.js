import React from 'react';
import { View, Image, TouchableOpacity, Dimensions } from 'react-native';

const FullScreenImage = ({ imageUrl, onClose }) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onClose}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: screenWidth,
        height: screenHeight,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        source={{ uri: imageUrl }}
        style={{
          width: screenWidth,
          height: screenHeight,
          resizeMode: 'contain',
        }}
      />
    </TouchableOpacity>
  );
};

export default FullScreenImage;


// import React from 'react';
// import { View, Image, TouchableOpacity, Dimensions } from 'react-native';
// import { PinchGestureHandler, State } from 'react-native-gesture-handler';
// import Animated, {
//   useAnimatedGestureHandler,
//   useSharedValue,
//   useAnimatedStyle,
//   withScale,
//   withSpring,
// } from 'react-native-reanimated';

// const FullScreenImage = ({ imageUrl, onClose }) => {
//   const screenWidth = Dimensions.get('window').width;
//   const screenHeight = Dimensions.get('window').height;

//   const baseScale = 1;
//   const pinchScale = useSharedValue(baseScale);
//   const scaleOffset = useSharedValue(1);

//   const onPinchGestureEvent = useAnimatedGestureHandler({
//     onStart: (_, ctx) => {
//       ctx.scaleOffset = pinchScale.value;
//       pinchScale.value = withSpring(0.9 * pinchScale.value);
//     },
//     onActive: (event, ctx) => {
//       pinchScale.value = ctx.scaleOffset * event.scale;
//     },
//     onEnd: () => {
//       pinchScale.value = withSpring(baseScale, { damping: 20 });
//     },
//   });

//   const imageAnimatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         { translateX: 0 },
//         { translateY: 0 },
//         { scale: withScale(pinchScale.value, baseScale) },
//       ],
//     };
//   });

//   return (
//     <TouchableOpacity
//       activeOpacity={1}
//       onPress={onClose}
//       style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: screenWidth,
//         height: screenHeight,
//         backgroundColor: 'black',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <PinchGestureHandler onGestureEvent={onPinchGestureEvent}>
//         <Animated.View>
//           <Image
//             source={{ uri: imageUrl }}
//             style={[
//               {
//                 width: screenWidth,
//                 height: screenHeight,
//                 resizeMode: 'contain',
//               },
//               imageAnimatedStyle,
//             ]}
//           />
//         </Animated.View>
//       </PinchGestureHandler>
//     </TouchableOpacity>
//   );
// };

// export default FullScreenImage;
