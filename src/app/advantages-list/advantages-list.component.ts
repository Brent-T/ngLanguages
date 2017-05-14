import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'advantages-list',
	templateUrl: './advantages-list.component.html',
	styleUrls: ['./advantages-list.component.css']
})

export class AdvantagesList implements OnInit {
    public title: String;
    public advantages: Object[];

    ngOnInit() {
        this.title = "Uw voordeel";
        this.advantages = [
            { icon: 'assets/icon-savings.png' },
            { icon: 'assets/icon-settlement.png' },
            { icon: 'assets/icon-service.png' },
        ];
    }
}
