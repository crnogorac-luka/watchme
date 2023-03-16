export const isVisited = () => {
    if(sessionStorage.getItem("visited")) {
        return JSON.parse(sessionStorage.getItem("visited"));
    } else {
        sessionStorage.setItem("visited", JSON.stringify(true))
        return false;
    }
}

