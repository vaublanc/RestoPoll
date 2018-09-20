import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UUID } from 'angular2-uuid';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teams = [
      {id: UUID.UUID(), name: 'Sopra'}
    ];

    const teamMembers = [
      {id: UUID.UUID(), firstName: 'Jean', lastName: 'Dupont'}
    ];
    return {teams, teamMembers};
  }
}
