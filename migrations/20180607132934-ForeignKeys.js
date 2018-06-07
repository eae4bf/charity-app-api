'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.addForeignKey('donation', 'user', 'user_id1',
    {
      'user_id': 'id'
    }, {
      onDelete: 'CASCADE',
      onUpdate: 'RESTRICT'
    }, db.addForeignKey('donation', 'charity', 'charity_id1',
      {
        'charity_id': 'id'
      }, {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      }, db.addForeignKey('payment-method', 'user', 'user_id2',
        {
          'user_id': 'id'
        }, {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        }, db.addForeignKey('payment-method', 'address', 'address_id',
          {
            'address_id': 'id'
          }, {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          }, db.addForeignKey('post', 'project', 'project_id',
            {
              'project_id': 'id'
            }, {
              onDelete: 'CASCADE',
              onUpdate: 'RESTRICT'
            }, db.addForeignKey('project', 'charity', 'charity_id2',
              {
                'charity_id': 'id'
              }, {
                onDelete: 'CASCADE',
                onUpdate: 'RESTRICT'
              }, db.addForeignKey('address', 'user', 'user_id3',
                {
                  'user_id': 'id'
                }, {
                  onDelete: 'CASCADE',
                  onUpdate: 'RESTRICT'
                }, callback
              )))))));

};

exports.down = function (db, callback) {
  db.removeForeignKey('donation', 'user_id1',
    db.removeForeignKey('donation', 'charity_id1',
      db.removeForeignKey('payment-method', 'user_id2',
        db.removeForeignKey('payment-method', 'address_id',
          db.removeForeignKey('post', 'project_id',
            db.removeForeignKey('project', 'charity_id2',
              db.removeForeignKey('address', 'user_id3', callback)))))));

};

exports._meta = {
  "version": 1
};
