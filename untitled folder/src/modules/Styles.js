import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  cardViewContainer: {
    padding: 10,
    height: 45,
    justifyContent: 'space-between',
    alignContent: 'center',
    elevation: 6,
    borderRadius: 10,
    shadowOffset: {width: 0, height: 2},
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgrey',
    flexDirection: 'row',
  },
  textContainer: {
    fontSize: 12,
    color: 'gray',
  },
  fontContainer: {
    fontSize: 17,
    color: 'black',
    fontWeight: '700',
    paddingLeft: 20,
  },
  customBtnText: {
    fontSize: 14,
    height: 22,
    width: 100,
    marginLeft: 10,
    fontWeight: '400',
    color: 'black',
  },
  customBtnBG: {
    backgroundColor: 'gainsboro',
    width: 70,
    marginLeft: 305,
    borderRadius: 8,
    marginTop: -22,
  },
  sheetContainer: {
    fontSize: 17,
    color: 'teal',
    fontWeight: '700',
    marginTop: 12,
    paddingRight: 50,
  },
  overalStyle: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
});
