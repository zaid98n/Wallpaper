import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingTop: 20, 
    //backgroundColor: 'black',
  },
  scrollContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Black background for each image and buttons
    marginVertical: 15,
    borderRadius: 30,
    width: '90%'
  },
  postProfilePicture: {
    height: 230,
    borderRadius: 30,
    overflow: 'hidden',
    //marginVertical: 10,
  },
  categoryPicture: {
    height: 100,
    borderRadius: 30,
    overflow: 'hidden',
    //marginVertical: 10,
    margin: 6,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    marginLeft: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'green',
  },
  loadMore: {
    padding: 7,
    fontWeight: 'bold',
    textAlign: 'center',
    //marginTop: 10, 
    marginBottom: 20,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'green',
    //borderColor: 'Black',
    //borderWidth: 2,
    borderRadius: 50,
  },
  CategoryName: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    //backgroundColor: 'rgba(0, 0, 0, 0.4)', // Add a background to improve text readability
    color: 'white', // Adjust text color
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: '5%',
    // marginBottom: '5%',
    //margin: '12%',
    //padding: 10, // Add padding for better styling
    borderRadius: 10, // Add border radius for the background
  }
});


export default styles;
