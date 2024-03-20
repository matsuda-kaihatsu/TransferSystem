import { Component } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  title = 'my-app';

  str: string = "";

  constructor(private service: ListService){
  }  

  getList(): void{
    this.service.getList().subscribe(x => console.log(x));
  }
}
