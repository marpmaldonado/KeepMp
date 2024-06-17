
import React from "react"
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 0,
    backgroundColor: '#f3e5f5', 
  },
  title: {
    fontSize: 30,
    color: '#7e57c2', 
    marginTop: 90,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    borderBottomColor: '#b39ddb', 
    borderBottomWidth: 2,
    paddingBottom: 5,
    textAlign: 'center',
    fontFamily: 'Cochin',
  },
  text: {
    fontSize: 16,
    color: '#5e35b1', 
  },
  whiteText: {
    fontSize: 16,
    color: '#FFF',
  },
  textInput: {
    borderColor: '#d1c4e9', 
    borderWidth: 1,
    width: Dimensions.get('screen').width * 0.6,
    paddingLeft: 15,
    borderRadius: 10,
    backgroundColor: '#ede7f6',
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  addButton: {
    backgroundColor: '#9575cd', 
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.25,
    borderRadius: 10,
    paddingVertical: 10,
  },
  scrollContainer: {
    marginTop: 80,
    width: '100%', 
    paddingHorizontal: 20, // 
  },
  itemContainer: {
    paddingVertical: 20,
    borderBottomColor: '#d1c4e9',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', 
    paddingHorizontal: 20, 
  },
  itemText: {
    fontSize: 16,
    color: '#5e35b1', 
  },
  removeButton: {
    backgroundColor: '#ab47bc',
    paddingHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 5,
  },
  textoDone: {
    fontSize: 16,
    color: 'red',
    textDecorationLine: 'line-through',
  },
});

export default styles;
