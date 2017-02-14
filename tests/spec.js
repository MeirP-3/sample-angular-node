// spec.js
describe('MyTrainingCheck', function() {
  var username = element(by.model('username'));
  var getTweets = element(by.buttonText('Get Tweets'));
  var tweets = element(by.id('meir'));
  
  beforeEach(function() {
    browser.get('http://localhost:5000/');
  });

  it('should default to golum_from', function() {
    expect(tweets.getText()).toContain('golum_from');
  });

  it('should change to eslpod user', function() {
    for(i=0;i<10;i++)
      username.sendKeys(protractor.Key.BACK_SPACE);
    username.sendKeys('eslpod');
    getTweets.click();
    expect(tweets.getText()).toContain('eslpod');
  });
});