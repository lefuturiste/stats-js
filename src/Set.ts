export default class Set {
    private items: number[];
    private amount: number = 0;
    private length: number = 0;

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
        return this.getAmount() / this.getLength();
    }
};