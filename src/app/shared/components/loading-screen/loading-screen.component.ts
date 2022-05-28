import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { LoadingScreenService } from '../../Services/loading-screen.service';


@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss'],
})
export class LoadingScreenComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  loadingSubscription: Subscription;  
  loadingText: string = 'Loading...';
  loadingTextSubscription: Subscription;

  constructor(public loadingScreenService: LoadingScreenService ) {}

  ngOnInit() {
    this.loadingSubscription = this.loadingScreenService.loadingStatus.subscribe((value) => {
      this.loading = value;
    });

    this.loadingTextSubscription = this.loadingScreenService.loadingText.subscribe((value) => {
      this.loadingText = value ? value : 'Loading....';
    });
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
    this.loadingTextSubscription.unsubscribe();
  }
}
