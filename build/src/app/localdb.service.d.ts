export declare class LocalDBService {
    db: any;
    remoteDB: any;
    ival: any;
    cleari: boolean;
    constructor();
    private cleanup();
    private sync();
    init(): void;
    get(pull: string): Promise<String>;
}
