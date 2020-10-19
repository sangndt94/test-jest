const googleSearch = require("./script")

const dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'
]

it("this is a test ",()=>{
    console.log(googleSearch('dog',dbMock));
})