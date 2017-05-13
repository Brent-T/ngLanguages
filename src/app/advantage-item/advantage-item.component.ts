import { Component, Input } from '@angular/core';

@Component({
	selector: 'advantage-item',
	templateUrl: './advantage-item.component.html',
	styleUrls: ['./advantage-item.component.css']
})

export class AdvantageItem {
    @Input() advantage: Object;
}
