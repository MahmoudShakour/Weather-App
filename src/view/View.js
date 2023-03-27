import "./styles.css";


export class View{
    
    static init(){
        this.root=View._getElement(".root");
        
        this.todayWeatherContainer=View._createElement("div","today-weather-container");
        
        this.todayWeatherLeftContainer=View._createElement("div","today-weather-left-container");
        this.todayWeatherRightContainer=View._createElement("div","today-weather-right-container");
        this.todayWeatherContainer.append(this.todayWeatherLeftContainer);
        this.todayWeatherContainer.append(this.todayWeatherRightContainer);
        
        
        this.weekWeatherContainer=View._createElement("div","week-weather-container");
        
        
        
        this.root.append(this.todayWeatherContainer);
        this.root.append(this.weekWeatherContainer);
        
    }
    
    static loadHomePage(todayWeather,weekWeather){
        View.loadTodayWeather(todayWeather);
        View.loadWeekWeather(weekWeather);
    }
    
    static loadTodayWeather(todayWeather){
        console.log(todayWeather);
        const condition=View._createElement("div","today-condition");
        condition.textContent=todayWeather.condition;
        
        const name=View._createElement("div","today-name");
        name.textContent=todayWeather.name;
        
        const date=View._createElement("date","today-date");
        date.textContent=todayWeather.date;
        
        const temperature=View._createElement("div","today-temperature");
        temperature.textContent=todayWeather.temperature+ "°C";
        
        const search=View._createElement("input","search-input");
        search.placeholder="Search location...";

        const button=View._createElement("button","search-button");
        button.textContent="search";
        
        
        this.todayWeatherLeftContainer.append(condition);
        this.todayWeatherLeftContainer.append(name);
        this.todayWeatherLeftContainer.append(date);
        this.todayWeatherLeftContainer.append(temperature);
        this.todayWeatherLeftContainer.append(search);
        this.todayWeatherLeftContainer.append(button);

        const feelsLike=View._createElement("div","today-feels-like");
        feelsLike.textContent=todayWeather.feelsLike;

        const humadity=View._createElement("div","today-humadity");
        humadity.textContent=todayWeather.humadity;

        const chanceOfRain=View._createElement("div","today-chance-of-rain");
        chanceOfRain.textContent=todayWeather.chanceOfRain;

        const windSpeed=View._createElement("div","today-wind-speed");
        windSpeed.textContent=todayWeather.windSpeed;

        this.todayWeatherRightContainer.append(feelsLike);
        this.todayWeatherRightContainer.append(humadity);
        this.todayWeatherRightContainer.append(chanceOfRain);
        this.todayWeatherRightContainer.append(windSpeed);
    
    }

    static loadWeekWeather(weekWeather){

        for(let i=0;i<7;i++){
            const container=View._createElement("div","week-weather-element-container");
            
            const name=View._createElement("div","week-weather-element-name");
            name.textContent=weekWeather.day[i].name;

            const minTemp=View._createElement("div","week-weather-element-minTemp");
            minTemp.textContent=weekWeather.day[i].minTemperature;

            const maxTemp=View._createElement("div","week-weather-element-maxTemp");
            maxTemp.textContent=weekWeather.day[i].maxTemperature;

            container.append(name,minTemp,maxTemp);

            this.weekWeatherContainer.appendChild(container);
        }

    }

    static _getElement(elementSelector){
        const element=document.querySelector(elementSelector);
        return element;
    }

    static _createElement(elementType,className){
        const element=document.createElement(elementType);
        element.className=className;

        return element;
    }
}