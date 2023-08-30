export class Plato {

    public argument: PlatoArgument;

    private _truth: boolean | undefined | null;

    constructor(argument: PlatoArgument) {
        this.argument = argument;
        this.defineTruth();
    }

    private defineTruth() {
        switch (this.argument) {
            case PlatoArgument.TRUE || PlatoArgument.ABOVE_HALF: {
                this._truth = true;
                break;
            }
            case PlatoArgument.FALSE || PlatoArgument.BELOW_HALF: {
                this._truth = false;
                break;
            }
            case PlatoArgument.UNDEFINED: {
                this._truth = undefined;
                break;
            }
            default:
                this._truth = null;
        }
    }

    get truth(): boolean | undefined | null {
        return this._truth;
    }
}

export enum PlatoArgument {
    FALSE,
    TRUE,
    UNDEFINED,
    BELOW_HALF,
    ABOVE_HALF
}