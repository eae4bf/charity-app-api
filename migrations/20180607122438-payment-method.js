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
  db.createTable('payment-method', {
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
    address_id: {
      type: 'int',
      id: true,
      required: true
    },
    cardNumber: {
      type: 'int',
      required: true,
      length: 50
    },
    cardHolderName: {
      type: 'string',
      length: 100
    }, 
    CVV: {
      type: 'int',
      length: 50
    },
    cardType: {
      type: 'string',
      length: 50
    },
    expirationDate: {
      type: 'date',
    }
  }, callback);

};

exports.down = function(db, callback) {
  db.dropTable('payment-method', callback)
};

exports._meta = {
  "version": 1
};
