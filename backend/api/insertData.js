import { artistArray } from '../../frontend/src/assets/database/artists.js';
import { songsArray } from '../../frontend/src/assets/database/songs.js';

import { db } from './connect.js';

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistArrayObj = { ...currentArtistObj };
  delete newArtistArrayObj.id;

  return newArtistArrayObj;
});

const newSongArray = songsArray.map((currentSongObj) => {
  const newSongArrayObj = { ...currentSongObj };
  delete newSongArrayObj.id;

  return newSongArrayObj;
});

const songsResponse = await db.collection('songs').insertMany(newSongArray);
const artistsResponse = await db
  .collection('artists')
  .insertMany(newArtistArray);

console.log(songsResponse);
console.log(artistsResponse);
