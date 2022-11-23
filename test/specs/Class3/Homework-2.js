// Due date: Nov 21 (Mon)
const { expect } = require("chai");
const { it } = require("mocha");

describe('WebElements Homework', () => {

    it('Homework 2', async () => {

/**
 * TC-1: https://www.facebook.com/
 * Facebook: Verify current date is displayed on Sign-Up form
 * 
 * Steps:
 * 1. Launch facebook.com
 * 2. Click Create New Account button
 * 3. Verify current date is displayed in Date of birth dropdowns
 *
 */
// 1. Launch facebook.com
await browser.url('/');
// 2. Click Create New Account button
const createNewAccountButton = await $('=Create New Account');
createNewAccountButton.click();

 await browser.pause(7000);

 // 3. Select 10 in date dropdown
 const dayDropdown = await $('#day');
 dayDropdown.selectByAttribute('value', '22');

 // 4. Select Oct in month dropdown
 const monthDropdown = await $('#month');
 await monthDropdown.selectByVisibleText('Nov');

 // 5. Select 2010 in year dropdown
 const yearDropdown = await $('#year');
 yearDropdown.selectByVisibleText(`2022`);

 await browser.pause(10000);

 //Resolution: I'm not sure how to check that the default date is displayed and compared to the current date.

/**
 * TC-2: https://www.facebook.com/
 * Facebook: Verify user gets error when submits empty login form
 * 
 * Expected error msg -> The email address or mobile number you entered isn't connected to an account.
 */
// 1. Launch facebook.com
await browser.url('/');

// 2. Click Create New Account button
const createNewAccountButton2 = await $('=Create New Account');
createNewAccountButton2.click();

 await browser.pause(7000);

const clickCreateAccountButton = await $('=Sign up');
clickCreateAccountButton.click();

 await browser.pause(7000);

 const createAccountErrorMessage = await $('*=Find');
 const isCreateAccountErrorDisplayed = await createAccountErrorMessage.isDisplayed();
        expect(isCreateAccountErrorDisplayed, 'Login error is NOT displayed').to.be.true;
    })


/**
 * TC-3: https://www.facebook.com/
 * Facebook: Verify user gets error when submit empty login on messenger screen
 * 
 * 1. Click Messenger
 * 2. Verify "Keep me signed in" is NOT selected
 * 3. Click "Log in" button
 * 4. Verify link (Find your account and log in.) is displayed
 * 5. Verify "Continue" button is enabled
 * 6. Verify "Keep me signed in" is NOT selected
 * 7. Click "Keep me signed in" checkbox
 * 8. Verify "Keep me signed in" is selected
 * 
 */
 await browser.url('/');
 const checkboxKeepMeSignedIn = await $('input[value="1"]');
        const isCheckboxKeepMeSignedInSelected = await checkboxKeepMeSignedIn.isSelected();
        expect(isCheckboxKeepMeSignedInSelected, 'Facebook - Keep me signed in is already selected').to.be.false;

        await browser.pause(5000);


        await $('button@id=[loginbutton]').click;
        await $('//label[contains(text() , "Find your account and log in.")]').isDisplayed;

        const checkboxKeepMeSignedIn2 = await $(`class='uiInputLabelLabel');
        const isCheckboxKeepMeSignedInSelected2 = await $(`checkboxKeepMeSignedIn2.isSelected();
        expect(isCheckboxKeepMeSignedInSelected2, 'Messenger - Keep me signed in is already selected').to.be.false;
        
        await browser.pause(5000);

        if (!checkboxKeepMeSignedIn2) {              // checkboxKeepMeSignedIn2 === false     <--> !checkboxKeepMeSignedIn2
            await checkboxKeepMeSignedIn2.click()
        }
        const checkboxKeepMeSignedInTrue = await $(`class='uiInputLabelLabel');
        const isCheckboxKeepMeSignedInSelectedTrue = await checkboxKeepMeSignedInTrue.isSelected();
        expect(isCheckboxKeepMeSignedInSelectedTrue, 'Messenger - Keep me signed in is already selected').to.be.true;

    });


/**
 * TC-4: https://www.darksky.net/
 * Darksky: Verify feelsLikeTempValue is in between lowTempValue and highTempValue
 * 
 * 31˚(string) -> 31(string) -> 31(number)
 * 25˚(string) -> 25(string) -> 25(number)
 * 39˚(string) -> 39(string) -> 39(number)
 * 
 * feelsLikeTempValue <= lowTempValue AND feelsLikeTempValue <= highTempValue
 * 
 */
// Resolution: Im not sure how to do this task.