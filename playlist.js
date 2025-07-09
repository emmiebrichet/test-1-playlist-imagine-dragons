class Playlist {
  constructor() {
    this.playlist = [];
  }

  addSong(song) {
    if (!song || !song.title || !song.artist || !song.album) {
      throw new Error("Invalid song object");
    }
    if (song.artist !== "Imagine Dragons") {
      throw new Error("Only songs by Imagine Dragons are allowed");
    }

    const exists = this.playlist.some(
      s => s.title === song.title && s.album === song.album
    );
    if (exists) {
      throw new Error("This song is already in the playlist");
    }

    this.playlist.push(song);
  }

  getSong(albumName) {
    return this.playlist.filter(song => song.album === albumName);
  }

  removeSong(song) {
    const index = this.playlist.indexOf(song);
    if (index > -1) {
      this.playlist.splice(index, 1);
    }
  }

  getPlaylist() {
    return this.playlist;
  }
}

module.exports = Playlist;  // on exporte la classe directement
