const request = require('request')

const options = {
    url: 'https://digital.ucdavis.edu/fcrepo/rest/collection/sherry-lehmann/catalogs/d7q30n/media/images/d7q30n-002/svc:tesseract/full/full/0/default.jpg',
    method: 'GET',
    :headers: {
        'accept': 'application/hocr+xml'
    :}
}

request(options, function(err, res, body){
    console.log(body);
});
