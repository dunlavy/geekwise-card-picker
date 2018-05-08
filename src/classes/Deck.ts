import ICard from "./../interfaces/ICard";

export default class Deck {
	private readonly _cards: ICard[];
	private readonly _cardRanks: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
	private readonly _cardSuits: string[] = ["♡", "♤", "♧", "♢"];

	private _buildCards(): void {
		for (const rank of this._cardRanks)
			for (const suit of this._cardSuits)
				this._cards.push({
					rank,
					suit
				});
	}

	constructor() {
		console.log("A new deck instance created: ", this._cards);

		this._cards = [];
		this._buildCards();
	}

	public drawCard(): ICard {
		const randomCardIndex = Math.floor(Math.random() * this._cards.length);   // fancy psuedo-random stuff
		const card = this._cards[randomCardIndex];                                // fetch myself a reference to the card I'm drawing
		this._cards.splice(randomCardIndex, 1);                                   // remove it from the array so it won't be drawn again

		return card;
	}

	public getRemainingCardCount(): number {
		return this._cards.length;                                                // _cards is private; a method is used to expose just length
	}

	public returnCardToDeck(card: ICard): void {                                 // this will take a card and put it back into the deck
		this._cards.push(card);                                                   // but be sure to remove that card from the user hand!
	}                                                                            // (that must be handled by your component)
}
