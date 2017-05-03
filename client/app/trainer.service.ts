import { Injectable} from 'angular2/core';
import { Http, Headers } from 'angular2/http';
@Injectable()
export class TrainerService {
    http: Http;
    constructor(http: Http) {
        this.http = http;
    }

    getTrainers() {
        return this.http.get('http://localhost:8000/api/trainers');
    }

    getTrainerById(id){
        return this.http.get('http://localhost:8000/api/trainers/'+id)
    }
}