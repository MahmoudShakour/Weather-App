export class dayWeather{
    constructor(name,temperature_c,feelsLike_c,windSpeed_kph,humidity,date,condition,temperature_f,feelsLike_f,windSpeed_mph){
        this._name=name;
        this._temperature_c=temperature_c+" °C";
        this._feelsLike_c=feelsLike_c+" °C";
        this._windSpeed_kph=windSpeed_kph+" km/h";
        this._humidity=humidity+"%";
        this._date=date;
        this._condition=condition;
        this._temperature_f=temperature_f+" °F";
        this._feelsLike_f=feelsLike_f+" °F";
        this._windSpeed_mph=windSpeed_mph+" mph";
        console.log(windSpeed_mph);
    }

    set name(value){ this._name=value; }
    get name(){ return this._name; }

    set temperature_c(value){ this._temperature_c=value; }
    get temperature_c(){ return this._temperature_c; }

    set feelsLike_c(value){ this._feelsLike_c=value; }
    get feelsLike_c() { return this._feelsLike_c; }

    set windSpeed_kph(value){ this._windSpeed_kph=value; }
    get windSpeed_kph() { return this._windSpeed_kph; }

    set humidity(value){ this._humidity=value; }
    get humidity() { return this._humidity; }

    set date(value){ this._date=value; }
    get date() { return this._date; }

    set condition(value){ this._condition=value; }
    get condition() { return this._condition; }

    set temperature_f(value){ this._temperature_f=value; }
    get temperature_f() { return this._temperature_f; }

    set feelsLike_f(value){ this._feelsLike_f=value; }
    get feelsLike_f() { return this._feelsLike_f; }

    set windSpeed_mph(value){ this._windSpeed_mph=value; }
    get windSpeed_mph() { return this._windSpeed_mph; }

    static createdayWeather(dayWeatherObj){
        let name=dayWeatherObj.location.name;
        let temperature_c=dayWeatherObj.current.temp_c;
        let feelsLike_c=dayWeatherObj.current.feelslike_c;
        let windSpeed_kph=dayWeatherObj.current.wind_kph;
        let humidity=dayWeatherObj.current.humidity;
        let date=dayWeatherObj.current.last_updated;
        let condition=dayWeatherObj.current.condition.text;
        let temperature_f=dayWeatherObj.current.temp_f;
        let feelsLike_f=dayWeatherObj.current.feelslike_f;
        let windSpeed_mph=dayWeatherObj.current.wind_mph;

        console.log(windSpeed_mph);
        return new dayWeather(name,temperature_c,feelsLike_c,windSpeed_kph,humidity,date,condition,temperature_f,feelsLike_f,windSpeed_mph);
    }
}
