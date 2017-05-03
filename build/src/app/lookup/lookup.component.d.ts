import { OnInit } from '@angular/core';
import { LocalDBService } from '../localdb.service';
import { BldgtransportService } from '../bldgtransport.service';
import { Router } from '@angular/router';
export declare class LookupComponent implements OnInit {
    private router;
    private localdb;
    private trans;
    err: String;
    bldg: string;
    doc: String;
    constructor(router: Router, localdb: LocalDBService, trans: BldgtransportService);
    ngOnInit(): void;
    sub(): void;
}
