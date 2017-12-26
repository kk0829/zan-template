const { Service } = require('zan-node');
const ServiceError = require('./service_error');

class BaseService extends Service {

  constructor(ctx) {
    super(ctx);
    this.ServiceError = ServiceError;
  }

}

module.exports = BaseService;