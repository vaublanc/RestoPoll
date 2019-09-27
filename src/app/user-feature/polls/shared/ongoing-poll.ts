import { DataChart } from './data-charts';
import { Poll } from './poll';
import { UUID } from 'angular2-uuid';
import { TeamMember } from '../../team-members/shared/teamMember';
import { Option } from '../options/shared/option';
import { Team } from '../../teams/shared/team';

export class OngoingPoll {

    constructor(poll: Poll, options: Option[], members: TeamMember[], team: Team) {
        this.id = UUID.UUID();
        this.name = poll.name;
        this.members = members;
        this.options = options;
        this.pollId = poll.id;
        this.teamName = team.name;
    }

    id: string;
    name: string;
    members: TeamMember[];
    options: Option[];
    pollId: string;
    teamName: string;
    dataChart: DataChart[];
}
