const numberCollection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//forEach ====================================================
console.log("###### forEach #######");

const forEach = (colection, callback) => {

    for(let i = 0; i < colection.length; i++){
        callback(colection[i]);
    };
};

forEach(numberCollection, (element) => {
    console.log(`Елемент: ${element}`);
});

//filter =========================================================
console.log("###### FILTER #######");

const filter = (colection, callback) => {

    let newCollection = [];
    for(let i = 0; i < colection.length; i++){
        if(callback(colection[i])){
            newCollection.push(colection[i]);
        };
    };
    return newCollection;
};

let filteredCollection = filter(numberCollection, (element) => {
    return (element % 5 == 0);
});
console.log(filteredCollection);

filteredCollection = filter(numberCollection, (element) => {
    return (element >= 3);
});
console.log(filteredCollection);

//map ======================================================
console.log("###### MAP #######");

const map = (collection, callback) => {

    let newCollection = [];

    for(let i = 0; i < collection.length; i++){
        newCollection.push(callback(collection[i]));
    };

    return newCollection;
};

let transformedCollection = map(numberCollection, (element) => {
    return (element * 2);
});
console.log(transformedCollection);

transformedCollection = map(numberCollection, (element) => {
    return (element - 4);
});
console.log(transformedCollection);

transformedCollection = map(numberCollection, (element) => {
    return { index: element,
            value: element*5};
});
console.log(transformedCollection);

//fill ======================================================
console.log("###### FILL #######");

let emptyCollectionToFill    = [];
let notEmptyCollectionToFill    = ["c", 8, 7, 9, "c", 3];
const sourceCollection  = ["a", "b", "c", "d", "e", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getRandomNumberBetweenMinAndMax  = (min, max) => {
    
    let randomNumber    = Math.random() * (max - min + 1) + min;
    randomNumber        = Math.floor(randomNumber);
    return randomNumber;
}

const fill = (collection, source, max) => {
    
    for(let i = collection.length; i < max; i++){
        collection.push(source[getRandomNumberBetweenMinAndMax(0, (source.length - 1))]);
    };

    return collection;
};

let testFill1 = fill(emptyCollectionToFill, sourceCollection, 5);
console.log(testFill1);

let testFill2 = fill(notEmptyCollectionToFill, sourceCollection, 5);
console.log(testFill2);

let testFill3 = fill(notEmptyCollectionToFill, sourceCollection, 10);
console.log(testFill3);


//reverse ======================================================
console.log("###### REVERSE #######");

let collectionToReverse = ["e", 6, "e", "d", 1, 1, 5, "d", 10, 7];

const reverse = (collection) => {

    let resultedCollection = [];

    for(let i = collection.length - 1; i >= 0; i--){
        resultedCollection.push(collection[i]);
    }
    return resultedCollection;
};

collectionToReverse = reverse(collectionToReverse);
console.log(collectionToReverse);

//reverse version2 ======================================================
console.log("###### REVERSE ARRAYS #######");

let collectionsToReverse = [ ["a", 5, "e"], ["v", 4, 1], [12, "c", 10] ];

const reverseArrays = (collection) => {

    let finalResultedCollectionOfArrays = [];
    let reversedInternalCollection = [];

    for(let i = collection.length - 1; i >= 0; i--){

        reversedInternalCollection = reverse(collection[i]);
        finalResultedCollectionOfArrays.push(reversedInternalCollection);
    };
    return finalResultedCollectionOfArrays;
};

let test = reverseArrays(collectionsToReverse);
console.log(test);


//stringBuilder ======================================================
console.log("###### stringBuilder #######");

//version 1
let stringCollection = ["This", "is", "super", "sample", "text"];
let testString = "";

const stringBuilder = (collection) => {
    return collection.join(" ");
};

testString = stringBuilder(stringCollection);
console.log(testString);


//version 2
const stringBuilderWithDecoration = (collection, callback) => {
    let newStringCollection = [];

    for(let i = 0; i < collection.length; i++){
        newStringCollection.push(callback(collection[i]));
    };
    
    return newStringCollection.join(" ");
};

testString = stringBuilderWithDecoration(stringCollection, (element) => {
    return ["@", element, "@"].join("");
});
console.log(testString);


//version 3
let mixedCollection = ["This", "is", 5, "stars", "text"];

const stringBuilderWithObjectRules = (collection, objectRules) => {

    let newStringCollection = [];
    let elementType;

    for(let i = 0; i < collection.length; i++){
        elementType = typeof(collection[i]);
        newStringCollection.push(objectRules[elementType](collection[i]));
    };

    return newStringCollection.join(" ");
};

testString = stringBuilderWithObjectRules(mixedCollection, {
    "number": function(element){
        return element * 2;
    },
    "string": function(element){
        return ["$", element, "%"].join("");
    }
});
console.log(testString);

