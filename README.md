# Blog Application
Blog Application written using Loopback Framework

![Code Preview](https://raw.githubusercontent.com/harshitanand/blog-app-typeset/master/codeEnv.png)

## Prerequisities
Just run following command to begin 
```
npm install -g yarn

cd blog-app-typeset && yarn && bower install angular angular-resource angular-ui-router bootstrap
```
## Running and Viewing results

```
node .  OR yarn start
```
Veiwing API responses

![Explorer Preview1](https://raw.githubusercontent.com/harshitanand/blog-app-typeset/master/explorer1.png)
![Explorer Preview2](https://raw.githubusercontent.com/harshitanand/blog-app-typeset/master/explorer2.png)

To see the data saved as per Models
```
cat res.json
```
## Test APIs & Functionality

* Once you start the server, head over to [localhost:3000/explorer](http://localhost:3000/explorer/#!/BlogPost/BlogPost_getPostById).
* You will be seeing APIs available as per different models.
* APIs as per use cases are `BlogPosts/getPostById/:id` & `BlogPosts/getAllPosts?skip=0&limit=5`

## License
>You can check out the full license [here](https://github.com/harshitanand/Scrape-Service/blob/master/LICENSE)

This project is licensed under the terms of the **MIT** license.
