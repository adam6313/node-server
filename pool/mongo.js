const { MongoClient, ObjectId } = require('mongodb');

const option = {
  useNewUrlParser: true,
  poolSize: 10,
};

module.exports = class {
  constructor(opt) {
    this.$opt = opt;

    this.client = null;
    this.db     = null;
    this.coll   = null;
    this.err    = null;
  }

  /**
   * init Mongo
   */
  init () {
    return new Promise(resolve => {
      new MongoClient(this.$opt.Host, option).connect((err, Client) => {
        if (err) {
          return resolve([ null, err ]);
        }
        this.client = Client;
      })
    })
    const MongoConnect = new MongoClient(this.$opt.Host, option);
    MongoConnect.connect(err => {
      if (err) {
        console.log(err)
        this.err = err;
      }
      this.client = MongoConnect;
    })
  }

  DB(database) {
    this.db = this.client.db(database);
    return this;
  }

  col(collection) {
    this.coll = this.db.collection(collection);
    return this;
  }

  find(query) {
    return new Promise(resolve => {
      this.coll.find(query).toArray((err, docs) => {
        if (err || this.err) {
          return resolve([ null, err ]);
        }
        resolve([ docs, null ]);
      })
    })
  }

  insertOne(query) {
    return new Promise(resolve => {
      this.coll.insertOne(query, (err, docs) => {
        if (err || this.err) {
          return resolve([ null, err ]);
        }
        resolve([ docs, null ]);
      })
    })
  }

  remove(query) {
    return new Promise(resolve => {
      this.coll.remove(query, (err, docs) => {
        if (err || this.err) {
          return resolve([ null, err ]);
        }
        resolve([ docs, null ]);
      })
    })
  }

  ObjectId(id) {
    return new ObjectId(id)
  }
}
