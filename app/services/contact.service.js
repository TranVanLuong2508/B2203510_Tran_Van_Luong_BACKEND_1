const { ObjectId, ReturnDocument } = require("mongodb")

class ContactService {
    
    constructor(client) {
        this.Contact = client.db().collection("contacts")
    }

    extractContactData (payload) {
        const contact ={
            name: payload.name,
            email: payload.email,
            address: payload.address,
            phone: payload.phone,
            favorite: payload.favorite,
        }

        Object.keys(contact).forEach( (key) =>{
            contact[key] === undefined && delete contact[key]
        })
        return  contact
    }

   async  create(payload) {
        const contact = this.extractContactData(payload);
        const result = await this.Contsact.findOneAndUpdate(
            contact,
            {$set: {favorite: contact.favorite ===true}},
            {ReturnDocument: "after", upsert: true}
        )
        return result
    }
}

module.exports = ContactService