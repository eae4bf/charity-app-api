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
  db.createTable('charity', {
    id: {
      type: 'int',
      id: true,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: 'string',
      required: true,
      length: 50
    },
    description: {
      type: 'string',
      length: 1000
    },
    deepDescription: {
      type: 'string',
      length: 1000
    }, 
    charityCardImg: {
      type: 'string',
      length: 1000
    },
    charityImg: {
      type: 'string',
      length: 1000
    },
    website: {
      type: 'string',
      length: 1000
    },
    logo: {
      type: 'string',
      length: 1000
    }
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('charity', callback);
};

exports._meta = {
  "version": 1
};
