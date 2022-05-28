import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingScreenService {

  private _loading: boolean = false;
  private _loadingTxt: boolean = false;

  loadingStatus: Subject<boolean> = new Subject();
  loadingText: Subject<string> = new Subject();

  get loading():boolean {
    return this._loading;
  }

  set loading(value) {
    this._loading = value;
    this.loadingStatus.next(value);
  }


  get loadingTxt() {
    return  this._loadingTxt;
  }

  set loadingTxt(value) {
    this._loadingTxt = value;
    this.loadingText.next(`${value}`);
  }

  startLoading(text) {
    this.loading = true;
    this.loadingTxt = text;
  }

  stopLoading() {
    this.loading = false;
  }
}
