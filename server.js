const express = require('express');
const exphbs = require('express-handlebars');


const app = express();



const PORT = process.env.PORT || 3001;
// Setup for template engine
app.engine('handlebars', exphbs.create({}).engine);
app.set('view engine', 'handlebars');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
