export default class Set {
    private readonly items: number[];
    private amount: number = 0;
    private length: number = 0;
    private average: number = 0;
    private averageValuesSquare: number = 0;
    private variance: number = 0;

    constructor(items: number[]) {
        this.items = items;
    }

    static fromFrequencySet(frequencySet: number[][]): Set {
        let basicSet: number[] = [];
        frequencySet.forEach((item) => {
            for (let i=0; i < item[1]; i++){
                basicSet.push(item[0])
            }
        });
        return new Set(basicSet);
    }

    getAmount(): number {
        if (this.amount === 0) {
            this.items.forEach((item) => {
                this.amount += item
            })
        }
        return this.amount
    }

    getLength(): number {
        if (this.length === 0) {
            this.items.forEach(() => {
                this.length += 1
            })
        }
        return this.length
    }

    getAverage(): number {
        if (this.average === 0) {
            return this.getAmount() / this.getLength();
        }
        return this.average
    }

    sortAscending() {
        this.items.sort(function(a, b){
            return a - b
        });
    }

    getItems(): number[] {
        return this.items;
    }

    getMin(): number {
        this.sortAscending();
        return this.items[0];
    }

    getMax(): number {
        this.sortAscending();
        return this.items[this.getLength() - 1]
    }

    isPair(): boolean {
        let half = this.getLength() / 2;
        let nth = Math.round(half);
        return half === nth;
    }

    getFirstQuartile(): number {
        this.sortAscending();
        if (this.isPair()){
            let nth = this.getLength() / 4;
            return (this.items[nth - 1] + this.items[nth]) / 2;
        } else {
            let nth = Math.round(this.getLength() / 4);
            return this.items[nth - 1]
        }
    }

    getThirdQuartile(): number {
        this.sortAscending();
        if (this.isPair()){
            let nth = (this.getLength() / 4) * 3 ;
            return (this.items[nth - 1] + this.items[nth]) / 2;
        } else {
            let nth = Math.round(this.getLength() / 4);
            return this.items[(nth * 3) - 1]
        }
    }

    getMedian(): number {
        this.sortAscending();
        let nth = this.getLength() / 2;
        if (this.isPair()){
            return (this.items[nth - 1] + this.items[nth]) / 2;
        }else{
            nth = Math.round(nth);
            return this.items[nth - 1]
        }
    }

    getAverageValuesSquare(): number {
        if (this.averageValuesSquare === 0) {
            this.items.forEach((item) => {
                this.averageValuesSquare += item * item
            })
        }
        return this.averageValuesSquare
    }

    getVariance(): number {
        if (this.variance === 0) {
            this.variance = (this.getAverageValuesSquare() / this.getLength()) - (this.getAverage() * this.getAverage())
        }
        return this.variance
    }
};