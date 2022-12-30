const ServiceAgent = require('service-agent');
const Request = require('request');

const request = Request.defaults({
  agentClass: ServiceAgent,
  agentOptions: { service:'_http._tcp.' },
  pool: {}
});

request('http://SRV_DOMAIN_HERE', function(error, result, body) {
  console.log('error', error);
  console.log('result', result);
  console.log('body', body);
});
