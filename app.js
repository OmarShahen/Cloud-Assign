const app = require('express')()
const path = require('path')
const userModel = require('./userModel')

app.get('/', (request, response) => {
    return response.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/api/users', (request, response) => {

    const { name, email } = request.body

    userModel.addUser(name, email)

    return response.status(200).json({
        message: 'user added successfully'
    })

})

app.post('/api/users', (request, response) => {

})

app.delete('/api/users', (request,  response) => {

})

app.listen(3000, () => console.log('server started on port 3000'))