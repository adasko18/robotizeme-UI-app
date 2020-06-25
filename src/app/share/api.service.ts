import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductionLine} from '../elements/production-line/production-line';
import {Robot} from '../elements/robot/robot';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private URL = 'http://localhost:8080/api';
  private ALL_LINES_URL = `${this.URL}/lines`;
  private ADD_LINE_URL = `${this.URL}/lines`;
  private DELETE_LINE_URL = `${this.URL}/lines/`;
  private ROBOT_PATH_URL = `${this.URL}/lines/`;
  constructor(private http: HttpClient) {
  }
  getAllProductionLines(): Observable<ProductionLine[]>{
    return this.http.get<ProductionLine[]>(this.ALL_LINES_URL);
  }

  postProductionLine(productionLine: ProductionLine): Observable<ProductionLine>{
    return this.http.post<ProductionLine>(this.ADD_LINE_URL, productionLine);
  }

  deleteProductionLine(id: string): Observable<any>{
    return this.http.delete(this.DELETE_LINE_URL + id);
  }

  getAllRobotsFromProductionLine(id: string): Observable<Robot[]>{
    return this.http.get<Robot[]>(this.ROBOT_PATH_URL + id + `/robots`);
  }

  getRobotFromProductionLine(lineId: string, robotId: string): Observable<Robot>{
    return this.http.get<Robot>(this.ROBOT_PATH_URL + lineId + `/robots/` + robotId);
  }

  postRobotToProductionLine(robot: Robot): Observable<Robot>{
    return this.http.post<Robot>(this.ROBOT_PATH_URL + robot.lineId + `/robots/`, robot);
  }

  putRobotToProductionLine(robot: Robot): Observable<Robot>{
    return this.http.put<Robot>(this.ROBOT_PATH_URL + robot.lineId + `/robots/`, robot);
  }

  deleteRobotFromProductionLine(robot: Robot): Observable<any>{
    return this.http.delete(this.ROBOT_PATH_URL + robot.lineId + `/robots/` + robot.id);
  }

}
