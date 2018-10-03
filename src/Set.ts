export default class Set {
    private readonly items: number[];
    private amount: number = 0;
    private length: number = 0;
    private average: number = 0;
    private averageValuesSquare: number = 0;
    private variance: number = 0;
    private standardDeviation: number = 0;

    constructor(items: number[]) {
        this.items = items;
    }

    static fromFrequencySet(frequencySet: number[][]): Set {
        let basicSet: number[] = [];
        frequencySet.forEach((item) => {
            for (let i = 0; i < item[1]; i++) {
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

    getValuesSum(): number {
        return this.getAmount()
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
        this.items.sort(function (a, b) {
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
        if (this.isPair()) {
            let nth = this.getLength() / 4;
            return (this.items[nth - 1] + this.items[nth]) / 2;
        } else {
            let nth = Math.round(this.getLength() / 4);
            return this.items[nth - 1]
        }
    }

    getSecondQuartile(): number {
        return this.getMedian()
    }

    getThirdQuartile(): number {
        this.sortAscending();
        if (this.isPair()) {
            let nth = (this.getLength() / 4) * 3;
            return (this.items[nth - 1] + this.items[nth]) / 2;
        } else {
            let nth = Math.round(this.getLength() / 4);
            return this.items[(nth * 3) - 1]
        }
    }

    getMedian(): number {
        this.sortAscending();
        let nth = this.getLength() / 2;
        if (this.isPair()) {
            return (this.items[nth - 1] + this.items[nth]) / 2;
        } else {
            nth = Math.round(nth);
            return this.items[nth - 1]
        }
    }

    getDecile(level: number): number {
        this.sortAscending();
        if (level == 0) {
            return 0;
        }
        let nth = (this.getLength() / 10) * level;
        return this.items[Math.ceil(nth) - 1]
    }

    getFirstDecile(): number {
        return this.getDecile(1)
    }

    getNinthDecile(): number {
        return this.getDecile(9)
    }

    getHash(): number {
        let str = (this.getAverage() + this.getValuesSquareSum() + this.getLength() + this.getStandardDeviation()).toString();
        let hash = 0, i, chr;
        if (str.length === 0) return hash;
        for (i = 0; i < this.length; i++) {
            chr   = str.charCodeAt(i);
            hash  = ((hash << 5) - hash) + chr;
            hash |= 0;
        }
        return hash
            ;
    }

    getValuesSquareSum(): number {
        if (this.averageValuesSquare === 0) {
            this.items.forEach((item) => {
                this.averageValuesSquare += item * item
            })
        }
        return this.averageValuesSquare
    }

    getVariance(): number {
        if (this.variance === 0) {
            this.variance = (this.getValuesSquareSum() / this.getLength()) - (this.getAverage() * this.getAverage())
        }
        return this.variance
    }

    getStandardDeviation(): number {
        if (this.standardDeviation === 0) {
            this.standardDeviation = Math.sqrt(this.getVariance())
        }
        return this.standardDeviation;
    }
};