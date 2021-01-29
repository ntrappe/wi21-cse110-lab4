let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for( const prop in statistics ) {
    // starts with 'r' OR value is odd
    if( prop.startsWith('r') || (statistics[prop] % 2 != 0) )
        console.log(prop);
}