/*
 * Copyright (c) 2017, Inversoft Inc., All Rights Reserved
 */

'use strict';

/**
 * A client response that provides the status code and the response of an REST API call.
 *
 * @constructor
 */
var ClientResponse = function() {
  this.statusCode = null;
  this.errorResponse = null;
  this.successResponse = null;
  this.exception = null;

  this.wasSuccessful = this.wasSuccessful.bind(this);
};

ClientResponse.constructor = ClientResponse;
ClientResponse.prototype = {

  /**
   * @returns {boolean} return true if the request was successful.
   */
  wasSuccessful: function() {
    return this.statusCode >= 200 && this.statusCode <= 299 && this.exception === null;
  }
};