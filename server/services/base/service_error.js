class ServiceError extends Error {
  constructor(code, msg) {
    super(msg);
    this.errorContent = {
      code,
      msg,
      type: 'service error'
    };
  }
}

module.exports = ServiceError;