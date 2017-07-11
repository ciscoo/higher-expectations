# HEX API Reference

This API is organized by resource type.

All endpoints are relative to `http://174.138.68.38/api`, unless otherwise noted.

## Resource Type

* [Users](#users)
* [Tasks](#tasks)
* [Events](#events)
* [Groups](#groups)
* [Group-types](#group-types)
* [Options](#options)


### Users

For Users Resource details, see the [resource representation](#users) section.

| HTTP Method	  | URL           | Description                |
|:--------------|:--------------|:---------------------------|
| `GET`      	  | `/users`      | Returns a list of users.   |
| `GET`      	  | `/users/:id`  | Returns a user by id.      |
| `PATCH`      	| `/users/:id`  | Modify a user by id.       |
| `POST`        | `/users`      | Creates a user.            |
| `DELETE`      | `/users/:id`  | Deletes a user by id.      |

### Tasks

For Tasks Resource details, see the [resource representation](#tasks) section.

| HTTP Method	| URL           | Description
|:------------|:--------------|:-------------------------|
| `GET`      	| `/tasks`      | Returns a list of tasks. |
| `GET`      	| `/tasks/:id`  | Returns a task by id.    |
| `PATCH`     | `/tasks/:id`  | Modify a task by id.     |
| `POST`      | `/tasks`      | Creates a task.          |
| `DELETE`    | `/tasks/:id`  | Deletes a task by id.    |

### Events

For Events Resource details, see the [resource representation](#events) section.

| HTTP Method	| URL            | Description
|:------------|:---------------|:--------------------------|
| `GET`      	| `/events`      | Returns a list of events. |
| `GET`      	| `/events/:id`  | Returns a event by id.    |
| `PATCH`     | `/events/:id`  | Modify a event by id.     |
| `POST`      | `/events`      | Creates a event.          |
| `DELETE`    | `/events/:id`  | Deletes a event by id.    |

### Groups

For Groups Resource details, see the [resource representation](#groups) section.

| HTTP Method	| URL            | Description
|:------------|:---------------|:--------------------------|
| `GET`      	| `/groups`      | Returns a list of groups. |
| `GET`      	| `/groups/:id`  | Returns a group by id.    |
| `PATCH`     | `/groups/:id`  | Modify a group by id.     |
| `POST`      | `/groups`      | Creates a group.          |
| `DELETE`    | `/groups/:id`  | Deletes a group by id.    |

### Group-types

For Group-types Resource details, see the [resource representation](#group-types) section.

| HTTP Method	| URL                 | Description
|:------------|:--------------------|:-------------------------------|
| `GET`      	| `/group-types`      | Returns a list of group types. |
| `GET`      	| `/group-types/:id`  | Returns a group type by id.    |
| `PATCH`     | `/group-types/:id`  | Modify a group type by id.     |
| `POST`      | `/group-types`      | Creates a group type.          |
| `DELETE`    | `/group-types/:id`  | Deletes a group type by id.    |

### Options

For Options Resource details, see the [resource representation](#options) section.

| HTTP Method	| URL              | Description
|:------------|:-----------------|:--------------------------|
| `GET`      	| `/options`       | Returns a list of options.



## Resource Representation

* [Users](#users)
* [Tasks](#tasks)
* [Events](#events)
* [Groups](#groups)
* [Group-types](#group-types)
* [Options](#options)

### users

```json
{
  "_id": ObjectId,
  "firstName": String,
  "lastName": String,
  "email": String,
  "password": String,
  "points": Number,
  "race": String,
  "ethnicity": String,
  "district": String,
  "school": String,
  "yearInSchool": String,
  "postPlans": String,
  "extraInterest": String,
  "careerInterest": String,
  "type": ObjectId
}
```

| Property           | Value        | Description                        |
|:-------------------|:-------------|:-----------------------------------|
| **firstName** 	   | **String**   | The user's first name. 	           |
| **lastName**  	   | **String**   | The user's last name.              |
| **email**     	   | **String**   | The user's email. 		             |
| **password**  	   | **String**   | The user's password.		           |
| **points**    	   | **String**   | The number of points the user has. |
| **race**     		   | **String**   | The user's race. 		               |
| **ethnicity**      | **String**   | The user's ethnicity. 		         |
| **district**       | **String**   | The user's school district. 	     |
| **school**         | **String**   | The user's school name.  	         |
| **yearInSchool**   | **String**   | The user's year in school. 	       |
| **postPlans**      | **String**   | The user's post school plans. 	   |
| **extraInterest**  | **String**   | The user's extra interest. 	       |
| **careerInterest** | **String**   | The user's career interest. 	     |
| **type** 		       | **ObjectId** | The user's group type. 	           |

### tasks

```json
{
  "_id": ObjectId,
  "name": String,
  "whatDescription": String,
  "whyDescription": String,
  "startDate": Date,
  "endDate": Date,
  "webLink": String,
  "pointOfContact": String,
  "points": Number,
  "validationType": String,
  "locationList": String,
  "requiremenList": String,
  "materialList": String,
  "audience": String,
  "district:" String,
  "school:" String,
  "postPlans:" String,
  "extraInter:" String,
  "careerInter:" String
}
```

| Property            | Value      | Description                                            |
|:--------------------|:-----------|:-------------------------------------------------------|
| **name**            | **String** | The title of the task.                                 |
| **whatDescription** | **String** | The description of what the task is.                   |
| **whyDescription**  | **String** | The description of why the user is going the task      |
| **startDate**       | **Date**   | The start date of the task. 			                      |
| **endDate**         | **Date**   | The end date of the task. 				                      |
| **webLink** 	      | **String** | A web link to the task page. 			                    |
| **pointOfContact**  | **String** | The point of contact for the task.  		                |
| **points**          | **String** | The ammount of points the task it worth. 		          |
| **validationType**  | **String** | The type of validation used. 			                    |
| **locationList**    | **String** | The list of locations where the tasks will take place. |
| **requiremenList**  | **String** | The requirements to participate in the task. 	        |
| **materialList**    | **String** | The materials that are needed to complete the task.    |
| **audience** 	      | **String** | The target audience of the task. 			                |
| **district**        | **String** | The school districts that the task is for. 	          |
| **school** 	        | **String** | The specific schools in which the task is for. 	      |
| **postPlans**       | **String** | The post plans groups that this task is for. 	        |
| **extraInter**      | **String** | The extra interest groups that the task is for. 	      |
| **careerInter**     | **String** | The career interest groups that the task is for. 	    |

### events

```json
{
  "_id": ObjectId,
  "startDate": Date,
  "startTime": String,
  "endTime": String,
  "title": String,
  "location": String,
  "description": String,
  "contactInfo": String,
  "points": Number,
  "validation": String,
  "audience": String,
  "district": String,
  "school": String,
  "postPlans": String,
  "extraInterest": String,
  "careerInterest": String
}
```

| Property           | Value       | Description                                 |
|:-------------------|:------------|:--------------------------------------------|
| **startDate**      | **Date**    | The date of the event.                      |
| **startTime**      | **String**  | The time in which the event starts.         |
| **endTime** 	     | **String**  | The time in which the event ends.           |
| **title**  	       | **String**  | The title of the event. 			               |
| **location**       | **String**  | The location of the event. 		             |
| **description**    | **String**  | The description of the event. 		           |
| **contactInfo**    | **String**  | The point of contact for the event. 	       |
| **points**  	     | **String**  | The ammount of points the event is worth.   |
| **validation**     | **String**  | The type of validation. 			               |
| **audience**       | **String**  | The target audence of the event. 		       |
| **district**       | **String**  | The school district that the event is for.  |
| **school**         | **String**  | The specific schools that the event is for. |
| **postPlans**      | **String**  | The target post plans groups. 		           |
| **extraInterest**  | **String**  | The target extra interest groups. 		       |
| **careerInterest** | **String**  | The target career interest groups. 	       |


### groups

```json
{
  "_id": ObjectId,
  "name": String,
  "description": String,
  "type": ObjectId
}
```

| Property        | Value        | Description              |
|:----------------|:-------------|:-------------------------|
| **name**        | **String**   | The name of the group.   |
| **description** | **String**   | A description for group. |
| **type**        | **ObjectId** | The group type. 	        |


### group types

```json
{
  "_id": ObjectId,
  "name": String
}
```

| Property | Value      | Description                 |
|:---------|:-----------|:----------------------------|
| **name** | **String** | The name of the group type. |