
export function getDayByDate(date){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let dayNumber=new Date(date).getDay();
    return days[dayNumber];
}