export class DataChart {

    constructor(optionName: string) {
        this.name = optionName;
        this.series = [];
    }

    name: string;
    series: Series[];
}

export class Series {

    constructor(teamMemberName: string) {
        this.name = teamMemberName;
        this.value = 1;
    }

    name: string;
    value: number;
}
