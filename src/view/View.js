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
        View.clearPage();
        View.init();
        View.loadTodayWeather(todayWeather);
        View.loadWeekWeather(weekWeather);
    }

    static clearPage(){
        const root=View._getElement(".root");
        while(root.childNodes[0]!==undefined){
            root.removeChild(root.childNodes[0]);
        }
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
        console.log(button);
        button.textContent="search";
        
        
        this.todayWeatherLeftContainer.append(condition);
        this.todayWeatherLeftContainer.append(name);
        this.todayWeatherLeftContainer.append(date);
        this.todayWeatherLeftContainer.append(temperature);
        this.todayWeatherLeftContainer.append(search);
        this.todayWeatherLeftContainer.append(button);

        const feelsLike=View._createElement("div","today-feels-like");
        feelsLike.textContent="feels like "+todayWeather.feelsLike+" °C";

        const humidity=View._createElement("div","today-humidity");
        humidity.textContent="humidity "+todayWeather.humidity+"%";

        const windSpeed=View._createElement("div","today-wind-speed");
        windSpeed.textContent="wind speed "+todayWeather.windSpeed+"km/h";

        this.todayWeatherRightContainer.append(feelsLike);
        this.todayWeatherRightContainer.append(humidity);
        this.todayWeatherRightContainer.append(windSpeed);
    }

    static loadWeekWeather(weekWeather){

        for(let i=0;i<7;i++){
            const container=View._createElement("div","week-weather-element-container");
            
            const name=View._createElement("div","week-weather-element-name");
            name.textContent=weekWeather.day[i].name;

            const maxTemp=View._createElement("div","week-weather-element-maxTemp");
            maxTemp.textContent=weekWeather.day[i].maxTemperature+" °C";
            
            const minTemp=View._createElement("div","week-weather-element-minTemp");
            minTemp.textContent=weekWeather.day[i].minTemperature+" °C";

            container.append(name,maxTemp,minTemp);

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

    static bindSearchButton(handler){

        const btn=View._getElement(".search-button");
        console.log(btn);
        btn.addEventListener("click",()=>{
            
            const input=View._getElement(".search-input");
            const location=input.value;
            handler(location);
        });
    }
}