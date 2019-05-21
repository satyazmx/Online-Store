import { Component, OnInit ,Input} from '@angular/core';
import { BackendService } from '../../services/backend.service'
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() pageTitle : string;
  @Input() iconTitle : string;
  @Input() helpTitle : string;
  
   config;
   counter=1;
   userStatusColor="warn"
  constructor( private _backendService :BackendService ) { }

  ngOnInit() {
    this.counter =0;
    this.config = this._backendService.getConfig();
    this._backendService.getCount().subscribe(
      (res) =>{
        this.counter = res
      }
    )
    this._backendService.getColor().subscribe(
      (res)=>{
        this.userStatusColor = res ? 'primary' : 'warn'
      }
    )
  }

  
}