import { BeanieListComponent } from './../src/app/beanie-list/beanie-list.component';
/*

  1.0: Create beanie successfully => add the new beanie to the list
  1.1: Homework: Shows error message, when creating invalid beanie => not navigate
  2.0: Homework: Create a test for successfully editing a beanie.


*/


import { browser, element, by } from "protractor";

describe('Beanie component', () => {
  it('1.0: Create beanie successfully => add the new beanie to the list', () => {
    browser.get('/beanies');

    // elemsBefore shows how many elements there were before.
    element.all(by.css('.beanie-e2e')).then(function (elemsBefore) {
      // element(by.css('[routerlink="/beanie"]')).then(function(elemsBefore) {
      // element.all(by.css('.beanie-e2e')).get(0).click();

      // Just to show this... clear empties an input box
      // element(by.id('color')).clear();

      // Selecting a component by its custom tag routerlink
      element(by.css('[routerlink="/beanie"]')).click();
      element(by.id('color')).sendKeys('Green');
      element(by.id('size')).sendKeys('3');
      element(by.id('fabric')).sendKeys('Cotton');

      element(by.id('submit-e2e')).click().then(function () {

        element.all(by.css('.beanie-e2e')).then(function (elemsAfter) {
          // browser.sleep(10000);
          expect(elemsAfter.length - elemsBefore.length).toBe(1);
        });
      });
    });
  });

  it('1.1: Shows error message, when creating invalid beanie => not navigate', () => {

    // browser.sleep(5000);
    // Selecting a component by its custom tag routerlink
    element(by.css('[routerlink="/beanie"]')).click();

    element(by.id('color')).sendKeys('Red'); // Should be at least 4
    element(by.id('size')).sendKeys('2');
    element(by.id('fabric')).sendKeys('Cotton');

    element(by.id('submit-e2e')).click().then(function () {
      // browser.sleep(6000);

      // Using isDisplayed instead of isPresent, you check if an element is visible
      // Using isPresent checks if the element exists in the DOM,
      expect(element(by.css('.alert-danger')).isPresent()).toBeTruthy();
    });
  });

  it('2.0: Homework: Create a test for successfully editing a beanie.', () => {
    element(by.css('[routerlink="/beanies"]')).click();

    element.all(by.css('.beanie-e2e')).then(function (elemsBefore) {
      // browser.driver.sleep(4000);

      // Selecting the last element
      // element.all(by.className('beanie-e2e')).last().click();
      element(by.className('beanie-e2e')).click();

      element(by.id('color')).clear();
      element(by.id('size')).clear();
      element(by.id('fabric')).clear();

      element(by.id('color')).sendKeys('Purple');
      element(by.id('size')).sendKeys('4');
      element(by.id('fabric')).sendKeys('Wool');

      element(by.id('submit-e2e')).click();
      element.all(by.css('.beanie-e2e')).then(function (elemsAfter) {
        expect(elemsBefore.length - elemsBefore.length).toBe(0);
      });
    });
  });
});