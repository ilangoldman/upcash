
export class JSONAPI {
    private _data: any;
    private _included: ResourceObject[];

    public get data(): any {
        return this._data;
    }
    public set data(value: any) {
        this._data = value;
    }
    public get included(): ResourceObject[] {
        return this._included;
    }
    public set included(value: ResourceObject[]) {
        this._included = value;
    }
}

class ResourceObject {
    public type: String;
    public id: Number;
    public attributes;
    public relationships;
}
