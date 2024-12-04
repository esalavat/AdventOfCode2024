import fs from 'fs';
import DebugLog from '../utils/DebugLog';

const args: string[] = process.argv;//.slice(2);

const isDebug: boolean = args.length > 2 ? Boolean(args[2]) : false;
console.log(isDebug);
const debug = new DebugLog(isDebug);

const filename: string = !isDebug ? 'src/02/input.txt' : 'src/02/example.txt';

function part1(input: string) {
    
    const lines = input.split('\n');
    
    let sumSafe = 0;
    
    outer: for(let line of lines) {
        let increase: boolean | null = null;
        
        const nums: number[] = line.split(' ').map((num) => parseInt(num));

        for(let i=1; i<nums.length; i++) {
            const previous = nums[i-1];
            const current = nums[i];

            debug.log(`i: ${i} | previous: ${previous} | current: ${current}`);

            if(increase == null) {
                increase = previous < current;
            }

            if(increase != previous < current) {
                debug.log("change increase/decrease");
                continue outer;
            }

            const distance = Math.abs(current-previous);

            if(distance == 0 || distance > 3) {
                debug.log("bad distance.");
                continue outer;
            }
        }

        sumSafe++;
    }

    return sumSafe;
}

function part2(input: string) {
    return "nothing";
}

fs.readFile(filename, 'utf-8', (err, data) => {
    if(err) {
        console.log(`Error reading the file ${filename}:`, err);
    }

    console.log("part1: ", part1(data));
    console.log("part2: ", part2(data));
});