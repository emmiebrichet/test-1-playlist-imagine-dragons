const Playlist = require('./playlist');

describe("test sur la playlist avec succès", () => {
  let playlist;

  beforeEach(() => {
    playlist = new Playlist();
  });

  test("initialise une playlist vide", () => {
    expect(playlist.getPlaylist()).toEqual([]);
  });

  test("ajouter une chanson avec succès", () => {
    const song = {
      title: "Demons",
      artist: "Imagine Dragons",
      album: "Night Visions",
    };

    expect(() => playlist.addSong(song)).not.toThrow();
    expect(playlist.getPlaylist()).toContain(song);
  });

  test("supprimer une chanson de la playlist", () => {
    const song = {
      title: "Believer",
      artist: "Imagine Dragons",
      album: "Evolve",
    };

    playlist.addSong(song);
    playlist.removeSong(song);

    expect(playlist.getPlaylist()).not.toContain(song);
  });

  test("récupérer des chansons d'un album existant", () => {
    const song1 = {
      title: "Demons",
      artist: "Imagine Dragons",
      album: "Night Visions",
    };
    const song2 = {
      title: "Radioactive",
      artist: "Imagine Dragons",
      album: "Night Visions",
    };

    playlist.addSong(song1);
    playlist.addSong(song2);

    const songs = playlist.getSong("Night Visions");
    expect(songs).toEqual([song1, song2]);
  });
});

describe("test sur la playlist avec échec", () => {
  let playlist;

  beforeEach(() => {
    playlist = new Playlist();
  });

  test("ajouter une chanson invalide", () => {
    const invalidSong = {
      title: "Demons",
      artist: "Unknown Artist",
      album: "Night Visions",
    };

    expect(() => playlist.addSong(invalidSong)).toThrow("Only songs by Imagine Dragons are allowed");
  });

  test("ajouter une chanson déjà présente", () => {
    const song = {
      title: "Demons",
      artist: "Imagine Dragons",
      album: "Night Visions",
    };

    playlist.addSong(song);
    expect(() => playlist.addSong(song)).toThrow("This song is already in the playlist");
  });

  test("supprimer une chanson inexistante", () => {
    const song = {
      title: "thunder",
      artist: "Imagine Dragons",
      album: "Evolve",
    };

    expect(() => playlist.removeSong(song)).not.toThrow();
    expect(playlist.getPlaylist()).not.toContain(song);
  });

  test("récupérer des chansons d'un album inexistant", () => {
    const songs = playlist.getSong("Nonexistent Album");
    expect(songs).toEqual([]);
  });

  test("ajouter une chanson de OneRepublic", () => {
    const song = {
      title: "Counting Stars",
      artist: "OneRepublic",
      album: "Native",
    };
    expect(() => playlist.addSong(song)).toThrow("Only songs by Imagine Dragons are allowed");
  });

  test("ajouter une chanson sans titre", () => {
    const song = {
      artist: "Imagine Dragons",
      album: "Night Visions",
    };
    expect(() => playlist.addSong(song)).toThrow("Invalid song object");
  });

  test("ajouter une chanson sans artiste", () => {
    const song = {
      title: "Demons",
      album: "Night Visions",
    };
    expect(() => playlist.addSong(song)).toThrow("Invalid song object");
  });

  test("ajouter une chanson sans album", () => {
    const song = {
      title: "Demons",
      artist: "Imagine Dragons",
    };
    expect(() => playlist.addSong(song)).toThrow("Invalid song object");
  });

  test("ajouter une chanson avec un titre vide", () => {
    const song = {
      title: "",
      artist: "Imagine Dragons",
      album: "Night Visions",
    };
    expect(() => playlist.addSong(song)).toThrow("Invalid song object");
  });

  test("ajouter une chanson avec un artiste vide", () => {
    const song = {
      title: "Demons",
      artist: "",
      album: "Night Visions",
    };
    expect(() => playlist.addSong(song)).toThrow("Invalid song object");
  });

  test("ajouter une chanson avec un album vide", () => {
    const song = {
      title: "Demons",
      artist: "Imagine Dragons",
      album: "",
    };
    expect(() => playlist.addSong(song)).toThrow("Invalid song object");
  });

  test("ajouter une chanson avec un titre null", () => {
    const song = {
      title: null,
      artist: "Imagine Dragons",
      album: "Night Visions",
    };
    expect(() => playlist.addSong(song)).toThrow("Invalid song object");
  });

  test("ajouter une chanson avec un artiste null", () => {
    const song = {
      title: "Demons",
      artist: null,
      album: "Night Visions",
    };
    expect(() => playlist.addSong(song)).toThrow("Invalid song object");
  });

  test("ajouter une chanson avec un album null", () => {
    const song = {
      title: "Demons",
      artist: "Imagine Dragons",
      album: null,
    };
    expect(() => playlist.addSong(song)).toThrow("Invalid song object");
  });
  test("ajouter une chanson avec un titre inconnu", () => {
  const song = {
    title: "stella",
    artist: "Imagine Dragons",
    album: "Evolve",
  };
  expect(() => playlist.addSong(song)).toThrow("Unknown song by Imagine Dragons");
});
});

