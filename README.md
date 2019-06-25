# Lambda-Replate-BE


### Register New Business

POST to `https://bw-replate.herokuapp.com/api/auth/business/register`

Takes an object including:
```javascript 
{
    username: "bussinessUsername",
    password: "pass",
    organization_name: "alskjdflaksjdf"
    address: "1234 Somewhere Place, New York, NY 12345",
    email: "wecare@helpinghandcharity.com",
    phone: 55
}
```
You will be returned the newly created user object as well as a JWT


### Login Existing Business

POST to `https://bw-replate.herokuapp.com/api/auth/business/login`

Takes an object including:
```javascript
{
    username: "businessUsername",
    password: "pass"
}
```

You will be returned a JWT

### Register New Volunteer

POST to `https://bw-replate.herokuapp.com/api/auth/volunteer/register`

Takes an object including:
```javascript 
{
    username: "volunteerUsername",
    password: "pass",
    organization_name: "alskjdflaksjdf"
    address: "1234 Somewhere Place, New York, NY 12345",
    email: "wecare@helpinghandcharity.com",
    phone: 55
}
```
You will be returned the newly created user object as well as a JWT


### Login Existing Volunteer

POST to `https://bw-replate.herokuapp.com/api/auth/volunteer/login`

Takes an object including:
```javascript
{
    username: "volunteerUsername",
    password: "pass"
}
```

You will be returned a JWT


### Post a new food item to be donated

POST to `https://bw-replate.herokuapp.com/api/food`

Takes a JWT and an object including: 

```javascript
{
	name: "New Food Item",
	time: "113033",
	description: "Wow look at this food to be donated",
	is_claimed: "0", //0 if false, 1 if true
	pickup_date: “01/01/2019“
}
```

You will be returned the newly created food object including:
```javascript
{
    name: "New Food Item",
    time: "113033",
    description: "Wow look at this food to be donated",
    is_claimed: “0", //0 if false, 1 if true",
    pickup_date: “01/01/2019“,
    business_id: 7, //automatically assigned according to provided JWT
    volunteer_id: null //will be assigned when claimed by a volunteer
}
```

### Update food item info

PUT to `https://bw-replate.herokuapp.com/api/food/:id` //where id is food's ID

Takes a JWT and an object containing any of the existing food properties that are to be updated.

### Delete food item

DELETE to `https://bw-replate.herokuapp.com/api/food/:id` //where id is food's ID

Takes a JWT


### Get all food items in database

GET to `https://bw-replate.herokuapp.com/api/food`

Requires JWT

Will be returned an array with food objects.

### Get all food items owned by logged in business

GET to `https://bw-replate.herokuapp.com/api/food/business`

Requires JWT

Will be returned an array with food objects.

### Get all food items claimed by the logged in volunteer

GET to `https://bw-replate.herokuapp.com/api/food/volunteer`

Requires JWT

Will be returned an array with food objects.

### Claim a food item (volunteer) 

PUT to `https://bw-replate.herokuapp.com/api/food/claim/:id`

Requires JWT and object including: 

```javascript
{
    is_claimed: 1 //0 for false, 1 for true
}
```

When claimed, food object's `volunteer_id` will be assigned the value of the volunteers ID by decoding the provided JWT.

When unclaimed, `volunteer_id` will be set to `null` and `is_claimed` will be set back to 0.

Will be return 1 if modified or a 0 if nothing was modified.