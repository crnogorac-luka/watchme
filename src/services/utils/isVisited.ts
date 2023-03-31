export const isVisited = () => {
    let isVisitedValue = sessionStorage.getItem("visited")
    if(isVisitedValue) {
        return JSON.parse(isVisitedValue);
    } else {
        sessionStorage.setItem("visited", JSON.stringify(true))
        return false;
    }
}

