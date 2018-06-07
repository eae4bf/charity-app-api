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
  db.createTable('donation', {
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
    charity_id: {
      type: 'int',
      id: true,
      required: true
    },
    amount: {
      type: 'int',
      required: true
    },
    date: {
      type: 'date'
    }
  }, callback);
};


exports.down = function(db, callback) {
  db.dropTable('donation', callback)
};

exports._meta = {
  "version": 1
};
