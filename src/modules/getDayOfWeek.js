export default function getDayOfWeek(){
    const Days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = new Date().getDay();
    
    return (Days[dayOfWeek]);
}