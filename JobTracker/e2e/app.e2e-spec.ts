import { JobTrackerPage } from './app.po';

describe('job-tracker App', function() {
  let page: JobTrackerPage;

  beforeEach(() => {
    page = new JobTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
