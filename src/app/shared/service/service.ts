import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Config } from '../config/env.config';
import * as data from '../data/data.json';
import * as funData from '../data/function.json';

@Injectable()
export class Service {

    private host: string = Config.HOST;
    private listData = <any>data;
    private functionData = <any>funData;

    constructor(private http: HttpClient) {
    }

    getListData(): Observable<any> {
        const params = new HttpParams()
            .set('id', '1');
        return this.getHttp(Config.HOST + 'gets', { params }, 1);
    }

    getData(): Observable<any> {
        const params = new HttpParams()
            .set('id', '1');
        return this.getHttp(Config.HOST + 'gets', { params }, 2);
    }

    getListById(listId: number): Observable<any> {
        let list: any;
        this.listData.forEach(element => {
            if (element.id === Number(listId)) {
                list = element;
            }

        });
        const observable = new Observable(observer => {
            observer.next(list);
        });
        return observable;
    }

    getHttp(url: string, params: any, value: number): Observable<any> {
        // return this.http.get<any>(url, params)
        //     .catch(this.handleErrorObservable);
        const observable = new Observable(observer => {
            if (value === 1) {
                observer.next(this.listData);
            } else {
                observer.next(this.functionData);
            }
        });
        return observable;
    }

    updateData(data: any): Observable<any> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        };
        const body = JSON.stringify(data);
        return this.http
            .post(Config.HOST + 'gets', body, httpOptions);
    }

    private handleErrorObservable(error: Response | any) {
        return Observable.throw(error.message || error);
    }

}
