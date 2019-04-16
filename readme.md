# Mocha -Chai  API Test Framework

This framework is intended to build a functional solution for API Test 
using Javascript/Node with BDD structure. You may fork anytime to customize it with  your project.

It has an integration with Testrail to reporting the Test cases.

## Installation

You need to have node installed first.

```bash
npm install
```
## Configuration

```bash
First of all you need to have a Wizeline TestRail Account 
If you don't please contact rick.vega@wizeline.com to get an account.

In the mocha.opts file fill the next information :

username={your wizeline testrail email}
password={password or token for your account}
projectId={The project Id in TestRail}

This will allow the mocha reporter to integrate with TestRail 
to reflect the status of the tests.
```

## Usage

```bash
npm test #this will run npm run lint and then mocha test
```
## Continuous Integration

```bash
Travis CI is configured to be used with the .travis.yml file 
however you can use any CI solution that works better for you.

If you decide to use travis you need to be at first the owner
of your Repository in Github , this in order to allow the Travis Integration

Once done you can go to : https://travis-ci.com/ 
to check the status of your jobs , schedule a chron , enable notifications
etc.
```

## Contributing

Further documentation :

https://mochajs.org/#getting-started

https://www.chaijs.com/api/bdd/

https://docs.travis-ci.com/user/for-beginners/

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.