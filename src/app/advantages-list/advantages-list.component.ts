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
            {
                icon: 'assets/icon-savings.png',
                title: 'Betere opbrengst',
                text: 'Yuso streeft ernaar haar klanten de hoogst mogelijke prijs te bieden voor de door hen geproduceerde groene energie. Deze prijs kan makkelijk tot 20% hoger liggen dan uw huidige verkoopprijs.'
            },
            {
                icon: 'assets/icon-settlement.png',
                title: 'Eenvoudige afrekening',
                text: 'Yuso brengt u maandelijks op de hoogte van de opbrengst van uw installatie met een transparante afrekening. U ontvangt uw geld steeds binnen de maand zonder bijkomende administratie door gebruik te maken van self-billing.'
            },
            {
                icon: 'assets/icon-service.png',
                title: 'Premium service',
                text: 'Yuso verstrekt deskundig advies voor wat betreft de prestaties van uw installatie. Als Yuso klant houden wij uw investering voortdurend in de gaten. Aldus kunnen wij u wijzen op mogelijke gebreken en opportuniteiten.'
            },
        ];
    }
}
