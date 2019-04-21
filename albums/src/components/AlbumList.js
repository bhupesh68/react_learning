import React from 'react';
import { Text, View } from 'react-native';

class AlbumList extends React.Component {
  //const { textStyle, viewStyle } = styles;
componentDidMount() {
  const response = await axios.get('https://rallycoding.herokuapp.com/api/music_albums')
}
  render() {
    return (
      <View>
        <Text>AlbumList</Text>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#E3E3E3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
      fontSize: 20,
    }
};
export default AlbumList;
