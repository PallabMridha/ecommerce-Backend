const mongoose = require('mongoose');

function dbcanation() {
    // ===========DB========
mongoose.connect(`${process.env.DB_URL}`)
  .then(() => console.log('DB Connected!'));
// ===========DB========
}

module.exports=dbcanation