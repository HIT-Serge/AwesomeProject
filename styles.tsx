import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  appContainer: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
    padding: 0,
    margin: 0,
  },
  mainImageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

  },
  mainImage: {
    justifyContent: 'center',
    marginVertical: 10,
    resizeMode: "contain",
    aspectRatio: 342 / 85,

  },
  componentContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
    flex: 1,

  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

  },
  searchTextInput: {
    backgroundColor: 'white',
    color: 'black',
    width: '90%',
    height: 40,
    padding: 10,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
  },

  sectionHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

  },
  verticalSectionContainer: {
    display: 'flex',
    flexDirection: 'column',

  },
  headerTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: 'white',
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    width: '100%',
    marginVertical: 10,

  },
  detailContainer: {
    display: 'flex',
    flexDirection: 'column',


  },

  sectionDescription: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },


  itemText: {
    marginLeft: 10,
    color: 'white',

  },
  detailHeadText: {
    fontWeight: '900',
    fontSize: 30,
    color: 'white',
    marginLeft: 10,

  },
  dropDownMenu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 10,

  },
  arrowImage: {

    width: 32,
    height: 32,
    marginVertical: 10,
    marginRight: 10,

  },
  sectionImage: {
    width: "100%",
    aspectRatio: 1 / 1,
  },
  image: {
    width: 200,
    height: 300,
  },

  viewContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

  },
  titleText: {
    color: 'white',
    backgroundColor: 'grey',
    fontWeight: 'bold',
  },
  episodeContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 3,
    padding: 5,
  }
});

export default styles;