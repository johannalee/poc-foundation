import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';

describe('<%= classify(name) %>Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ <%= classify(name) %>Component ],
      imports: [
        NoopAnimationsModule,
        DragDropModule,
      ]
    }).compileComponents();
  }));

  it('should compile', () => {
    const fixture = TestBed.createComponent(<%= classify(name) %>Component);
    expect(fixture).toMatchSnapshot();
  });
});
