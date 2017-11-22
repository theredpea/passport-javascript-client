/*
 * Copyright (c) 2017, Inversoft Inc., All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */

'use strict';

var assert = buster.assertions.assert;

buster.testCase('PassportClient', {

  setUp: function() {
    this.client = new PassportClient('78d8f1aa-e7dc-4efc-9755-e053af05c8e2', 'https://demo-passport.inversoft.io');
  },

  'retrieveApplications': function(done) {
    this.client.retrieveApplications(done(function(response) {
      assert.equals(response.statusCode, 200);
      assert.defined(response.successResponse);

      if (response.successResponse) {
        assert.isTrue(response.successResponse.applications.length > 0);
      }
    }));
  },

  'retrievePassportApplication': function(done) {
    this.client.retrieveApplication('3c219e58-ed0e-4b18-ad48-f4f92793ae32', done(function(response) {
      assert.equals(response.statusCode, 200);
      assert.defined(response.successResponse);

      if (response.successResponse) {
        assert.equals(response.successResponse.application.name, 'Passport');
      }
    }));
  },

  'retrieveAdminUser': function(done) {
    this.client.retrieveUserByEmail('admin@inversoft.com', done(function(response) {
      assert.equals(response.statusCode, 200);
      assert.defined(response.successResponse);

      if (response.successResponse) {
        assert.equals(response.successResponse.user.email, 'admin@inversoft.com');
      }
    }));
  },

  'retrieveSystemConfiguration': function(done) {
    this.client.retrieveSystemConfiguration(done(function(response) {
      assert.equals(response.statusCode, 200);
      assert.defined(response.successResponse);

      if (response.successResponse) {
        assert.isTrue(response.successResponse.systemConfiguration.minimumPasswordAge.seconds > 0);
      }
    }));
  }
});