export default class DebugLog {
    private isDebug: boolean;

    constructor(isDebug: boolean) {
        this.isDebug = isDebug;
    }

    log(...args: any[]): void {
        if(this.isDebug) {
            console.log(...args);
        }
    }
}