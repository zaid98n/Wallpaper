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
    backgroundColor: 'yellow', // Black background for each image and buttons
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
});


export default styles;
