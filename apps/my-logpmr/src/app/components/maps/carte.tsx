import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import shared from 'shared/src/lib/shared';

export function Carte() {

const values = shared()

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 46.603354,
          longitude: 1.888334,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
      >
        {values.map((city, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: city.latitude, longitude: city.longitude }}
            title={city.name}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center'
},

  map: {
    width: '100%',
    height: '100%',
  },
});
