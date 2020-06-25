import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductionLine} from './production-line/production-line';
import {ApiService} from '../share/api.service';
import {Robot} from './robot/robot';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {RobotComponentComponent} from './robot-component/robot-component.component';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {
  productionLines: ProductionLine[] = [];
  robots: Robot[] = [];
  constructor(private apiService: ApiService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllProductionLines();
  }

  public getAllProductionLines() {
    const url = 'http://localhost:8080/api/lines';
    this.apiService.getAllProductionLines().subscribe(
      response => {
        this.productionLines = response;
      },
      error => {
        alert('An arror has occured getting all product lines;');
      }
    );
  }

  createProductionLine() {
    let newProductionLine: ProductionLine = {
      id: null,
      name: 'New Production Line',
      type: null,
      nbOfRobots: 0
    };
    this.apiService.postProductionLine(newProductionLine).subscribe(
      response => {
        newProductionLine.id = response.id;
        this.productionLines.push(newProductionLine);
      },
      error => {
        alert('An error during saving Production Line');
      }
    );
  }

  updateProductionLine(updatedProductionLine: ProductionLine) {
    this.apiService.postProductionLine(updatedProductionLine).subscribe(
      response => {

      },
      error => {
        alert('An error during updating Production Line');
      }
    );
  }

  deleteProductionLine(productionLine: ProductionLine) {
    if (confirm('Do you really want to delete this line?')){
      this.apiService.deleteProductionLine(productionLine.id).subscribe(
        response => {
          let indexOfProductionLine = this.productionLines.indexOf(productionLine);
          this.productionLines.splice(indexOfProductionLine, 1);
        },
        error => {
          alert('Error during Production Line delete');
        }
      );
    }
  }

  getAllRobotsFromProductionLine(productionLine: ProductionLine) {
    this.apiService.getAllRobotsFromProductionLine(productionLine.id).subscribe(
      response => {
        let indexOfProductionLine = this.productionLines.indexOf(productionLine);
        this.robots = response;
      },
      error => {
        alert('An error has occured during getting all Robots;');
      }
    );
  }

  createRobot() {
    const newRobot: Robot = {
      id: null,
      name: 'New Robot',
      maxRange: 0,
      maxLoad: 0,
      lineId: '1'
    };
    this.apiService.postRobotToProductionLine(newRobot).subscribe(
      response => {
        newRobot.id = response.id;
        this.robots.push(newRobot);
      },
      error => {
        alert('An error during saving Robot');
      }
    );
  }

  updateRobot(updatedRobot: Robot) {
    this.apiService.putRobotToProductionLine(updatedRobot).subscribe(
      response => {
        updatedRobot.id = response.id;
        updatedRobot.name = response.name;
        updatedRobot.maxRange = response.maxRange;
        updatedRobot.maxLoad = response.maxLoad;
        updatedRobot.lineId = response.lineId;
      },
      error => {
        alert('An error during updating Robot');
      }
    );
  }

  deleteRobot(robot: Robot) {
    if (confirm('Do you really want to delete this robot?')){
      this.apiService.deleteRobotFromProductionLine(robot).subscribe(
        response => {
          let indexOfRobot = this.robots.indexOf(robot);
          this.robots.slice(1, indexOfRobot);
        },
        error => {
          alert('Error during Production Line delete');
        }
      );
    }
  }
}
