
import {test} from "@playwright/test"

import xlsx from 'xlsx'

import path from 'path'


const book = path.join("./testData/testDataXL3.xlsx")

const workBook = xlsx.readFile(book)

const workSheet = workBook.Sheets["XlData"]

const xlToJson = xlsx.utils.sheet_to_json(workSheet)



//  test(`Read Data from Excel Sheet ${xlToJson[0].ID}` , async ({page})=>{

//     // console.log(element[0].ID)
//      await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     await page.waitForTimeout(2000)

//     await page.getByPlaceholder('Username').fill(xlToJson[0].USERNAME)
//     await page.waitForTimeout(2000)

//     await page.getByPlaceholder('Password').fill(xlToJson[0].PASSWORD)
//     await page.waitForTimeout(2000)

//     await page.getByRole('button' , {name : " Login "}).click()
//     await page.waitForTimeout(2000)
// })



for (const element of xlToJson) {
    
    test(`Read Data from Excel Sheet ${element.ID}` , async ({page})=>{

    // console.log(element[0].ID)
     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(2000)

    await page.getByPlaceholder('Username').fill(element.USERNAME)
    await page.waitForTimeout(2000)

    await page.getByPlaceholder('Password').fill(element.PASSWORD)
    await page.waitForTimeout(2000)

    await page.getByRole('button' , {name : " Login "}).click()
    await page.waitForTimeout(2000)
})
}




// xlToJson.forEach((data)=>{

     
//     test(`Read Data from Excel Sheet ${data.ID}` , async ({page})=>{

//     // console.log(element[0].ID)
//      await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     await page.waitForTimeout(2000)

//     await page.getByPlaceholder('Username').fill(data.USERNAME)
//     await page.waitForTimeout(2000)

//     await page.getByPlaceholder('Password').fill(data.PASSWORD)
//     await page.waitForTimeout(2000)

//     await page.getByRole('button' , {name : " Login "}).click()
//     await page.waitForTimeout(2000)
// })
// })


