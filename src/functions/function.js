export function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max-min) + min)
}