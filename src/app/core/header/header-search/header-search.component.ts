import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService} from '../../../product/shared/product.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent implements OnInit, OnDestroy {


  resultsArray: any;
  stringToSearch: string;
  searchFormReactive: FormGroup;
  closeIconStatus = false;
  subscription_getDataToSearch: Subscription;


  constructor(private productFirestoreService: ProductService,
  ) {

  }

  ngOnInit() {
    this.searchFormReactive = new FormGroup({
      search: new FormControl('')
    });
  }

  getAllSearch() {  // trigger on submit and on keyup event, need submit for reset!
    this.productFirestoreService.searchCloseClicked.emit(false);
    if (!this.searchFormReactive.value.search) {
      this.resetForm();
    }

    this.subscription_getDataToSearch = this.productFirestoreService.getDataToSearch()
      .subscribe( data => {
        this.resultsArray = data.filter(item => {
          console.log(item);
          if (this.searchFormReactive.value.search && this.searchFormReactive.value.search.length > 0) {
            this.stringToSearch = this.searchFormReactive.value.search;
          } else {
            this.stringToSearch = 'nichtsAusgebenDasGibtEsNicht159753';
          }
          return (item.name.toLowerCase().includes(this.stringToSearch.toLocaleLowerCase()) && item.active === true);

        });
        // https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/
        this.productFirestoreService.changeMessage(this.resultsArray);  // RxJS BehaviorSubject
      });
  }

  showCloseIcon() {
    setTimeout(() => {
      this.closeIconStatus = true;
    }, 400);  // on focus delay show x
  }
  hideCloseIcon() {
    this.closeIconStatus = false;
    this.searchFormReactive.reset();
    setTimeout(() => {
      this.productFirestoreService.searchCloseClicked.emit(true);
    }, 100); // on form blur reset form
  }

  resetForm() {
    this.closeIconStatus = false;
    this.searchFormReactive.reset();
    setTimeout(() => {
      this.productFirestoreService.searchCloseClicked.emit(true);
    }, 100);

  }

  ngOnDestroy() {
    this.subscription_getDataToSearch.unsubscribe();
  }


}
