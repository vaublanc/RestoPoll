import { DataChart, Series } from './../shared/data-charts';
import { OngoingPoll } from './../shared/ongoing-poll';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PollService } from '../shared/poll.service';
import { TeamMember } from '../../team-members/shared/teamMember';

@Component({
  selector: 'app-ongoing-polls',
  templateUrl: './ongoing-polls.component.html',
  styleUrls: ['./ongoing-polls.component.css']
})
export class OngoingPollsComponent implements OnInit {

  currentOngoingPoll: OngoingPoll;
  teamMembers: TeamMember[] = [];
  data: DataChart[] = [];
  dimension = [1000, 200];

  constructor(
    private route: ActivatedRoute,
    private pollService: PollService,
  ) { }

  ngOnInit() {
    this.getOngoingPoll();
  }

  getOngoingPoll(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.pollService.getOngoingPoll(id).subscribe(
      ongoingPollreturned => {
        this.currentOngoingPoll = ongoingPollreturned;
        if (!this.currentOngoingPoll.dataChart) {
          this.buildChart();
        }
        this.data = this.currentOngoingPoll.dataChart;
      }
    );
  }

  buildChart(): void {
    this.currentOngoingPoll.options.forEach(option => {
      const bar: DataChart = new DataChart(option.name);
      const vote: Series = new Series('test');
      bar.series.push(vote);
      this.data.push(bar);
    });
  }
}
