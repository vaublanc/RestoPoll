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

    const teamMembers = [
      {id: UUID.UUID(), firstName: 'Jean', lastName: 'Neymar', teamId: idSopra},
      {id: UUID.UUID(), firstName: 'Jean', lastName: 'Neymar', teamId: idFoot},
      {id: UUID.UUID(), firstName: 'Jean', lastName: 'Peuplu', teamId: idSopra},
      {id: UUID.UUID(), firstName: 'Jean', lastName: 'Néplin', teamId: idFoot},
      {id: UUID.UUID(), firstName: 'Jean', lastName: 'Rajoute', teamId: idSopra},
    ];

    const idVM = UUID.UUID();
    const idMM = UUID.UUID();

    const polls = [
      {id: idVM, nature: NatureEnum.Restaurant, name: 'Vendredi Midi', teamId: idSopra},
      {id: idMM, nature: NatureEnum.Restaurant, name: 'Mardi midi', teamId: idSopra}
    ];

    const restaurants = [
      {id: UUID.UUID(), name: 'Le 6eme sens', adress: '2 Rue Thomas Corneille, 76000 Rouen', pollId: idVM},
      {id: UUID.UUID(),  name: 'Pomme d\'épices', adress: '66 Rue Bouvreuil, 76000 Rouen', pollId: idVM}
    ];

    return {teams, teamMembers, polls, restaurants};
  }
}
