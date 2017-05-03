import {Component} from "angular2/core";
import { HTTP_PROVIDERS, Http, Response } from 'angular2/http';
import {TrainerService} from "./trainer.service";

@Component({
    selector:'app-comp',
    templateUrl:'app/app.html',
    providers:[TrainerService,HTTP_PROVIDERS]
})
export class AppComponent {
    title: string;
    message:string;
    trainers=[];
    trainer={};
    tid:number=0;
    constructor(public trainerService:TrainerService) {
        this.title = "Welcome to mean stack";
        this.message="we are learning  MEAN stack 2.0";
        this.trainerService.getTrainers().subscribe(
            (t)=>{
                this.trainers=JSON.parse(t._body);
                console.log(JSON.parse(t._body));
            }
        );
    }

    getTrainerById(){
         this.trainerService.getTrainerById(this.tid).subscribe(
            (t)=>{
                this.trainer=JSON.parse(t._body);
                console.log(JSON.parse(t._body));
            }
        );
    }
}