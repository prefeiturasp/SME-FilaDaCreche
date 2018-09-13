import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import puppeteer from 'puppeteer';
import STRINGS from 'configs/Strings';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('end-to-end tests', () => {
  it('works ok for people with non-registered kids', async () => {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();
  	await page.goto('http://localhost:3000/');

    // <Home>
    const checkIfRegisteredButton = await page.$(
      '[href="#' + STRINGS.routes.check_if_registered + '"]'
    );
    const checkIfRegisteredButtonText =
      await checkIfRegisteredButton.$eval('h4', el => el.innerHTML);
    expect(checkIfRegisteredButtonText).toEqual(STRINGS.actions.start_now);
    await checkIfRegisteredButton.click();

    // <CheckIfRegistered>
    const isRegisteredButton = await page.$(
      '[href="#' + STRINGS.routes.date_of_birth + '"]'
    );
    const isRegisteredButtonText =
      await isRegisteredButton.$eval('h4', el => el.innerHTML);
    expect(isRegisteredButtonText).toEqual(STRINGS.actions.no);
    await isRegisteredButton.click();

    // <DateOfBirthForm>
    await page.select('#month-of-birth', "3");
    await page.select('#year-of-birth', (new Date()).getFullYear() - 2 + "");
    const preschoolGroupButton = await page.$(
      '[href^="#' + STRINGS.routes.preschool_group + '"]'
    );
    const preschoolGroupButtonText =
      await preschoolGroupButton.$eval('h4', el => el.innerHTML);
    expect(preschoolGroupButtonText).toEqual(STRINGS.actions.continue);
    await preschoolGroupButton.click();

    // <PreschoolGroup>
    const preschoolGroupText = await page.$eval('h1', el => el.innerHTML);
    expect(preschoolGroupText).toContain(
      'março de ' + ((new Date()).getFullYear() - 2)
    );
    const addressFormButton = await page.$(
      '[href^="#' + STRINGS.routes.address + '"]'
    );
    const addressFormButtonText =
      await addressFormButton.$eval('h4', el => el.innerHTML);
    expect(addressFormButtonText).toEqual(STRINGS.actions.continue);
    await addressFormButton.click();

    // <AddressForm>
    const addressInputField = await page.$('input');
    await addressInputField.type(
      'Av. Paulista - Bela Vista, São Paulo - SP, Brasil'
    );
    const searchButton = await page.$(
      '[href^="#' + STRINGS.routes.address + '"]'
    );
    const searchButtonText = await searchButton.$eval('h4', el => el.innerHTML);
    expect(searchButtonText).toEqual(STRINGS.actions.search);
    await searchButton.click();
    await page.waitFor('.school-list');

    // <Results>
    const schoolListElements = await page.$$('.school-list>div');
    expect(schoolListElements.length).toEqual(6);
    const seeMoreText = await schoolListElements[5].$eval('h4',
      el => el.innerHTML
    );
    expect(seeMoreText).toEqual(STRINGS.actions.see_more);
    await schoolListElements[5].click();
    const schoolListElementsExpanded = await page.$$('.school-list>div');
    expect(schoolListElementsExpanded.length).toBeGreaterThan(6);
    const compareAddressButtonText = await page.$eval(
      '[href^="#' + STRINGS.routes.address + '"] h4',
      el => el.innerHTML
    );
    expect(compareAddressButtonText).toEqual(STRINGS.actions.compare_address);
    const backToStartButtonText =
      await page.$eval('[href="#/"] h4', el => el.innerHTML);
    expect(backToStartButtonText).toEqual(STRINGS.actions.back_to_start);
    const registerButton =
      await page.$('[href^="#' + STRINGS.routes.register + '"]');
    const registerButtonText =
      await registerButton.$eval('h4', el => el.innerHTML);
    expect(registerButtonText).toEqual(STRINGS.actions.register);
    await registerButton.click();
    await page.waitFor('.school-list');

    // <Register>
    const RegisterBanners = await page.$$('.banner');
    const RegisterMainBannerText =
      await RegisterBanners[0].$eval('h1', el => el.innerHTML);
    expect(RegisterMainBannerText).toEqual(STRINGS.registration_greeting.title);
    const RegisterSchoolListBannerText =
      await RegisterBanners[1].$eval('h1', el => el.innerHTML);
    expect(RegisterSchoolListBannerText).toEqual(
      STRINGS.registration_list.title
    );
    const registerListElements = await page.$$('.school-list>div');
    expect(registerListElements.length).toBeGreaterThan(0);

    await browser.close();
  }, 16000);
});
