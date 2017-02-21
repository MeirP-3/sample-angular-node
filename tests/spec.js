// spec.js
/*
checklist:
1. every tweet only once.
2. chronological order.
//*[@id="twitter-widget-0"]/div/blockquote/div[2]/p
//*[@id="twitter-widget-1"]/div/blockquote/div[2]/p
*/
describe('Version 2 check', function() {
  
  var i = 0, tweetsText = element
      (by.xpath('//*[@id="twitter-widget-0"]/div/blockquote/div[2]/p'));

  beforeEach(function() {
    browser.get('http://localhost:5000/');
  });
  
  it('should default to golum_from', function() {
    expect(tweetsText.getText()).toContain('a');
  });
  
});

