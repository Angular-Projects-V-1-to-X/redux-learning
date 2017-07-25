# Redux Tutorial

Read through the code and try to build your own project with this step-by-step boiler-plate project.


## Instructions to run
1. Navigate to folder */1-basic-react*
2. *NPM install*
3. *NPM run dev*
4. Navigate to localhost:8080 for all modules except "4-redux". For this module use "localhost:8081".

## Time stamps for module "1-basic-react"
* 0:50 Babel overview
* 1:29 Webpack config
* 2:37 NPM install
* 3:13 Looking at client.js & breaking down React
* 5:45 Serving content from file
* 6:18 Live reload w/ npm install -S webpack-dev-server
* 7:10 webpack dev server --content-base src
* 7:55 --Inline --hot (live reload)
* 8:30 Creating a "dev" command in NPM


Email me for any queries. Shall try my best to address them.





This Redux tutorial series will show you the schematics of a Redux application. Redux is AWESOME, but it takes a bit to get it setup. There really aren't a lot of moving parts, but there are a lot of ways that you can configure it - namely - configure the store.

Redux is like Flux in several ways, but it's different as well. It has these pieces:
- Provider: wraps your application, injecting the store
- Store: one large store that contains the state for your entire application
- Reducers: reducers listen to actions and make changes on the store values. They also cannot mutate the data on the store in any way, but must return a new set of data.
- Actions: pretty much just like flux actions, the only difference is that async can be handled in multiple different ways depending on store "middleware"
- Components: React components can be injected with various pieces of store data. React components also trigger Redux actions. This is what makes it all come together.




To Install REDUX on your machine use the following command:

          npm i -S redux
