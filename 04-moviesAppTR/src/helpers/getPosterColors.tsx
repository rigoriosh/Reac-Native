import ImageColors from 'react-native-image-colors';



export const getPosterColors = async(URI: string) => {
    //console.log('posterActual: ', stateMovies.nowPlaying[index].original_title);
    //const URI = `${constantesApp.uriBase}${stateMovies.nowPlaying[index].poster_path}`;
    const config = {};
    const colors = await ImageColors.getColors(URI, config);
    //setColorsPosterActual(colors);

    let primary, secundary;
    if (colors.platform === 'android') {
        // Access android properties
        // e.g.
        primary = colors.darkVibrant || 'green'
        secundary = colors.dominant || 'blue'
      } else {
        // Access iOS properties
        // e.g.
        primary = colors.background || 'green'
        secundary = colors.detail || 'blue'
      }

      return [primary, secundary]
}