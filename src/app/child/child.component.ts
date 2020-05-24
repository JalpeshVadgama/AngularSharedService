import { Component, OnInit } from "@angular/core";
import { SharedService } from "./../shared.service";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent implements OnInit {
  constructor(private sharedService: SharedService) {}
  message: string = "";
  ngOnInit(): void {
    this.sharedService.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }
  public onClick(): void {
    this.sharedService.changeMessage("Hello from child component");
  }
}
