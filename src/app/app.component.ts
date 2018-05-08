import { Component, OnInit } from "@angular/core";

import ICard from "./../interfaces/ICard";
import Deck from "./../classes/Deck";

@Component({
	selector: "gw-root",
	templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
	// write component code here; create just the properties and methods you need to get the job done
	// as described in "app.html"; start by importing ES modules you need such as "./../classes/Deck"
	//
	// raise your hand (or scream) for questions - this is challenging!
	//
	// remember to make everything which does not need to be bound in your HTML template or shared with
	// other code "private" to limit the chances of confusion and unwanted side-effects
	//
	// "private" makes helper methods and properties necessary for this component to work "limited" to
	// this component

	private _deck: Deck;
	public usersHand: ICard[];


	public ngOnInit(): void {
		// initialize properties here or inline with declarations - but be consistent!

		this._deck = new Deck();
		this.usersHand = [];
	}

	public pickACard(): void {
		this.usersHand.unshift(this._deck.drawCard());
	}

	public returnCardToDeck(card): void {
		this.usersHand.splice(this.usersHand.indexOf(card), 1);
		this._deck.returnCardToDeck(card);
	}
}
