import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo;

  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(
      (response: any) => {
        if (response) {
          this.albumInfo = response;
          console.log('res: ', this.albumInfo);
        }
      },
      (error: any) => {
        if (error) {
          console.log('err: ', error);
        }
      }
    );
  }
}
