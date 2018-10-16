import { DataChart } from './data-charts';
import { TeamMember } from '../../team-members/shared/teamMember';
import { Option } from '../../options/shared/option';
import { Poll } from './poll';
import { UUID } from 'angular2-uuid';

export class OngoingPoll {

    // constructor(poll: Poll, options: Option[], members: TeamMember[]) {
    //     this.id = UUID.UUID();
    //     this.name = poll.name;
    //     this.members = members;
    //     this.options = options;
    //     this.teamId = poll.teamId;
    // }

    id: string;
    name: string;
    members: TeamMember[];
    options: Option[];
    pollId: string;
    teamName: string;
    dataChart: DataChart[];
}
