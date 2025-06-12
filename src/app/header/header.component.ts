import { Component } from "@angular/core";

@Component({
    selector: "app-header",                 // html custom tag that cand be used to refference this component
    standalone: true,                       // makes it easier to use the component
    templateUrl: "./header.component.html",  // refference to the html
    styleUrl: "./header.component.css"
})
export class HeaderComponent{

}