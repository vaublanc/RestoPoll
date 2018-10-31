import { Poll } from 'src/app/poll-feature/polls/shared/poll';

export class User {
    id: string;
    firstName: string;
    lastName: string;
    polls: Poll[];
}
