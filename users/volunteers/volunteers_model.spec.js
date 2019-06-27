const db = require('../../data/dbConfig');

const volunteerObject = {
    id: 1,
    username: "newuser",
    password: "pass",
    organization_name: "Chopped Company",
    address: "1234 Wayword Way, New York, NY 12345",
    email: "hello@choppedrestaurant.com",
    phone: "5555555555"
}

describe('volunteers_model', () => {
    beforeEach(async () => {
        await db('volunteers').truncate()
    });

    it('should add a new user', async () => {
        await db('volunteers').insert(volunteerObject)
        let user = await db('volunteers').first()
        expect(user).toEqual(volunteerObject)
    })
})