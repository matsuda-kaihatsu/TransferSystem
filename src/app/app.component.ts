import { Component } from '@angular/core';
import { ListService } from './services/list.service';;
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,MainComponent,SideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  str: string = "";

  constructor(private service: ListService){
  }  

  getList(): void{
    this.service.getList().subscribe(x => console.log(x));
  }
}
