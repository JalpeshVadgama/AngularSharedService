import { Component, OnInit } from "@angular/core";
import { SharedService } from "./shared.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "AngularSharedService";
  constructor(private sharedService: SharedService) {}
  message: string = "";
  public ngOnInit() {
    this.sharedService.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }
  public onClick(): void {
    this.sharedService.changeMessage("Hello from parent");
  }
}
