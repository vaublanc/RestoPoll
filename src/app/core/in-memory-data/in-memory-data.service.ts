import { TeamMember } from 'src/app/team-feature/team-members/shared/teamMember';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UUID } from 'angular2-uuid';
import { id } from '@swimlane/ngx-charts/release/utils';

// this service simulate a distant web database. This is our mock.

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const idSopra = UUID.UUID();
    const idFoot = UUID.UUID();

    const idRestaurantNature = UUID.UUID();
    const idMovieNature = UUID.UUID();

    const idNeymar = UUID.UUID();
    const idPeuplu = UUID.UUID();
    const idRajoute = UUID.UUID();
    const idNeplin = UUID.UUID();

    const idVM = UUID.UUID();
    const idMM = UUID.UUID();

    const id6sens = UUID.UUID();
    const idPommeDepice = UUID.UUID();

    const teams = [
      {id: idSopra, name: 'Sopra', teamMembers: [
        {id: idNeymar, firstName: 'Jean', lastName: 'Neymar'},
        {id: idPeuplu, firstName: 'Jean', lastName: 'Peuplu'},
        {id: idRajoute, firstName: 'Jean', lastName: 'Rajoute'},
      ]},
      {id: idFoot, name: 'Foot', teamMembers: [
        {id: idNeymar, firstName: 'Jean', lastName: 'Neymar'},
        {id: idNeplin, firstName: 'Jean', lastName: 'Neplin'},
      ]}
    ];

    const users = [
      {id: idNeymar, firstName: 'Jean', lastName: 'Neymar', polls: [
        {id: idVM, natureId: idRestaurantNature, natureName: 'Restaurant', name: 'Vendredi Midi'},
        {id: idMM, natureId: idRestaurantNature, natureName: 'Restaurant', name: 'Mardi midi'}
      ]},
      {id: idPeuplu, firstName: 'Jean', lastName: 'Peuplu', polls: []},
      {id: idRajoute, firstName: 'Jean', lastName: 'Rajoute', polls: []},
      {id: idNeplin, firstName: 'Jean', lastName: 'Neplin', polls: []},
    ];

    const polls = [
      {id: idVM, natureId: idRestaurantNature, natureName: 'Restaurant', name: 'Vendredi Midi'},
      {id: idMM, natureId: idRestaurantNature, natureName: 'Restaurant', name: 'Mardi midi'}
    ];

    const restaurants = [
      {id: id6sens, name: 'Le 6eme sens', adress: '2 Rue Thomas Corneille, 76000 Rouen', pollId: idVM},
      {id: idPommeDepice,  name: 'Pomme d\'épices', adress: '66 Rue Bouvreuil, 76000 Rouen', pollId: idVM}
    ];

    const data = [
      {
        'name': 'Le 6eme sens',
        'series': [
          {
            'name': 'Jean Neymar',
            'value': 1
          },
          {
            'name': 'Jean Peuplu',
            'value': 1
          }
        ]
      },
      {
        'name': 'Pomme d\'épices',
        'series': [
          {
            'name': 'Jean Rajoute',
            'value': 1
          }
        ]
      }
    ];

    const ongoingPolls = [
      {id: UUID.UUID(), name: 'Mardi midi', pollId: idMM, options: restaurants, dataChart: data, teamName: 'Sopra', members: [
        {id: idNeymar, firstName: 'Jean', lastName: 'Neymar', teamId: idSopra},
        {id: idPeuplu, firstName: 'Jean', lastName: 'Peuplu', teamId: idSopra},
        {id: idRajoute, firstName: 'Jean', lastName: 'Rajoute', teamId: idSopra}
      ]}
    ];

    const movies = [];

    const natures = [
      {id: idRestaurantNature, name: 'Restaurant', route: '/restaurants'},
      {id: idMovieNature, name: 'Film', route: '/movies'},
  ];

    return {teams, polls, restaurants, ongoingPolls, movies, natures, users};
  }
}
