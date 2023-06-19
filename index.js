// Code your solution here
function findMatching(driverList, driverName) {
    return driverList.filter((thing)=> thing.toLowerCase() === driverName.toLowerCase() )
}
function fuzzyMatch(driverList, driverName) {
    return driverList.filter(thing => thing.toLowerCase().indexOf(driverName.toLowerCase()) === 0)

}
function matchName(driver, string) {
 
    return driver.filter(thing => thing.name === string )
}