import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  title = 'geekle-angular';
  superheroes: any[] = [
    { name: 'Elactigirl', code: 'EL' },
    { name: 'Batman', code: 'BA' },
    { name: 'Magneta', code: 'MA' },
    { name: 'Daredevil', code: 'DA' },
    { name: 'Wonder Woman', code: 'WW' }
  ];
  constructor(private elementRef:ElementRef) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('hero-button')
      .addEventListener('click', this.onClick.bind(this));
  }

  onClick(event: any) {
    console.log(event);
  }
}
