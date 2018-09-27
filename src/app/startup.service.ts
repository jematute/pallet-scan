import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from './classes/appsettings';
@Injectable()
export class StartupService {

    private _startupData: AppSettings;

    constructor(private http: HttpClient) { }

    // This is the method you want to call at bootstrap
    // Important: It should return a Promise
    load(): Promise<any> {

        this._startupData = null;

        return this.http.get('./assets/appsettings.json')
        .pipe(map(resp => this._startupData = resp as AppSettings))
        .toPromise();
    }

    get startupData(): AppSettings {
        return this._startupData;
    }
}
