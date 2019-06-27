const db = require('../../data/dbConfig');

const businessObject = {
    id: 1,
    username: "newuser",
    password: "pass",
    organization_name: "Chopped Company",
    address: "1234 Wayword Way, New York, NY 12345",
    email: "hello@choppedrestaurant.com",
    phone: "5555555555"
}

describe('business-model', () => {
    beforeEach(async () => {
        await db('businesses').truncate()
    });

    it('should add a new user', async () => {
        await db('businesses').insert(businessObject)
        let user = await db('businesses').first()
        expect(user).toEqual(businessObject)
    })
})