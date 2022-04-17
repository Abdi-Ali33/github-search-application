import { Pipe, PipeTransform } from '@angular/core';
import {GitsearchService} from './service/gitsearch.service'
import{ Repository } from './repository';

@Pipe({
  name: 'bolden'
})
export class BoldenPipe implements PipeTransform {

  transform(value: string): any {
    return value.toUpperCase();
  }

}