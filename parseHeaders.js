'use strict';

/* eslint-env node */
let string = `HTTP/1.0 200 OK
Date: Mon, 30 Jul 2018 14:13:41 GMT
Expires: -1
Cache-Control: private, max-age=0
Content-Type: text/html; charset=ISO-8859-1
P3P: CP="This is not a P3P policy! See g.co/p3phelp for more info."
Server: gws
X-XSS-Protection: 1; mode=block
X-Frame-Options: SAMEORIGIN
Set-Cookie: 1P_JAR=2018-07-30-14; expires=Wed, 29-Aug-2018 14:13:41 GMT; path=/; domain=.google.com
Set-Cookie: NID=135=L-fAEEQ8aLSweVUQhG11theKf4GTPldKLqfDigLVBJz63uIuMqLUx7_-ZjPPr1Ij9bHV8txS2jrJG-onsibYnn7ZjjiqwOWQaV-3CI_aOWStLWoa_Q27FdFdDOvZ1TFz; expires=Tue, 29-Jan-2019 14:13:41 GMT; path=/; domain=.google.com; HttpOnly
Accept-Ranges: none
Vary: Accept-Encoding

<!doctype html><html itemscope="" itemtype="http://schema.org/WebPage" lang="en"><head><meta content="Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for." name="description">
<!-- ALL THE REST OF THE HTML --></div></body></html>`


function parseHeaders(string) {
    let headerArr = string.split('\n');
    // console.log(headerArr);
    const [version, code] = headerArr.shift().split(' ');
    // let line = [];
    let headers = {};
    let object = {
        version,
        code,
        headers,
    }
    // console.log(headerArr.length);
    while (headerArr.length > 0) {
        // let line = [];
        let line = headerArr.shift().split(': ', 2);

        if (line.length !== 2) {
            break;
        }

        object['headers'][line[0]] = line[1];
    }
    object["body"] = headerArr.join();
    console.log(object);
    return object;

}
parseHeaders(string);




module.exports = parseHeaders;