
var jsontext = '{"Ho": "Hoang", "Ten": "Thanh", "Phone": ["0913690366", "016821034**"]}';
var jsontext1 = {Ho:1, Ten: "Thanh", Phone: [{DT:"0913690366", dtdd:"016821034**"}]};
var contact = JSON.parse(jsontext);
console.log(contact)
// var a = 'http://people:/13123123/asfsdf'
// const b = a.replace(/clear.*:\/\//g, '');
// const b = a.match(/\/([^\/]+)\/?$/)[1];
// console.log(b)

