import * as collections from "@std/collections";

// https://jsr.io/@std/collections/doc

const transactions = {
    "milk": [1.99, 3.97, 5.95, 2.98, 3.97],
    "bread": [2.99, 3.99, 4.99, 5.99],
    "eggs": [0.99, 1.99, 2.99, 3.99, 4.99],
};

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function showAggregateGroups() {
    const totals = collections.aggregateGroups<number, number>(
        transactions,
        (curr, _key, isFirst, acc) => {
            if (isFirst) {
                acc = curr;
            }
            return acc! += curr;;
        }
    );
    console.log(totals);
}

function showChunking() {
    const chunks = collections.chunk(alphabet, 5);
    console.log(chunks);
}

if (import.meta.main) {
    // showAggregateGroups();
    showChunking();
}