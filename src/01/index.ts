import fs from 'fs';

const args = process.argv;//.slice(2);

const debug: boolean = args.length > 2 ? Boolean(args[2]) : false;

function part1(input: string){
    const lines = input.split('\n');

    let list1: Array<number> = [];
    let list2: Array<number> = [];

    for (const line of lines) {
        const cols = line.split(/\s+/); //split on any number of spaces

        if(cols.length === 2) {
            list1.push(Number(cols[0]));
            list2.push(Number(cols[1]));
        }
    }
    
    list1.sort();
    list2.sort();

    let sum: number = 0;

    sum = list1.map((value: number, index) => Math.abs(list2[index]-value)).reduce((a, b) => a+b, 0);

    return sum;
}

const filename = !debug ? 'src/01/input.txt' : 'src/01/example.txt';

fs.readFile(filename, 'utf-8', (err, data) => {
    if(err) {
        console.log(`Error reading the file ${filename}:`, err);
    }

    console.log('part1:', part1(data));
});