import Service from '@ember/service';
import { inject } from '@ember/service';
import { later } from '@ember/runloop';

export default Service.extend({
  store: inject(),
  init(){
    this._super(...arguments);

    console.log('Game Sim....'); 

    this.seedTeams();

    later(this, this.simulateGame, 1000);
  },

  seedTeams(){
    let teamNames = ['Manchester United', 'Team 2', 'Team 3', 'Team 4'];

    for(let i =0; i<teamNames.length; i++){
      this.store.createRecord('team', { id: i, name: teamNames[i] } )
    }
  }
});
