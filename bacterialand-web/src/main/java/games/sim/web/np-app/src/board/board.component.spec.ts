import { TestBed, async } from '@angular/core/testing';
import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BoardComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BoardComponent);
    const board = fixture.componentInstance;
    expect(board).toBeTruthy();
  });

  it(`should have as title 'np-app'`, () => {
    const fixture = TestBed.createComponent(BoardComponent);
    const board = fixture.componentInstance;
    expect(board.title).toEqual('np-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BoardComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('np-app app is running!');
  });
});
