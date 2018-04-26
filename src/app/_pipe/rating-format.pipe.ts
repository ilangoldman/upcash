import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingFormat'
})
export class RatingFormatPipe implements PipeTransform {

  transform(value: number): string {
    let rating: string;
    if (value < 4) {
      rating = 'A' + value;
    } else if (value < 10) {
      rating = 'B' + (value - 3);
    } else if (value < 13) {
      rating = 'C' + (value - 9);
    } else {
      rating = 'D' + (value - 12);
    }
    return rating;
  }
}
