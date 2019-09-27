import { TeamMember } from '../../team-members/shared/teamMember';

export interface Team {
  id: string;
  name: string;
  teamMembers: TeamMember[];
}
