export class dayWeather{
    constructor(name,temperature,feelsLike,windSpeed,humidity,date,condition,chanceOfRain,windSpeedSpeed){
        this._name=name;
        this._temperature=temperature;
        this._feelsLike=feelsLike;
        this._windSpeed=windSpeed;
        this._humidity=humidity;
        this._date=date;
        this._condition=condition;
        this._chanceOfRain=chanceOfRain;
    }

    set name(value){ this._name=value; }
    get name(){ return this._name; }

    set temperature(value){ this._temperature=value; }
    get temperature(){ return this._temperature; }

    set feelsLike(value){ this._feelsLike=value; }
    get feelsLike() { return this._feelsLike; }

    set windSpeed(value){ this._windSpeed=value; }
    get windSpeed() { return this._windSpeed; }

    set humidity(value){ this._humidity=value; }
    get humidity() { return this._humidity; }

    set date(value){ this._date=value; }
    get date() { return this._date; }

    set condition(value){ this._condition=value; }
    get condition() { return this._condition; }

    set chanceOfRain(value){ this._chanceOfRain=value; }
    get chanceOfRain() { return this._chanceOfRain; }

    set windSpeedSpeed(value){ this._windSpeedSpeed=value; }
    get windSpeedSpeed() { return this._windSpeedSpeed; }


    static createdayWeather(dayWeatherObj){
        let name=dayWeatherObj.location.name;
        let temperature=dayWeatherObj.current.temp_c;
        let feelsLike=dayWeatherObj.current.feelslike_c;
        let windSpeed=dayWeatherObj.current.wind_kph;
        let humidity=dayWeatherObj.current.humidity;
        let date=dayWeatherObj.current.last_updated;
        let condition=dayWeatherObj.current.condition.text;
        
        return new dayWeather(name,temperature,feelsLike,windSpeed,humidity,date,condition);
    }
}
