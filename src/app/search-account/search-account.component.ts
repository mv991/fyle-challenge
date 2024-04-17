import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-account',
  templateUrl: './search-account.component.html',
  styleUrls: ['./search-account.component.scss']
})


export class SearchAccountComponent {
@Output() newItemEvent = new EventEmitter<string>();

 ngOnInit() {
  
  }
 searchAccount(value: string) {
    if(!value) {
        alert("Please enter A account too search");
        return;    
    }
    console.log(value,"value")
    this.newItemEvent.emit(value);
  }
}
