/**
 * Created by user on 6.2.17.
 */

var express = require('express');
var router = express.Router();
const knex = require('../config/db');
var cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'hsbx7mifa',
    api_key: '916412692886171',
    api_secret: 'XhyukMieTwJkltzHoyHXctFGg4w'
});



var isAuthenticated = function (req, res, next) {
    if (req.cookies.username || req.user){
        return next();
    }
    res.redirect('/');
}
router.get('/', isAuthenticated, function(req, res) {
    var data = [
        {
            "_id" : "RxpNCCN7eAxwKmpbM",
            "g:id" : [
                "43910"
            ],
            "title" : [
                "Persol 0PO0714 Foldable Black Sunglasses 52 mm lens Colour: Black"
            ],
            "c:parent_title" : [
                "Persol 714 Foldable Black Sunglasses 52 mm lens 0PO0714"
            ],
            "description" : [
                "   Frame Color: Black   Foldable   Frame Material: Acetate frames made in Italy   Lens Color: Grey - Crystal lenses   Lens Size: 52 mm   Bridge Size: ND   Arm Size: 140 mm   Made in Italy   Up to ten additional phases are needed to produce the folding models.Each example is made in its entirety and then carefully broken at three points, on both sides and the bridge.   The bridge: Housings are created in the upper and lower parts to accommodate the hinges. The folding areas are then filed smooth for maximum comfort.   The Sides: After fitting a core, the hinge is applied and the sides then go through the finishing process.   Millimetre precision   In order to ensure a perfect fold, the nose pieces are slightly different to those of other Persol models.   The 714 is one of the cornerstones of the Persol collection.   "
            ],
            "g:google_product_category" : [
                "Clothing & Accessories"
            ],
            "g:product_type" : [
                "Accessories > Sunglasses"
            ],
            "link" : [
                "https://www.stuartslondon.com/persol-714-foldable-black-sunglasses-52-mm-lens-0po0714-p9968/s43910"
            ],
            "g:mobile_link" : [
                "https://www.stuartslondon.com/persol-714-foldable-black-sunglasses-52-mm-lens-0po0714-p9968/s43910"
            ],
            "g:adwords_redirect" : [
                "https://www.stuartslondon.com/persol-714-foldable-black-sunglasses-52-mm-lens-0po0714-p9968/s43910"
            ],
            "c:parent_link" : [
                "https://www.stuartslondon.com/persol-714-foldable-black-sunglasses-52-mm-lens-0po0714-p9968"
            ],
            "g:image_link" : [
                "http://www.stuartslondon.com/images/products/1447073486-14119900.jpg"
            ],
            "c:medium_image_link" : [
                "http://www.stuartslondon.com/images/products/medium/1447073486-48712900.jpg"
            ],
            "g:additional_image_link" : [
                "http://www.stuartslondon.com/images/persol-persol-714-foldable-black-sunglasses-52-mm-lens-0po0714-p9968-79237_image.jpg",
                "http://www.stuartslondon.com/images/persol-persol-714-foldable-black-sunglasses-52-mm-lens-0po0714-p9968-79238_image.jpg",
                "http://www.stuartslondon.com/images/persol-persol-714-foldable-black-sunglasses-52-mm-lens-0po0714-p9968-32827_image.jpg",
                "http://www.stuartslondon.com/images/persol-persol-714-foldable-black-sunglasses-52-mm-lens-0po0714-p9968-32828_image.jpg",
                "http://www.stuartslondon.com/images/persol-persol-714-foldable-black-sunglasses-52-mm-lens-0po0714-p9968-32829_image.jpg",
                "http://www.stuartslondon.com/images/persol-persol-714-foldable-black-sunglasses-52-mm-lens-0po0714-p9968-32830_image.jpg"
            ],
            "g:condition" : [
                "new"
            ],
            "g:availability" : [
                "in stock"
            ],
            "g:brand" : [
                "Persol"
            ],
            "g:color" : [
                "Black"
            ],
            "g:material" : [
                "acetate"
            ],
            "g:pattern" : [
                "plain"
            ],
            "g:gender" : [
                "male"
            ],
            "g:age_group" : [
                "adult"
            ],
            "g:shipping_weight" : [
                "0.20kg"
            ],
            "g:online_only" : [
                "N"
            ],
            "g:is_bundle" : [
                "N"
            ],
            "g:price" : [
                "226.00 GBP"
            ],
            "c:price_full" : [
                "226.00 GBP"
            ],
            "g:mpn" : [
                "58714020"
            ],
            "g:gtin" : [
                "713132022634"
            ],
            "g:item_group_id" : [
                "9968"
            ],
            "g:shipping" : [
                {
                    "g:country" : [
                        "GB"
                    ],
                    "g:price" : [
                        "0"
                    ],
                    "g:service" : [
                        "Royal Mail Tracked & Signed For Standard Service - 3.95"
                    ]
                }
            ],
            "category" : {
                "category_id" : "3p8YWASLY49BpwnEC",
                "name" : "Clothing & Accessories"
            },
            "price" : 226,
            "likes" : 57,
            "location" : {
                "type" : "Point",
                "coordinates" : [
                    -0.117,
                    51.5
                ]
            },
            "sold" : 99,
            "standart" : 8,
            "express" : 3,
            "standard" : "1.34",
            "shipping_standard" : 6,
            "shipping_express" : 3
        }
    ];
    console.log(req.cookies.username);
    knex('users').where({
        username: req.cookies.username
    }).select('avatar', 'gender').then(function (values) {
        console.log(111, values[0].avatar);
        res.render('profile.html', {avatar: cloudinary.image(values[0].avatar), gender:values[0].gender, products: data});
    });


});

module.exports = router;