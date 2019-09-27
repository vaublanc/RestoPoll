import { Poll } from '../polls/shared/poll';

export class User {
    id: string;
    firstName: string;
    lastName: string;
    polls: Poll[];
}
