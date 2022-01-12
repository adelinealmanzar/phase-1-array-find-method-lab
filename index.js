  function superbowlWin(array) {
    const win = array.find(element => element.result === "W")
    if (win) {
        return win.year;
    }
  }