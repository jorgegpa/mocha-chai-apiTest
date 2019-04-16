
const headers=require('./headers.json');
const dotenv=require('dotenv');
const chai=require('chai');
const chaiHttp=require('chai-http');


function initSetup(){
  dotenv.config();
  chai.use(chaiHttp);
  chai.should();
}

module.exports=
{
    headers:headers,
    dotenv:dotenv,
    chai:chai,
    chaiHttp:chaiHttp
};
module.exports.initSetup=initSetup;
