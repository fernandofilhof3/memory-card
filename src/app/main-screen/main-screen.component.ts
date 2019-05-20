import { Component, OnInit } from '@angular/core';
import { PokemonsCards } from '../const/pokemons.const';
import { Card } from '../models/card.model';

@Component({
    selector: 'app-main-screen',
    templateUrl: './main-screen.component.html',
    styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

    public pokemonConst = PokemonsCards;
    public cardList: Card[][] = [];
    public firstCard: Card;
    public secondCard: Card;

    constructor() { }

    ngOnInit() {
        this.createDeck();
    }

    public setCardValue(card: any) {
        if (!this.firstCard || !this.secondCard) {
            if (!this.firstCard)
                this.firstCard = card;
            else {
                this.secondCard = card;
                this.checkPair();
            }
        } else {
            card.fliped = false;
        }

    }

    private createDeck() {
        let addedCards = [];
        for (let i = 0; i < 4; i++) {
            this.cardList[i] = [];
            for (let j = 0; j < 4; j++) {
                let card = null,
                    min = 0,
                    max = PokemonsCards.length - 1;
                do {
                    card = PokemonsCards[this.randomInterval(min, max)];
                } while (addedCards.filter((x) => x.id === card.id).length >= 2)
                this.cardList[i][j] = card;
                addedCards.push(card);
            }
        }
        console.log(this.cardList);
    }

    private checkPair() {
        if (this.firstCard.id === this.secondCard.id)
            console.log('Iguais');
        else {
            setTimeout(() => {
                this.firstCard.fliped = false;
                this.secondCard.fliped = false;
                this.firstCard = null;
                this.secondCard = null;
            }, 850);
        }
    }

    private randomInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}