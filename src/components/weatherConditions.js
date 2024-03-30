const conditions = {
    "rain": "https://cdn-icons-png.flaticon.com/128/3520/3520675.png",
    "cloud": "https://cdn-icons-png.flaticon.com/128/4814/4814293.png",
    "sun": "https://cdn-icons-png.flaticon.com/128/869/869869.png",
    "snow": "https://cdn-icons-png.flaticon.com/128/2315/2315309.png",
    "wind": "https://cdn-icons-png.flaticon.com/128/4814/4814312.png",
    "frog": "https://cdn-icons-png.flaticon.com/128/4005/4005817.png",
    "thunderstorm": "https://cdn-icons-png.flaticon.com/128/1146/1146860.png"
}

function getCondition(description){
    

    if(/Thunderstorm/.test(description) || /thunderstorm/.test(description)){
        return conditions.thunderstorm
    }
    if(/rain/.test(description)){
        return conditions.rain;
    }
    else if(/snow/.test(description)){
        return conditions.snow;

    }    
    else if(/frog/.test(description)){
        return conditions.frog;
    }
    else if(/Overcast clouds/.test(description)){
        return conditions.cloud;
    }
    else if(/wind/.test(description)){
        return conditions.wind;
    }
    else{
        return conditions.sun;
    }
}

export default getCondition;
