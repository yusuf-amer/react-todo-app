#   React Crash Course (TodoList)
This is a simple todo list app built with React and this is a simple implementation of useState() & props
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##  Quick Start

```bash
# Install dependencies
npm install

# Serve on localhost:3000
npm start

# Build for production
npm run build
```

##  What was used
- [ ] [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)      =>  To make a responsive  design using Bootstrap Features
- [ ] [React-Icons](https://react-icons.github.io/react-icons)    =>  To add elegent icons to my design
- [ ] [useState](https://reactjs.org/docs/hooks-reference.html#usestate)       =>  To store and save task data

```bash
# [] Bootsrap
    #   Installation (for standard modern project)
    #   =>  To install Bootstrap type the conmmand below in your command prompt or GitBash
    npm i bootsrap

    #   Usage
    #   =>  To use Bootsrap you need to type the below code in your App.js component
    import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
    import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

# [] Reactjs
    # To install React-Icons type the conmmand below in your command prompt or GitBash
    npm i react-icons

    #   Usage
    #   =>  And to use it you need to type the below code in your component
    import { FaBeer } from 'react-icons/fa';
    class Question extends React.Component {
    render() {
            return <h3> Lets go for a <FaBeer />? </h3>
        }
    } 

# [] useState
    #   To use useState you need to type the below code in your component
    import { useState } from "react";
```
