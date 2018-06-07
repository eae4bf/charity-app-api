'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('address', {
    id: {
      type: 'int',
      id: true,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: 'int',
      id: true,
      required: true
    },
    addressLine: {
      type: 'string',
      length: 100
    },
    country: {
      type: 'string',
      length: 50
    },
    state: {
      type: 'string',
      length: 1000
    },
    zipCode: {
      type: 'int',
      length: 10
    },
    phoneNum: {
      type: 'string'
    }
  }, callback);

};

exports.down = function(db, callback) {
  db.dropTable('address', callback);
};

exports._meta = {
  "version": 1
};
