/*

  1.0: Create beanie successfully => add the new beanie to the list
  1.1: Homework: Shows error message, when creating invalid beanie => not navigate

  2.0: Homewoek: Create a test for successfully editing a beanie.


*/



import { browser, element, by } from "protractor";

describe('Beanie component', () => {
  it('1.0: Create beanie successfully => add the new beanie to the list', () => {
    browser.get('/beanies');

    // elemsBefore shows how many elements there were before.
    element.all(by.css('.beanie-e2e')).then(function(elemsBefore) {
      // element.all(by.css('.beanie-e2e')).get(0).click();
      element(by.id('create-beanie-e2e')).click();
      element(by.id('color')).sendKeys('Green');
      element(by.id('size')).sendKeys('3');
      element(by.id('fabric')).sendKeys('Cotton');

      element(by.id('submit-e2e')).click().then(function() {

        element.all(by.css('.beanie-e2e')).then(function(elemsAfter) {
          // browser.sleep(10000);
          expect(elemsAfter.length - elemsBefore.length).toBe(1);
        });  

      });

      

      
    });
  });

  it('1.1: Shows error message, when creating invalid beanie => not navigate', () => {

  });

});