import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  messageSource = new BehaviorSubject("Angular default message");
  currentMessage = this.messageSource.asObservable();
  constructor() {}

  public changeMessage(message: string): void {
    this.messageSource.next(message);
  }
}
