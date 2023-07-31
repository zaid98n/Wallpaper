// import React, { useEffect } from 'react';
// import { View, Image, TouchableOpacity, Dimensions, BackHandler } from 'react-native';

// const FullScreenImage = ({ imageUrl, onClose }) => {
//   const screenWidth = Dimensions.get('window').width;
//   const screenHeight = Dimensions.get('window').height;

//   const handleBackPress = () => {
//     onClose();
//     return true; // Return true to prevent default back button behavior
//   };

//   useEffect(() => {
//     // Subscribe to the back button event
//     BackHandler.addEventListener('hardwareBackPress', handleBackPress);

//     // Clean up the subscription on component unmount
//     return () => {
//       BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
//     };
//   }, []);

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
//       <Image
//         source={{ uri: imageUrl }}
//         style={{
//           width: screenWidth,
//           height: screenHeight,
//           resizeMode: 'contain',
//         }}
//       />
//     </TouchableOpacity>
//   );
// };

// export default FullScreenImage;

import React, { useEffect } from 'react';
import { View, Image, TouchableOpacity, Dimensions, BackHandler } from 'react-native';
import Modal from 'react-native-modal';
import ImageZoom from 'react-native-image-pan-zoom';

const FullScreenImage = ({ imageUrl, onClose }) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const handleBackPress = () => {
    onClose();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);

  return (
    <Modal
      isVisible={true} // Set this to a state to show/hide the modal
      style={{ flex: 1 }}
      onBackdropPress={onClose}
      onBackButtonPress={handleBackPress}
      backdropColor="black"
      backdropOpacity={1}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ImageZoom
          cropWidth={screenWidth}
          cropHeight={screenHeight}
          imageWidth={screenWidth}
          imageHeight={screenHeight}
          enableSwipeDown
          onSwipeDown={onClose}
        >
          <Image
            source={{ uri: imageUrl }}
            style={{
              width: screenWidth,
              height: screenHeight,
              resizeMode: 'contain',
            }}
          />
        </ImageZoom>
      </TouchableOpacity>
    </Modal>
  );
};

export default FullScreenImage;
