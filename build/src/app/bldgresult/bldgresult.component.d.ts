import { OnInit } from '@angular/core';
import { BldgtransportService } from '../bldgtransport.service';
export declare class BldgResultComponent implements OnInit {
    private bldg;
    msg: any;
    constructor(bldg: BldgtransportService);
    ngOnInit(): void;
}
