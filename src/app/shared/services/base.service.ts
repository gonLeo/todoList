import { HttpClient } from "@angular/common/http";
import { Inject, Injector } from "@angular/core";
import { rejects } from "assert";
import { environment } from "src/environments/environment";
import { IHttpResult } from "../interfaces/IHttpResult";


export abstract class BaseService<T>{
    urlBase: string = '';
    http: HttpClient;
    private urlBaseOriginal : string;

    constructor(
        public url : String,
        @Inject(Injector) injector : Injector
    ){
        this.urlBase = `${environment.url_api}/${this.url}`;
        this.urlBaseOriginal = `${environment.url_api}/${this.url}`;
        this.http = injector.get(HttpClient);
    }

    setParamsFromUrl(fields: string[], values: any[]){
        this.urlBase = this.urlBaseOriginal;
        fields.forEach((f, i) => {
            this.urlBase = this.urlBase.replace(f, values[i]);
        })
    }

    //TODO 56MIN

    public async GetAll(): Promise<T[]>{
        const { success, data } = await this.http.get<IHttpResult<T[]>>(`${this.urlBase}`).toPromise();
        if (success){
            return data;
        }else{
            return [];
        }
    }

    public async GetById(id:number) : Promise<IHttpResult<T>>{
        const result = await this.http.get(`${this.urlBase}/${id}`).toPromise();
        return result as IHttpResult<T>;
    }

    public post(model: T): Promise<IHttpResult<T>>{
        return this.http.post(this.urlBase, model).toPromise() as Promise<IHttpResult<T>>;
    }

    public async delete(model: T){
        return new Promise(async (resolve, reject) => {
            if(confirm("Deseja realmente excluir?")){
                const result = await this.http.delete(`${this.urlBase}/${model['id']}`).toPromise();
                resolve();
            }
        })
    }
}