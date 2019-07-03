import DS from 'ember-data';
import { union, filterBy } from '@ember/object/computed';
const { Model } = DS;

export default Model.extend({
  name: DS.attr('string'),
  homeGames: DS.hasMany('game', {inverse: 'homeTeam'}),
  awayGames: DS.hasMany('game', {inverse: 'awayTeam'}),

  games: union('homeGames', 'awayGames'),

  homeGamesWon: filterBy('games', 'isHomeWin'),
  awayGamesWon: filterBy('games', 'isAwayWin'),

  gamesWon: union('homeGamesWon', 'awayGamesWon'),

  gamesDrawn: filterBy('games', 'isDraw'),
});
