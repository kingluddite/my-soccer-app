// starting code
// https://getbootstrap.com/docs/4.4/examples/dashboard/#
// replace canvas with form to add players

const getSavedPlayers = function() {
  // grab all players from localStorage
  const playersJSON = localStorage.getItem('players');

  // check first if there are any players in localStorage
  if (playersJSON !== null) {
    // if there are players, parse them from a string into an object
    return JSON.parse(playersJSON);
  } else {
    // if there are no players return an empty array
    return [];
  }
};

const savePlayers = function(players) {
  localStorage.setItem('players', JSON.stringify(players));
};

// We first check if there are any players in localStorage
// If there are, we grab them, if there aren't any, we return an empty array
let players = getSavedPlayers();

// Event handlers
document
  .querySelector('#add-player-form')
  .addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log(e.target.elements.activePlayerCheckbox.checked);
    // console.log('form submitted');
    players.push({
      id: uuidv4(),
      firstName: e.target.elements.firstName.value,
      lastName: e.target.elements.lastName.value,
      activePlayer: e.target.elements.activePlayerCheckbox.checked,
    });
    savePlayers(players);
    // clear form after submission
    e.target.elements.firstName.value = '';
    e.target.elements.lastName.value = '';
    e.target.elements.activePlayerCheckbox.checked = false;
  });
