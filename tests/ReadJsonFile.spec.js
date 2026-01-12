//JavaScript Object Notation

import {test , expect} from "@playwright/test"

const {data1, data2} = require('../testData/testData1.json')


test.describe.skip("Reading all valid & invalid data from json" , async ()=>{

    test("Reading data from json valid testData" , async ({page})=>{

    //browser launch
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //enter credentials
    await page.getByPlaceholder('Username').fill(data1.validUser)
    await page.waitForTimeout(2000)

    await page.getByPlaceholder('Password').fill(data1.validPass)
    await page.waitForTimeout(200 * 10)

    await page.getByRole('button' , {name : " Login "}).click()
    await page.waitForTimeout(200 * 10)

})


test("Reading data from json Invalid testData" , async ({page})=>{

    //browser launch
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //enter credentials
    await page.getByPlaceholder('Username').fill(data1.invalidUser)
    await page.waitForTimeout(2000)

    await page.getByPlaceholder('Password').fill(data1.invalidPass)
    await page.waitForTimeout(200 * 10)

    await page.getByRole('button' , {name : " Login "}).click()
    await page.waitForTimeout(200 * 10)

})
})



for (const data of data2) {
    
    test(`Reading data from json valid testData ${data.id}`, async ({page})=>{

    //browser launch
    await page.goto('https://www.demoblaze.com/')

    //enter credentials
    await page.click('[id="login2"]')
    await page.waitForTimeout(2000)

    await page.locator('[id="loginusername"]').fill(data.username)
    await page.waitForTimeout(200 * 10)

    await page.locator('#loginpassword').fill(data.password)
    await page.waitForTimeout(200 * 10)

    await page.click('[onclick="logIn()"]')

})



}




