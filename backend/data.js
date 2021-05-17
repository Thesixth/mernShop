import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Nendir',
            email: 'palinendir@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Paul',
            email: 'sometestg@gmail.com',
            password: bcrypt.hashSync('4321', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Another One',
            category: 'speakers',
            image: '/images/silver-headset.jpg',
            price: 359,
            countInStock: 20,
            brand: 'Khalid'/'s beats',
            rating: 3.5,
            numReviews: 10,
            description: 'Music from the ears of a legendary producer. ',
        },
        {
            name: 'Geo 6',
            category: 'Watches',
            image: '/images/black-watch.jpg',
            price: 299,
            countInStock: 30,
            brand: 'Kings',
            rating: 4,
            numReviews: 10,
            description: 'Best in class for the outdoor enthusiast'
        },
        {
            name: 'Bronica',
            category: 'Cameras',
            image: '/images/bronica-camera.jpg',
            price: 1399,
            countInStock: 10,
            brand: 'Zenza',
            rating: 3,
            numReviews: 10,
            description: 'Memories are etched in our minds. Life and it\'s worries can wipe some out. capture every moment with this machinery. This item is waterproof'
        },
        {
            name: 'Polar',
            category: 'Cameras',
            image: '/images/polaroid.jpg',
            price: 1999,
            countInStock: 25,
            brand: 'Zenza',
            rating: 4.5,
            numReviews: 10,
            description: 'Memories are etched in our minds. Life and it\'s worries can wipe some out. capture every moment with this machinery. This item is waterproof'
        },
        {
            name: 'D6700',
            category: 'Cameras',
            image: '/images/nikon-camera.jpg',
            price: 1399,
            countInStock: 20,
            brand: 'Zenza',
            rating: 3.5,
            numReviews: 10,
            description: 'Memories are etched in our minds. Life and it\'s worries can wipe some out. capture every moment with this machinery. This item is waterproof'
        },
        {
            name: 'Oculus Go',
            category: 'VR',
            image: '/images/oculus-go.jpg',
            price: 3999,
            countInStock: 20,
            brand: 'Oculus',
            rating: 3,
            numReviews: 10,
            description: 'Experience a whole new world right inside your living room.'
        },
        
        {
            name: 'Geo 5',
            category: 'watches',
            image: '/images/white-watch.jpg',
            price: 310,
            countInStock: 0,
            brand: 'Kings',
            rating: 2.5,
            numReviews: 10,
            description: 'Best in class for the outdoor enthusiast'
        },
        {
            name: 'The One',
            category: 'speakers',
            image: '/images/black-headset.jpg',
            price: 310,
            countInStock: 12,
            brand: 'Kings',
            rating:3.5,
            numReviews: 10,
            description: 'Music from the ears of a legendary producer. '
        },
    ]
}

export default data;