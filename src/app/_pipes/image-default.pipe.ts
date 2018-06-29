import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageDeafault'
})
export class ImageDefaultPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    // if (!value) {
    //   return 'http://via.placeholder.com/380x380';
    // } else {
    return value;
    // }
  }

}
