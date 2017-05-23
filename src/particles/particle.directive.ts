import { Directive, ElementRef } from '@angular/core';
import { random } from 'lodash';

declare var particlesJS: any;

@Directive({
  selector: '.rm-particles'
})
export class ParticlesDirective {
  constructor(el: ElementRef) {
    const randomNumber = random(0, 100000);
    const particleId = 'particles-js' + randomNumber;
    el.nativeElement.setAttribute('id', particleId);
    particlesJS.load(particleId, 'resources/particles.config.json');
  }

}