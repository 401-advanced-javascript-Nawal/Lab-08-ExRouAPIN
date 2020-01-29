'use strict';

class Model {
    constructor(schema) {
        this.schema = schema;
    }

    // json representatio for every model schema once created 
    jsonSchema() {
        console.log('typrof this.schema.jsonSchema : ', typeof this.schema.jsonSchema);
        return typeof this.schema.jsonSchema === 'function' ? this.schema.jsonSchema() : {}
    } // end of jsonSchema method 


    get(_id) {
        let objQuwey = _id ? { _id } : {}
        // {} return all data , promise 
        return this.schema.find(objQuwey);
    } // end of get method 


    create(record) {
        let newRec = new this.schema(record);
        return newRec.save();
    } // end of create method 

    update(_id, record) {
        return this.schema.findByIdAndUpdate(_id, record, { new: true });
    } // end of update method 


    delete(_id) {
        return this.schema.findByIdAndDpdate(_id);
    } // end of delete method 

} // end of model class 

module.exports = Model;