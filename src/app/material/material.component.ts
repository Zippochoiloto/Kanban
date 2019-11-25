import { Component, OnInit, ViewChild } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { NgModel } from "@angular/forms";
import { MatIconRegistry } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
{
  MatIconRegistry;
}

@Component({
  selector: "app-material",
  templateUrl: "./material.component.html",
  styleUrls: ["./material.component.css"]
})
export class MaterialComponent implements OnInit {
  // public todo = [
  //   "Learn Angular Material",
  //   "Code Kanban Board App",
  //   "Code Final Project"
  // ];
  public todo = [
    { id: 1, name: "ANGULAR" },
    { id: 2, name: "html" },
    { id: 3, name: "css" },
    { id: 4, name: "node js" }
  ];
  Doing = [{ id: 1, name: "Kang Ban" }];

  Done = [{if:1,name: "Learn HTML"},{id:2,name:"Learn CSS"}];

  binding;
  nameimage = [];
  addDoing = "";
  addDone = "";

  listName = "";
  @ViewChild("todoList", { static: false }) todoList;
  ngOnInit() {}
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  constructor() {}
  newToDoValue: string = "";
  onAddClickHandler() {
    if (this.newToDoValue) {
      this.todo.push({ id: this.todo.length + 1, name: this.newToDoValue });
    }
  }

  onDoingClickHandler() {
    if (this.addDoing) {
      this.Doing.push({ id: this.Doing.length + 1, name: this.addDoing });
    }
    this.addDoing = "";
  }

  onDoneClickHandler() {
    if (this.addDone) {
      this.Done.push({ id: this.Done.length + 1, name: this.addDone });
    }
    this.addDone = "";
  }

  onToDoDelete = value => {
    this.todo.splice(this.todo.indexOf(value), 1);
  };

  onDoingDelete = value => {
    this.Doing.splice(this.Doing.indexOf(value), 1);
  };

  onDoneDelete = value => {
    this.Done.splice(this.Done.indexOf(value), 1);
  };

  check1 = true;
  onDeleteToDoClick() {
    this.check1 = false;
    return this.check1;
  }

  check2 = true;
  onDeleteDoingClick() {
    this.check2 = false;
    return this.check2;
  }

  check3 = true;
  onDeleteDoneClick() {
    this.check3 = false;
    return this.check3;
  }

  onAddHandler() {
    console.log(this.listName);
  }
}
