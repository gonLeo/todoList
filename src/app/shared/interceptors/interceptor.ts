import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IHttpResult } from '../interfaces/IHttpResult';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

    constructor(

    ){ }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<IHttpResult<any>>> {
        const headers = new HttpHeaders({
            'Curso-angular' : new Date().toUTCString()
        });

        req = req.clone({headers});
        return next.handle(req).pipe(
            map((event: HttpEvent<any>)=> {
                if(event instanceof HttpResponse){
                    const cloneEvent = event.clone({
                        body:{
                            success: true,
                            data: event.body || [],
                            error: undefined
                        }
                    });
                    return cloneEvent;
                }
            }),
            catchError((error: HttpErrorResponse) => {
                return throwError({
                    success : false,
                    data: undefined,
                    error
                });
            }),
        )
    }
}