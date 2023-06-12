// Team data
const teamData = {
    wins: 10,
    topScorers: ['Gustavo Gomez', 'Luiz Adriano', 'Dudu'],
    bestPlayers: [
        {
            photo: 'player1.jpg',
            name: 'Player 1',
            height: '180cm',
            weight: '75kg',
            age: 25
        },
        {
            photo: 'player2.jpg',
            name: 'Player 2',
            height: '185cm',
            weight: '80kg',
            age: 28
        }
    ],
    stadium: 'Allianz Parque',
    coach: 'Abel Ferreira',
    numPlayers: 30,
    transfers: ['Transfer 1', 'Transfer 2', 'Transfer 3']
};

// Update team wins
const winsElement = document.getElementById('wins');
winsElement.textContent = `Total Wins: ${teamData.wins}`;

// Update top goal scorers
const topScorersElement = document.getElementById('top-scorers');
topScorersElement.innerHTML = teamData.topScorers.map(scorer => `<li>${scorer}</li>`).join('');

// Update best players
const bestPlayersElement = document.getElementById('best-players');
bestPlayersElement.innerHTML = teamData.bestPlayers.map(player =>
    `<div class="player-card">
       <div class="player-photo">
         <img src="${player.photo}" alt="${player.name}'s Photo" width="80">
       </div>
       <div class="player-info">
         <p class="player-name">${player.name}</p>
         <div class="player-details">
           <p>Height: ${player.height}</p>
           <p>Weight: ${player.weight}</p>
           <p>Age: ${player.age}</p>
         </div>
       </div>
     </div>`
).join('');

// Update stadium info
const stadiumElement = document.getElementById('stadium');
stadiumElement.textContent = `Stadium: ${teamData.stadium}`;

// Update current coach
const coachElement = document.getElementById('coach');
coachElement.textContent = `Current Coach: ${teamData.coach}`;

// Update number of players
const numPlayersElement = document.getElementById('num-players');
numPlayersElement.textContent = `Number of Players: ${teamData.numPlayers}`;

// Update latest transfers
const transfersElement = document.getElementById('transfers');
transfersElement.innerHTML = teamData.transfers.map(transfer => `<li>${transfer}</li>`).join('');
