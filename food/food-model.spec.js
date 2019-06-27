const db = require('../data/dbConfig')

const foodObject = {
    name: "Lot's Of Pizzaa",
    pickup_date: "333456",
    time: "12345",
    description: "We have a ton of soup!",
    is_claimed: 0,
    volunteer_id: null
}

describe('food-model', () => {
    beforeEach(async () => {
        await db('food').truncate()
    });

    it('should set environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

    it('should return an array', async () => {
        const food = await db('food')
        expect(food).toEqual([])
    })

    it('should return an array of all the food in the database with id and business_id added', async () => {
        await db('food').insert(foodObject)
        let food = await db('food')
        expect(food).toEqual([{...foodObject, id: 1, business_id: null}])
    })

    it('should updated the volunteer_id to the volunteer that claims the food', async () => {
        const food_id = 1
        const food = {...foodObject, volunteer_id: 1}
        await db('food').insert(foodObject)
        await db('food').where({id: food_id}).update(food)
        let updatedFood = await db('food')
        expect(updatedFood).toEqual([{...foodObject, volunteer_id: 1, id: 1, business_id: null}])
    })

    it('should update food info', async () => {
        const food_id = 1
        const food = {...foodObject, description: "This is our food"}
        await db('food').insert(foodObject)
        await db('food').where({id: food_id}).update(food)
        let updatedFood = await db('food')
        expect(updatedFood).toEqual([{...food, id: 1, business_id: null}])
    })
    
    it('should delete food item', async () => {
        await db('food').insert(foodObject)
        let food = await db('food')
        let food_id = 1
        await db('food').where({id: food_id}).del()
        let updatedFood = await db('food')
        expect(updatedFood).toEqual([])
    })
})