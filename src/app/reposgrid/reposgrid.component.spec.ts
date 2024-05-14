import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposgridComponent } from './reposgrid.component';
import { MatGridListModule } from '@angular/material/grid-list';

describe('ReposgridComponent', () => {
  let component: ReposgridComponent;
  let fixture: ComponentFixture<ReposgridComponent>;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReposgridComponent],
      imports: [MatGridListModule]
    
    });
    fixture = TestBed.createComponent(ReposgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});

// class MatGridListStub {}