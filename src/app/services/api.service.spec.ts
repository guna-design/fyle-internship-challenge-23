// import { TestBed } from '@angular/core/testing';

// import { ApiService } from './api.service';

// describe('ApiService', () => {
//   let service: ApiService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(ApiService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { User } from '../user';
import { Repo } from '../repo';


describe('ApiService', () => {
  let apiService: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });

    apiService = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  it('should return an "Observable<User>"', () => {
    const mockUser: User = {} as User;

    apiService.getUser('testUser').subscribe(user => {
      expect(user).toEqual(mockUser);
    });

    const req = httpTestingController.expectOne('https://api.github.com/users/testUser');
    expect(req.request.method).toEqual('GET');
    req.flush(mockUser);
  });

  it('should return an "Observable<Repo[]>"', () => {
    const mockRepos: Repo[] = [] as Repo[];

    apiService.getRepos('testUser', 10, 1).subscribe(repos => {
      expect(repos).toEqual(mockRepos);
    });

    const req = httpTestingController.expectOne('https://api.github.com/users/testUser/repos?per_page=10&page=1');
    expect(req.request.method).toEqual('GET');
    req.flush(mockRepos);
  });
});