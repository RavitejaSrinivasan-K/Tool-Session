
import {test , expect} from "@playwright/test"

const env = [
    {
       url : process.env.ORANGE_URL,
        user : process.env.USER_NAME1 , 
        pass : process.env.PASSWORD1
    },
    {
        url : process.env.ORANGE_URL,
        user : process.env.USER_NAME2,
        pass : process.env.PASSWORD2
    }
]





// test.describe("Read Data from dotenv File" , async ()=>{

//   test(`Read the data dot env in ${process.env.ENV1}` , async ({page})=>{

//     await page.goto(process.env.ORANGE_URL)
//     await page.waitForTimeout(2000)

//     await page.getByPlaceholder('Username').fill(process.env.USER_NAME)
//     await page.waitForTimeout(2000)

//     await page.getByPlaceholder('Password').fill(process.env.PASSWORD)
//     await page.waitForTimeout(2000)

//     await page.getByRole('button' , {name : " Login "}).click()
//     await page.waitForTimeout(2000)

//   })

//   test(`Read the data dot env in ${process.env.ENV2}` , async ({page})=>{
    
//         //browser launch
//         await page.goto(process.env.DEMOBLAZE_URL)
    
//         //enter credentials
//         await page.click('[id="login2"]')
//         await page.waitForTimeout(2000)
    
//         await page.locator('[id="loginusername"]').fill(process.env.USER_NAME)
//         await page.waitForTimeout(200 * 10)
    
//         await page.locator('#loginpassword').fill(process.env.PASSWORD)
//         await page.waitForTimeout(200 * 10)
    
//         await page.click('[onclick="logIn()"]')
//         await page.waitForTimeout(200 * 10)

//   })
// })


let id = 0

env.forEach((dotEnv)=>{
    
  test(`Read the data dot env in ${++id}` , async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(2000)

    await page.getByPlaceholder('Username').fill(dotEnv.user)
    await page.waitForTimeout(2000)

    await page.getByPlaceholder('Password').fill(dotEnv.pass)
    await page.waitForTimeout(2000)

    await page.getByRole('button' , {name : " Login "}).click()
    await page.waitForTimeout(2000)

  }
)


})


