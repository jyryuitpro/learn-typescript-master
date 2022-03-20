function fetchData() {
    return {
        data: {
            name: 'capt',
            age: 100,
        },
        config: {},
        statusText: '',
        headers: {},
    }
}
var result = fetchData();
console.log(result);
console.log(result.data);

var { data, config, statusText, headers } = fetchData();
console.log(data);
console.log(config);
console.log(statusText);
console.log(headers);

var { data: jiyoung, config, statusText, headers } = fetchData();
console.log(jiyoung);