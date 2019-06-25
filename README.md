# Lambda-Replate-BE


### Register New Business

POST to `https://bw-replate.herokuapp.com/api/auth/business/register`

Takes an object including:
```javascript 
{
        username: "bussinessUsername",
        password: “pass",
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
        username: “businessUsername",
        password: “pass”
}
```

You will be returned a JWT

### Register New Volunteer

POST to `https://bw-replate.herokuapp.com/api/auth/volunteer/register`

Takes an object including:
```javascript 
{
        username: "volunteerUsername",
        password: “pass",
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
        username: “volunteerUsername",
        password: “pass”
}
```

You will be returned a JWT


### Post a new food item to be donated

POST to `https://bw-replate.herokuapp.com/api/food`

Takes a JWT and an object including: 

```javascript
{
	name: “New Food Item",
	time: "113033",
	description: "Wow look at this food to be donated",
	is_claimed: “0", //0 if false, 1 if true.
	pickup_date: “01/01/2019“
}
```

You will be returned the newly created food object including:
```javascript
{
	name: “New Food Item",
	time: "113033",
	description: "Wow look at this food to be donated",
	is_claimed: “0", //0 if false, 1 if true.
	pickup_date: “01/01/2019“,
            business_id: 7, //automatically assigned according to provided JWT
            volunteer_id: null //will be assigned when claimed by a volunteer
}
```
