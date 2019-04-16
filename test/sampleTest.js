// Setup
const conf = require('../app.js');
const initSetup = require('../app.js').initSetup;
initSetup();
// Tests
describe('/Open API Json placeholder', function() {
  it('C5231 List Of Users', function(done) {
    conf.chai.request(process.env.URL_ENDPOINT)
        .get('/users')
        .set('content-type', conf.headers.CONTENT_TYPE)
        .end((err, res)=> {
          res.should.have.status(200);
          const jsonObj=res.body;
          const users = require('../data/users.json');
          for (let index=0; index<jsonObj.length; index++ ) {
            jsonObj[index].name.should.be.equal(users[index].name);
          }
          done();
        });
  });
});
