import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filters, singleFilter } from './filter-data';
import { rock } from 'src/app/Data/rock';
import { vinyls } from 'src/app/Data/vinyls';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  filterData:any;
  singleFilterData:any;
  vinyls:any;

  constructor(private router: Router, private activatedRoute:ActivatedRoute){}

  ngOnInit(){
    this.filterData = filters;
    this.singleFilterData = singleFilter;
    this.vinyls = vinyls;
  }

  multipleFilter(value:string, sectionId:string){
    const queryParams = {...this.activatedRoute.snapshot.queryParams};
    const filterValues = queryParams[sectionId]?queryParams[sectionId].split(','):[];
    const valueIndex = filterValues.indexOf(value);
    console.log('sectionId', sectionId)
    console.log('queryParams', queryParams)
    if(valueIndex != -1){
      filterValues.splice(valueIndex, 1);
    }else{
      filterValues.push(value);
    }
    if(filterValues.length>0){
      queryParams[sectionId] = filterValues.join(',');
    }else{
      delete queryParams[sectionId];
    }
    this.router.navigate([], {queryParams});
  }

  singleSelectFilter(value:string, sectionId:string){
    const queryParams = {...this.activatedRoute.snapshot.queryParams};
    const filterValues = queryParams[sectionId]?queryParams[sectionId].split(','):[];
    const valueIndex = filterValues.indexOf(value);
    if(valueIndex != -1){
      filterValues.splice(valueIndex, 1);
    }else{
      filterValues.push(value);
    }

    if(filterValues.length>0){
      queryParams[sectionId] = filterValues.join(',');
    }else{
      delete queryParams[sectionId];
    }

    this.router.navigate([], {queryParams});
  }
}
