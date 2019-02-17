import { Component, OnInit, NgModule } from '@angular/core';


import { CommonModule } from "@angular/common";
import { AttendenceService } from '../services/attendence.service';


@NgModule({
  imports:[CommonModule],
  declarations:[PersonComponent]
})

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  attendencelist;
  columns:string[];
  character:Array<any>
  names:Array<any>;

  constructor(
    private attendenceservice:AttendenceService
  ) {
  
   }

    namelist(){
this.attendenceservice.getnamelist().subscribe(data =>{
          var p= Object.values(data);
           for(var i=0;i<p.length;i++){
           var keys=['Name of Person']
         Object.keys(p[i]).forEach(function(key){
           if(keys.indexOf(key)!=-1){
             var values=p[i][key]
              var arr= Object.values(values.split());
              this.character=Object.assign(arr)
    
              }
          
             })
             
             
            }

          
})
}
  ngOnInit() {
    
    this.namelist();
    
  
  }

}
