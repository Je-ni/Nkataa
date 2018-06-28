# Nkata: Social Interaction App Backend
This enables you to perfoem basic operations as in a social media app. Built during my internship at [genesystechhub](www.genesystechhub.com).

# Details
This uses the MVC code structure and the service-repository design pattern. Using NodeJS, MongoDb framework:Mongoose and expressjs. 

## Brief
You can create a new user, create a new post which is linked to a user, create a new comment which is linked to a post and a user. Then you can view, delete, getById and update any of the above.

## USAGE
Ensure that your server is running and that you install all node dependencies.

<b>1. First user</b>
* Create user using the url: localhost:3000/users/create and the POST method. The post body should have a name, email and password.
* You can get all users with the url: localhost:3000/users/ and the GET method
* You can delete user using the url: localhost:3000/users/delete/pasteuserid and the DELETE method
* Search for user using the request query url: localhost:3000/users/search?[_id|name|email]=[value] and the GET method
* Update a user using the url :localhost:3000/users/update/pasteuserId and the PUT method. Modify the request.body to reflect the new data you want. 

<b>2. Secondly Post</b>
* Create post using the url: localhost:3000/user/posts/create and the POST method. The request body should have a user(this should contain a valid user Id) and a postBody.
* You can get all posts with the url: localhost:3000/user/posts/ and the GET method
* You can delete post using the url: localhost:3000/user/posts/delete/pastepostid and the DELETE method
* Search for post using the request query url: localhost:3000/user/posts/getPostsByParam?[_id|user|postBody]=[value] and the GET method
* Update a user using the url :localhost:3000/user/posts/update/pastepostId and the PUT method. Modify the postBody to reflect the new data you want.

<b>3. Finally Comment</b>
* Create comment using the url: localhost:3000/post/comments/create and the POST method. The request body should have a user, post(these should contain a valid Ids) and a commentBody.
* You can get all comments with the url: localhost:3000/post/comments/ and the GET method. `This is basically for test purposes.`
* However, you can get the comments in a post by using the url: localhost:3000/post/comments/pastepostId here and using the GET method.
* You can delete comment using the url: localhost:3000/post/comments/delete/pastecommentid and the DELETE method
* Update a comment using the url :localhost:3000/post/comments/update/pastecommentId and the PUT method. Modify the commentBody to reflect the new data you want.

## Tools Used
* VS Code
* Postman
* Google's Advanced Rest Client
* MongoDB Compass

## Hosting
You can run this on your local server using the port 3000.

## Testing
I tested this API using Google's Advanced Rest Client and Postman

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Contributors
<b>Tutor</b>: Mr [Nwangwu Ositadinma](o.nwangwu@genesystechhub.com), click on his name to email. <br>
<b>Others</b>: Back-End Web Development Interns 2018 Genesys Tech Hub

