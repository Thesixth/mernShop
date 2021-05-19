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
            name: 'Sanskari',
            category: 'T-shirt',
            image: 'https://paliemmanuel.com/proud-images/sanskari.jpg',
            price: 30,
            countInStock: 20,
            brand: 'Curry&Proud',
            rating: 4.5,
            numReviews: 10,
            description: 'T-shirt. ',
        },
        {
            name: 'Laadla',
            category: 'T-shirt',
            image: 'https://paliemmanuel.com/proud-images/laadla.jpg',
            price: 29,
            countInStock: 30,
            brand: 'Curry&Proud',
            rating: 4,
            numReviews: 10,
            description: 'T-shirt'
        },
        {
            name: 'Kidda',
            category: 'T-shirt',
            image: 'https://paliemmanuel.com/proud-images/kidda.jpg',
            price: 35,
            countInStock: 10,
            brand: 'Curry&Proud',
            rating: 3.5,
            numReviews: 10,
            description: 'T-shirt',
        },
        {
            name: 'Jalebi',
            category: 'T-shirt',
            image: 'https://paliemmanuel.com/proud-images/jalebi.jpg',
            price: 22,
            countInStock: 25,
            brand: 'Curry&Proud',
            rating: 4.5,
            numReviews: 10,
            description: 'T-shirt'
        },
        {
            name: 'Garmi',
            category: 'Tank top',
            image: 'https://paliemmanuel.com/proud-images/garmi.jpg',
            price: 19,
            countInStock: 20,
            brand: 'Curry&Proud',
            rating: 3.5,
            numReviews: 10,
            description: 'Tank top'
        },
        {
            name: 'Dilli',
            category: 'T-shirt',
            image: 'https://paliemmanuel.com/proud-images/dilli.jpg',
            price: 29,
            countInStock: 20,
            brand: 'Curry&Proud',
            rating: 3,
            numReviews: 10,
            description: 'T-shirt'
        },
        
        {
            name: 'Girl',
            category: 'Tank top',
            image: 'https://paliemmanuel.com/proud-images/girl.jpg',
            price: 30,
            countInStock: 0,
            brand: 'Curry&Proud',
            rating: 4.5,
            numReviews: 10,
            description: 'Tank top'
        },
        {
            name: '99',
            category: 'T-shirt',
            image: 'https://paliemmanuel.com/proud-images/99-problems.jpg',
            price: 26,
            countInStock: 12,
            brand: 'Kings',
            rating:3.5,
            numReviews: 10,
            description: 'T-shirt '
        },
    ]
}

export default data;