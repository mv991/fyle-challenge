
import { HttpClientModule } from '@angular/common/http'; 
import { ApiService } from './api.service';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
describe('ApiService', () => {
  let service: ApiService;
   let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,HttpClientTestingModule],
      providers: [ApiService],
    });
     
    service = TestBed.inject(ApiService);
     httpTestingController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpTestingController.verify(); // Ensure that there are no outstanding requests
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
    it('should call getUser function', fakeAsync(() =>  {
    const mockData = {
    "login": "johnpapa",
    "id": 1202528,
    "node_id": "MDQ6VXNlcjEyMDI1Mjg=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1202528?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/johnpapa",
    "html_url": "https://github.com/johnpapa",
    "followers_url": "https://api.github.com/users/johnpapa/followers",
    "following_url": "https://api.github.com/users/johnpapa/following{/other_user}",
    "gists_url": "https://api.github.com/users/johnpapa/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/johnpapa/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/johnpapa/subscriptions",
    "organizations_url": "https://api.github.com/users/johnpapa/orgs",
    "repos_url": "https://api.github.com/users/johnpapa/repos",
    "events_url": "https://api.github.com/users/johnpapa/events{/privacy}",
    "received_events_url": "https://api.github.com/users/johnpapa/received_events",
    "type": "User",
    "site_admin": false,
    "name": "John Papa",
    "company": "JohnPapa.net, LLC",
    "blog": "http://johnpapa.net",
    "location": "Orlando, FL",
    "email": null,
    "hireable": null,
    "bio": "Winter is Coming",
    "twitter_username": "john_papa",
    "public_repos": 144,
    "public_gists": 58,
    "followers": 15208,
    "following": 1,
    "created_at": "2011-11-17T17:05:03Z",
    "updated_at": "2023-11-01T15:31:38Z"
}
 
    const mockName = "johnpapa"
    // Make the HTTP request
    spyOn(service, 'getUser').and.returnValue(of(mockData)).and.callThrough()
    service.getUser(mockName).subscribe(response => {
      expect(response).toEqual(mockData);
    })
    

    // Expect one request to a specific URL with the correct parameter
    const req = httpTestingController.expectOne(`https://api.github.com/users/${mockName}`);
    expect(req.request.method).toEqual('GET');

    // Provide a mock response
    req.flush(mockData);

    // Advance the fakeAsync timer to complete the Observable
    tick();

  }));
      it('should call getRepos function', fakeAsync(() =>  {
    const mockData = [
    {
        "id": 256048704,
        "node_id": "MDEwOlJlcG9zaXRvcnkyNTYwNDg3MDQ=",
        "name": ".github",
        "full_name": "johnpapa/.github",
        "private": false,
        "owner": {
            "login": "johnpapa",
            "id": 1202528,
            "node_id": "MDQ6VXNlcjEyMDI1Mjg=",
            "avatar_url": "https://avatars.githubusercontent.com/u/1202528?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/johnpapa",
            "html_url": "https://github.com/johnpapa",
            "followers_url": "https://api.github.com/users/johnpapa/followers",
            "following_url": "https://api.github.com/users/johnpapa/following{/other_user}",
            "gists_url": "https://api.github.com/users/johnpapa/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/johnpapa/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/johnpapa/subscriptions",
            "organizations_url": "https://api.github.com/users/johnpapa/orgs",
            "repos_url": "https://api.github.com/users/johnpapa/repos",
            "events_url": "https://api.github.com/users/johnpapa/events{/privacy}",
            "received_events_url": "https://api.github.com/users/johnpapa/received_events",
            "type": "User",
            "site_admin": false
        },
        "html_url": "https://github.com/johnpapa/.github",
        "description": null,
        "fork": false,
        "url": "https://api.github.com/repos/johnpapa/.github",
        "forks_url": "https://api.github.com/repos/johnpapa/.github/forks",
        "keys_url": "https://api.github.com/repos/johnpapa/.github/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/johnpapa/.github/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/johnpapa/.github/teams",
        "hooks_url": "https://api.github.com/repos/johnpapa/.github/hooks",
        "issue_events_url": "https://api.github.com/repos/johnpapa/.github/issues/events{/number}",
        "events_url": "https://api.github.com/repos/johnpapa/.github/events",
        "assignees_url": "https://api.github.com/repos/johnpapa/.github/assignees{/user}",
        "branches_url": "https://api.github.com/repos/johnpapa/.github/branches{/branch}",
        "tags_url": "https://api.github.com/repos/johnpapa/.github/tags",
        "blobs_url": "https://api.github.com/repos/johnpapa/.github/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/johnpapa/.github/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/johnpapa/.github/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/johnpapa/.github/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/johnpapa/.github/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/johnpapa/.github/languages",
        "stargazers_url": "https://api.github.com/repos/johnpapa/.github/stargazers",
        "contributors_url": "https://api.github.com/repos/johnpapa/.github/contributors",
        "subscribers_url": "https://api.github.com/repos/johnpapa/.github/subscribers",
        "subscription_url": "https://api.github.com/repos/johnpapa/.github/subscription",
        "commits_url": "https://api.github.com/repos/johnpapa/.github/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/johnpapa/.github/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/johnpapa/.github/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/johnpapa/.github/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/johnpapa/.github/contents/{+path}",
        "compare_url": "https://api.github.com/repos/johnpapa/.github/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/johnpapa/.github/merges",
        "archive_url": "https://api.github.com/repos/johnpapa/.github/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/johnpapa/.github/downloads",
        "issues_url": "https://api.github.com/repos/johnpapa/.github/issues{/number}",
        "pulls_url": "https://api.github.com/repos/johnpapa/.github/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/johnpapa/.github/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/johnpapa/.github/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/johnpapa/.github/labels{/name}",
        "releases_url": "https://api.github.com/repos/johnpapa/.github/releases{/id}",
        "deployments_url": "https://api.github.com/repos/johnpapa/.github/deployments",
        "created_at": "2020-04-15T22:13:38Z",
        "updated_at": "2020-04-19T07:43:25Z",
        "pushed_at": "2020-04-15T22:15:06Z",
        "git_url": "git://github.com/johnpapa/.github.git",
        "ssh_url": "git@github.com:johnpapa/.github.git",
        "clone_url": "https://github.com/johnpapa/.github.git",
        "svn_url": "https://github.com/johnpapa/.github",
        "homepage": null,
        "size": 0,
        "stargazers_count": 1,
        "watchers_count": 1,
        "language": null,
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "has_discussions": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "allow_forking": true,
        "is_template": false,
        "web_commit_signoff_required": false,
        "topics": [],
        "visibility": "public",
        "forks": 0,
        "open_issues": 0,
        "watchers": 1,
        "default_branch": "master"
    },
]
 
    const mockName = "johnpapa"
    // Make the HTTP request
    spyOn(service, 'getRepos').and.returnValue(of(mockData)).and.callThrough()
    service.getRepos(mockName,1,10).subscribe(response => {
      expect(response).toEqual(mockData);
    });

    // Expect one request to a specific URL with the correct parameter
    const req = httpTestingController.expectOne(`https://api.github.com/users/${mockName}/repos?per_page=10&page=1`);
     expect(req.request.method).toEqual('GET');

    // Provide a mock response
   req.flush(mockData);

    // Advance the fakeAsync timer to complete the Observable
    tick();

  }));
  afterEach(() => {
    httpTestingController.verify();
  });

  it('should handle errors in getUser', fakeAsync(() => {
    const mockError = { message: 'User Not Found', documentation_url: 'https://docs.github.com/rest/users/users#get-a-user' };
    const githubUsername = 'nonexistentuser';

    service.getUser(githubUsername).subscribe({
      next: response => {
        fail('Expected an error, but got a successful response: ' + JSON.stringify(response));
      },
      error: (error: Error) => {
        expect(error.message).toEqual(mockError.message);
      },
    });

    const req = httpTestingController.expectOne(`https://api.github.com/users/${githubUsername}`);
    expect(req.request.method).toEqual('GET');

    // Simulate an error response
    req.flush(mockError, { status: 404, statusText: 'Not Found' });

    tick();
  }));

       afterEach(() => {
    httpTestingController.verify();
  });

  it('should handle errors in getRepos', fakeAsync(() => {
    const mockError = { message: 'Not Found', documentation_url: 'https://docs.github.com/rest/users/users#get-a-user' };
    const githubUsername = 'nonexistentuser';
    const page = 1;
    const itemsPerPage = 10;

    service.getRepos(githubUsername, page, itemsPerPage).subscribe({
      next: response => {
        fail('Expected an error, but got a successful response: ' + JSON.stringify(response));
      },
      error: (error: Error) => {
        expect(error.message).toEqual(mockError.message);
      },
    });

    const req = httpTestingController.expectOne(`https://api.github.com/users/${githubUsername}/repos?per_page=${itemsPerPage}&page=${page}`);
    expect(req.request.method).toEqual('GET');

    // Simulate an error response
    req.flush(mockError, { status: 404, statusText: 'Not Found' });

    tick();
  }));
});
