import { OnInit } from '@angular/core';
import { LocalDBService } from './localdb.service';
export declare class AppComponent implements OnInit {
    private localdb;
    constructor(localdb: LocalDBService);
    init(): void;
    ngOnInit(): void;
}
