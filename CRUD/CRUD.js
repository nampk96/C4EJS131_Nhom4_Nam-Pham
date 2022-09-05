const album = {
  1: {
    albumTitle: "Mr.Morale & The Big Steppers",
    artist: "Kendrick Lamar",
    track: ["Rich Spirit", "We Cry Together", "Die Hard"],
  },
  2: {
    albumTitle: "One Less Year Alive",
    artist: "iamnotshane",
    track: ["What A Perfect Day For Crying", "Unemotional", "Ugly Thoughts"],
  },
  3: {
    albumTitle: "Dawn FM",
    artist: "The Weeknd",
    track: ["Take My Breath", "Out of Time", "Sacrifice"],
  },
};

// Create function that ask user to Input more track or not
function inputTrack() {
  let track = [prompt("Input track")];
  let flag = true;
  while (flag) {
    switch (parseInt(prompt("1. Input more track \n 2. Done"))) {
      case 1:
        track.push(prompt("Input track"));
        break;
      case 2:
        flag = false;
        break;
      default:
        alert("Wrong Input");
        break;
    }
  }
  return track;
}

let flag = true;
while (flag) {
  // Get the last id of Obj and plus 1 to make auto increment id
  let id = parseInt(Object.keys(album)[Object.keys(album).length - 1]) + 1;

  switch (
    parseInt(
      prompt("1. CREATE \n 2. READ \n 3. UPDATE \n 4. DELETE \n 5. QUIT")
    )
  ) {
    case 1:
      album[id] = {
        albumTitle: prompt("Input Album Title"),
        artist: prompt("Input Artist's Name"),
        track: inputTrack(),
      };

      break;
    case 2:
      // Ask User choose get All the Album or Get Album By ID
      switch (parseInt(prompt("1. Read All Album \n 2. Read Album by ID"))) {
        case 1:
          console.log(album);
          break;
        case 2:
          let albumByID = album[prompt("Input ID")];
          if (albumByID != undefined) {
            console.log(albumByID);
          } else {
            2;
            alert("ID NOT EXIST");
          }
          break;
        default:
          alert("Wrong Input");
          break;
      }
      break;
    case 3:
      // Check input ID exist or not
      let inputUpdateID = prompt("Input ID");
      if (album[inputUpdateID] != undefined) {
        // update the album by ID
        album[inputUpdateID] = {
          albumTitle: prompt("Input Album Title"),
          artist: prompt("Input Artist's Name"),
          track: inputTrack(),
        };
      } else {
        alert("ID NOT EXIST");
      }
      break;
    case 4:
        // Check input ID exist or not
      let inputDeleteID = prompt("Input ID");
      if (album[inputDeleteID] != undefined) {
        // Delete Album by ID
        delete album[inputDeleteID];
      } else {
        alert("ID NOT EXIST");
      }
      break;
    case 5:
      flag = false;
      alert('Bye Bye >.< Have a greate time')
      break;
    default:
      alert("WRONG INPUT LOL");
      break;
  }
}
