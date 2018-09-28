import { Directive, HostListener, ElementRef, Input } from '@angular/core';

/**
 * Generated class for the AutosizeDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: 'ion-textarea[autoresize]' // Attribute selector
})
export class AutosizeDirective {

  // @Input('autoresize')

  @HostListener('input', ['$event'])
  onInput(textArea: HTMLTextAreaElement): void {
    this.adjust();
  }

  constructor(public element: ElementRef) {
  }

  ngAfterViewInit() {
    this.adjust()
  }

  adjust(): void {
    let textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
    textArea.style.overflow = 'hidden';
    textArea.style.height = 'auto';
    textArea.style.height = (textArea.scrollHeight + 64) + "px";
  }
}
