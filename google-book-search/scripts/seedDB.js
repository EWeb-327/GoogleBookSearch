const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/googlebooksearch'
);

const bookSeed = [
    {
        id: 'ayJpGQeyxgkC',
        title: 'To Kill A Mocking Bird',
        authors:'Harper Lee',
        description: 'The explosion of racial hate and violence in a small Alabama town is viewed by a little girl whose father defends a Black man accused of rape',
        thumbnail: 'http://books.google.com/books/content?id=ayJpGQeyxgkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        href: 'http://books.google.com/books?id=ayJpGQeyxgkC&dq=Title:To+Kill+A+Mocking+Bird&hl=&source=gbs_api'
    },
    {
        id: 'E9RLNSbRqncC',
        title: 'A Lineage of Grace',
        authors:'Francine Rivers',
        description: '2009 Retailers Choice Award winner! In this compilation of the five books in the best-selling Lineage of Grace series by Francine Rivers, we meet the five women whom God chose—Tamar, Rahab, Ruth, Bathsheba, and Mary. Each was faced with extraordinary—even scandalous—challenges. Each took great personal risk to fulfill her calling. Each was destined to play a key role in the lineage of Jesus Christ, the Savior of the World.',
        thumbnail: 'http://books.google.com/books/content?id=E9RLNSbRqncC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        href: 'https://play.google.com/store/books/details?id=E9RLNSbRqncC&source=gbs_api'
    }
];

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0)
    })
    .catch(err => {
        console.error(err);
        process.exit(1)
    });