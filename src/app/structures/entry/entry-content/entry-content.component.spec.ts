import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EntryContentComponent } from './entry-content.component';

describe('EntryContentComponent', () => {
  let component: EntryContentComponent;
  let fixture: ComponentFixture<EntryContentComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EntryContentComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
