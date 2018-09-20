import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UUID } from 'angular2-uuid';

export class InMemoryDataTeamService implements InMemoryDbService {
  createDb() {
    const teams = [
      // {id: UUID.UUID(), name: 'test'}
    ];
    return {teams};
  }
}
