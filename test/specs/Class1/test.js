/**
 * mocha framework --> helps to write down testcases.
 * 
 * Code block:
 *          describe-block
 *              block which represents test-suite for a feature
 * 
 * 
 *          it-block
 *              block which represents a testcase
 * 
 */

const {expect} = require("chai"); 

describe('Samples Testcases', () => {

    it ('Testcase-1', () => {

            const res= 2+2
            
            //verify res = 4
            expect(res, '').to.equal(4);

    });
});