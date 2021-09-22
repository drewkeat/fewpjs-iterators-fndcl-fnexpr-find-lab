
function superbowlWin(array) {
    let response = array.find(object => object.result === "W")
    if (response) {
        return response.year
    } else {
        return response
    }
}