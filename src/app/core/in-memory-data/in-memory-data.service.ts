import { OngoingPoll } from './../../team-feature/polls/shared/ongoing-poll';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UUID } from 'angular2-uuid';
import { NatureEnum } from 'src/app/shared/nature-enum';

// this service simulate a distant web database. This is our mock.

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const idSopra = UUID.UUID();
    const idFoot = UUID.UUID();

    const teams = [
      {id: idSopra, name: 'Sopra'},
      {id: idFoot, name: 'Foot'}
    ];

    const idNeymar = UUID.UUID();
    const idPeuplu = UUID.UUID();
    const idRajoute = UUID.UUID();

    const teamMembers = [
      {id: idNeymar, firstName: 'Jean', lastName: 'Neymar', teamId: idSopra},
      {id: UUID.UUID(), firstName: 'Jean', lastName: 'Neymar', teamId: idFoot},
      {id: idPeuplu, firstName: 'Jean', lastName: 'Peuplu', teamId: idSopra},
      {id: UUID.UUID(), firstName: 'Jean', lastName: 'Néplin', teamId: idFoot},
      {id: idRajoute, firstName: 'Jean', lastName: 'Rajoute', teamId: idSopra},
    ];

    const idVM = UUID.UUID();
    const idMM = UUID.UUID();

    const polls = [
      {id: idVM, nature: NatureEnum.Restaurant, name: 'Vendredi Midi', isFavorite: true, teamId: idSopra, teamName: 'Sopra'},
      {id: idMM, nature: NatureEnum.Restaurant, name: 'Mardi midi', isFavorite: false, teamId: idSopra, teamName: 'Sopra'}
    ];

    const id6sens = UUID.UUID();
    const idPommeDepice = UUID.UUID();

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

    return {teams, teamMembers, polls, restaurants, ongoingPolls, movies};
  }
}
