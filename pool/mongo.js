const { MongoClient, ObjectId } = require('mongodb');

const option = {
  useNewUrlParser: true,
  poolSize: 10,
};

module.exports = class {
  constructor(opt) {
    this.$opt = opt;

    this.client = null;
    this.db   = null;
    this.coll = null;

    // init
    (async () => {
      await this.init();
    })()
  }

  /**
   * init Mongo
   */
  async init () {
    const MongoConnect = new MongoClient(this.$opt.Host, option);
    MongoConnect.connect(err => {
      if (err) {
        this.client = null;
        return;
      }
      this.client = MongoConnect;
    })
  }

  DB(database) {
    if (database === undefined) {
      throw (new Error('Database is undefined'));
    }

    if (this.client === null) {
      throw (new Error('Mongo connect error'));
    }

    this.db = this.client.db(database);
    return this;
  }

  col(collection) {
    if (collection === undefined) {
      throw (new Error('collection is undefined'));
    }

    if (this.client === null) {
      throw (new Error('Mongo connect error'));
    }

    this.coll = this.db.collection(collection);
    return this;
  }

  find(query) {
    return new Promise(resolve => {
      this.coll.find(query).toArray((err, docs) => {
        if (err) {
          return resolve([ null, err ]);
        }
        resolve([ docs, null ]);
      })
    })
  }

  insertOne(query) {
    return new Promise(resolve => {
      this.coll.insertOne(query, (err, docs) => {
        if (err) {
          return resolve([ null, err ]);
        }
        resolve([ docs, null ]);
      })
    })
  }

  remove(query) {
    return new Promise(resolve => {
      this.coll.remove(query, (err, docs) => {
        if (err) {
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
