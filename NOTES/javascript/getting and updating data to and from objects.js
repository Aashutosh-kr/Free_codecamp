// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

/* not working code */

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" || prop !== "artist" || prop !== "") {
    // value = prop;
  }

  if (prop === "tracks" && value !== "" && records[id].tracks !== []) {
    records[id].tracks = [];
    records[id].tracks.push(value);
  } else if (prop === "tracks" && value !== "") {
    records[id].tracks.push(value);
  }

  if (value === "") {
    delete records[id][prop];
  }
  console.log(`----------------------------------------------------------`);
  console.log(recordCollection);
  return recordCollection;
}



updateRecords(recordCollection, 5439, 'artist', 'ABBA')
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
updateRecords(recordCollection, 2548, "artist", "");
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")
updateRecords(recordCollection, 2468, "tracks", "Free")
updateRecords(recordCollection, 2548, "tracks", "")
updateRecords(recordCollection, 1245, "albumTitle", "Riptide")

/* Working code */

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value != false) {
    records[id][prop] = value
  }

  if (prop === "tracks" && records[id][prop] === undefined) {
    records[id][prop] = []
    records[id][prop].push(value)
  }
  if (prop === "tracks" && records[id][prop] == false) {
    records[id][prop].push(value)
  }
  if (value === "") {
    delete records[id][prop]
  }
  console.log("--------------------------------");
  console.log(records)
  console.log("--------------------------------");
  return records;
}


updateRecords(recordCollection, 5439, 'artist', 'ABBA')
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
updateRecords(recordCollection, 2548, "artist", "");
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")
updateRecords(recordCollection, 2468, "tracks", "Free")
updateRecords(recordCollection, 2548, "tracks", "")
updateRecords(recordCollection, 1245, "albumTitle", "Riptide")
