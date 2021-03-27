import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangvageServiceComponent } from './langvage-service.component';

describe('LangvageServiceComponent', () => {
  let component: LangvageServiceComponent;
  let fixture: ComponentFixture<LangvageServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangvageServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangvageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
