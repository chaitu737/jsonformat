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
  columns: string[];
  character: Array<any>
  names: Array<any>;
  personInfos: Array<any>;
  selectPerson = 0;
  currentData: any;

  constructor(
    private attendenceservice: AttendenceService
  ) { }
  // always its better to Camelcase function in JS 
  // renames nameList from namelist
  // in typescript and ES6 specs it is recommended to use `const` and `let` based on usage instead of `var` 
  nameList() {
    const personKey = 'Name of Person';
    this.attendenceservice.getnamelist().subscribe(data =>{
      data.map((person: Object, idx: number) => {
        if(idx == 0) {
          this.columns = Object.keys(person);
          this.currentData = person;
        }
        this.names.push({
          name: person[personKey],
          id: idx
        });
        this.personInfos.push(person);
      });
    });
  }
  ngOnInit() {
    this.nameList();
  }

  personChange(event) {
    this.currentData = this.personInfos[this.selectPerson];
  }

}
