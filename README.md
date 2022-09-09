# cypress-snapshot-test-example

Snapshot test example on Cypress.io

## Installation

Require [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the Cypress.

```sh
npm i
npx cypress open
```

## Steps

- Set url's in the **cypress.env.json** file
- Change or create the new test
- Specify the data you want to collect
- Run the test **snapshot.js** file
- For comparison, run the test again

## Aditional

- If you add a new url, the test will not fall, but will simply add tags to the file
- If you remove the new url, the test will not fall and since it will not check this url
- If you want to check error, you can edit current snapshot file and run test
- If you want to collect new data, just delete **snapshot.js** and run the test
