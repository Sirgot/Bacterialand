import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'board-root',
  template: './board.component.html',
  styles: ['board.component.css']
    // ['canvas { border-style: solid }']

})
export class BoardComponent implements OnInit {
  // @ViewChild('canvas', {static: true})
  // canvas: ElementRef<HTMLCanvasElement>;
// Somewhere above your class constructor

  @ViewChild('boardCanvas') boardCanvas: ElementRef;
  public context: CanvasRenderingContext2D;


  ngOnInit(): void {
    this.context = this.boardCanvas.nativeElement.getContext('2d');
  }

  animate(): void {
  }

  // Somewhere under the class constructor we want to wait for our view
// to initialize

  // ngAfterViewInit(): void {
  //   this.context = (<HTMLCanvasElement>this.boardCanvas.nativeElement).getContext('2d');
  // }

  title = 'bacterial-app';
}

