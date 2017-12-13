import { Component,OnInit,NgModule } from '@angular/core';

//import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  sequence: any;
  createRow: boolean = false;
  showEdit: boolean = false;
  tableData: any[];
  private newAttribute: any = {};
  companyName: string;
  targetAmount: number;
  status: string;
  statusList:any[];

  constructor(){ 
    this.tableData = [
    {
      companyName: 'Data 1',
      target: 80,
      status: 'approved'
    },
    {
      companyName: 'Data 2',
      target: 200,
      status: 'researching'
    },
    {
      companyName: 'Data 3',
      target: 109,
      status: 'declined'
    },
    {
      companyName: 'Data 4',
      target: 103,
      status: 'pending'
    },
    {
      companyName: 'Data 5',
      target: 100.23,
      status: 'approval'
    }
  ];
  this.statusList = [{id:1,name:'researching'}, {id:2,name:'pending'},
  {id:3,name:'approval'}, {id:4,name:'approved'},{id:5,name:'declined'}];
  }
  ngOnInit() {
    this.status = this.statusList[1];
  }
  editRow(index){
    //this.router.navigate(['./home/dummy-table/edit-table.component']);
    this.showEdit = true;
    this.createRow = false;
    this.sequence =index;
  }
  addrow():void{
    //this.router.navigate(['./home/dummy-table/dummy-table.component']);
    this.showEdit = false;
    this.createRow = true;
  }

  deleteRow(index) {
      this.tableData.splice(index, 1);
  }
  submit(data,sequence){
    if(this.createRow){
      this.tableData.push({companyName: this.companyName,
      target: this.targetAmount,
      status: this.status});
      this.createRow = false;
    }else if(this.showEdit){
      //for loop
      for(let i = 0;this.tableData.length>i;i++){
        if(i === sequence){
          this.tableData[i] = data;
        }
      }
      this.showEdit = false;
    }
    
  }
  onInput($event) {
    $event.preventDefault();
    console.log('selected: ' + $event.target.value);
    this.status = $event.target.value;
  }

}
