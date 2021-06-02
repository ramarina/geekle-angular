import {Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  @Input() superheroes = [
    { name: 'Angular Elactigirl', code: 'EL' },
    { name: 'Angular Batman', code: 'BA' },
    { name: 'Angular Magneta', code: 'MA' },
    { name: 'Angular Daredevil', code: 'DA' },
    { name: 'Angular Wonder Woman', code: 'WW' }
  ];

  @Input() buttonLabel = 'Button from React'

  constructor(private elementRef:ElementRef) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('hero-button')
      .addEventListener('click', this.onClick.bind(this));
  }

  onClick(event: any) {
    console.log(event);
  }
}
