import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../../product/shared/product.service';
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
  @ViewChild('search') searchField: ElementRef;


  constructor(private productService: ProductService,
  ) {

  }

  ngOnInit() {
    this.searchFormReactive = new FormGroup({
      search: new FormControl('')
    });
  }

  getAllSearch() {  // trigger on submit and on keyup event, need submit for reset!
    this.productService.searchCloseClicked.emit(false);
    if (!this.searchFormReactive.value.search) {
      this.resetForm();
    }

    this.subscription_getDataToSearch = this.productService.getDataToSearch()
      .subscribe(data => {
        this.resultsArray = data.filter(item => {
          if (this.searchFormReactive.value.search && this.searchFormReactive.value.search.length > 0) {
            this.stringToSearch = this.searchFormReactive.value.search;
          } else {
            this.stringToSearch = 'nichtsAusgebenDasGibtEsNicht159753';
          }
          return (item.name.toLowerCase().includes(this.stringToSearch.toLocaleLowerCase()) && item.active === true);

        });
        // https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/
        this.productService.changeMessage(this.resultsArray);  // RxJS BehaviorSubject
      });
  }

  showCloseIcon() {
    console.log('showCloseIcon');
    setTimeout(() => {
      this.closeIconStatus = true;
    }, 400);  // on focus delay show x
  }

  hideCloseIcon() {
    console.log('hideCloseIcon');
    this.closeIconStatus = false;
    this.searchFormReactive.reset();
    setTimeout(() => {
      this.productService.searchCloseClicked.emit(true);
      this.productService.changeMessage(0);
    }, 100); // on form blur reset form
  }

  resetForm() {
    console.log('resetForm');
    this.closeIconStatus = false;
    this.searchFormReactive.reset();
    setTimeout(() => {
      this.productService.searchCloseClicked.emit(true);
      this.productService.changeMessage(0);
    }, 100);

  }

  ngOnDestroy() {
    this.subscription_getDataToSearch.unsubscribe();
  }

  openSearchBox(): void {
    this.searchField.nativeElement.focus();
    this.showCloseIcon();
  }


}
