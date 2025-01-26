const express = require('express');
const sequelize = require('./config/database');
const Todo = require('./models/Todo');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

sequelize.sync().then(() => {
    console.log('Database synced');
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(err => console.log(err));
const todosRouter = require('./routes/todos');
app.use('/todos', todosRouter);
