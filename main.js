const zipCode = require('german-zip-codes');
var myDistrict = zipCode.getDistrictsByZipCode("10997");
console.log(myDistrict);
