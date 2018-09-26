import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UUID } from 'angular2-uuid';

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

    const polls = [
      {id: UUID.UUID(), name: 'Vendredi Midi', teamId: idSopra},
    ];

    return {teams, teamMembers};
  }
}
