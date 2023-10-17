//task1
//1.
// let result=12*8
// console.log(result)

//2.
// let x=10/2
// console.log(x)

//3.
// var num1=20
// var num2=17
// console.log(num1+num2)

//4.
// var name="Fuad"
// var surname="Rahimli"
// var year=2005
// var info=name+" "+surname+" "+year
// console.log(info)

//5.
// var a=17
// var b=12
// var remainder=a%b
// console.log(remainder)

//6.
// var cityName="Baku"
// console.log(cityName)
// var cityName="Gence"
// console.log(cityName)


//task2
// let a = 1, b = 1;
// let c = ++a;
// let d = b++;
// console.log(c); //2
// console.log(d); //1
// console.log(b); //2

//task3
// let a = 2;
// let x = 1 + (a *= 2);
// console.log(x); //5

//task4
// console.log('test1', test); // undefined
// {
//     let test = "something"
//     console.log('test2', test); // test2 something
// }
// console.log('test3', test);  // undefined


// console.log('test1', test);  // test is not defined
// {
//     var test = "something"
//     console.log('test2', test); // test2 something
// // }
// console.log('test3', test); // test is not defined

//task5
// let name = "Ulfat" //string
// console.log(typeof name)
// let surname = Zakirli //zakirli is not defined
// console.log(typeof surname)
// let year = 2000 //number
// console.log(typeof year)
// year = "2000" //string
// let city; //undefined
// let qualification = null //object
// console.log(typeof qualification)
// let obj = { name: 'ulfat' } //object
// let arr = ['a', 'b', 'c'] //object
// console.log(typeof arr)    

//task 6 
const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
//1.
// console.log(arr1.sort((a,b) => a-b))
// //2.
// console.log(arr1.sort((a,b) => b-a))
// //3.
// let min=Math.min(...arr1)
// console.log(min)
// //4.
// let max=Math.max(...arr1)
// console.log(max)
// //5.
// let sum = 0
// for(i=0;i<arr1.length;i++){
//     sum +=arr1[i]
// }
// console.log(sum)
// //6.
// let psh=arr1.push(10,88)
// console.log(arr1)
// //7.
// arr1.splice(0,2)
// console.log(arr1)
// //8.
// arr1.unshift(0,9,11)
// console.log(arr1)
// //9.
// arr1.shift()
// arr1.shift()
// arr1.shift()
// arr1.shift()
// console.log(arr1)

//task7
const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]
// console.log(arr2)
//1.
// arr2.splice(0,2)
// arr2.splice(5,1)
// console.log(arr2)
//2.
// arr2.splice(5,0,"rovshan")
// console.log(arr2)
//3.
// arr2.reverse()
// console.log(arr2)
//4.
// console.log(arr2.sort((a, b) => a.localeCompare(b)))
//5.
// for(i=0;i<arr2.length;i++){
//     console.log(arr2[i])
// }
//6.
// for(i=0;i<arr2.length;i++){
//     if(arr2[i]=="Anar"){
//      console.log(arr2[i])
//     }
// }
//7.
// for(i=0;i<arr2.length;i++){
//          if(arr2[i]=="Anar"){
//             arr2[i]="Perviz"
//           console.log(arr2)
//          }
//      }
//8.
// if(arr2.length>=2){
// const last=arr2[arr2.length-2]
// console.log(last)
// }
//9.
// console.log(arr2.length)
//task 8
const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
//1.
// for(i=0;i<arr3.length;i++){
// if(typeof arr3[i]=="number"){
//     console.log(arr3[i])
// }
// }
//2.
// for(i=0;i<arr3.length;i++){
// if(arr3[i]){
//     console.log(arr3[i])
// }
// }
//3.
// for(i=0;i<arr3.length;i++){
//     if(!arr3[i]){
//         console.log(arr3[i])
//     }
//     }
//4.
// for(i=0;i<arr3.length;i++){
//     if(typeof arr3[i]=="string"){
//         console.log(arr3[i])
//     }
//     }
//5.
// for(i=0;i<101;i++){
//     console.log(i)
// }
//6.
//  for(i=2;i<21;i++){
//      console.log(i)
//  }
//7.
// for (let i = 0; i <= 10; i++) {
//     if(i%2!=0){
//     console.log(i);
// }}
//8.
//task9
const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]
// //1.
// console.log(arr4)
// result=[];

// for(i=0;i<arr4.length;i++){
// deyer=arr4[i]
//     if(typeof deyer=="number"){
//         result.push(deyer+10)
//     }
//     else if(typeof deyer=="string"){
//         result.push(deyer+" "+"string")
//     }
//     else if(!deyer){
//         result.push(deyer+" "+"falsy")
//     }
// }
// console.log(result)
//2.
// sum = 0
// for (i = 0; i < arr4.length; i++) {
//     if (typeof arr4[i] == "number") {
//         sum += arr4[i]
//     }
// }
// console.log(sum)
//3.
// count=0
// for(i=0;i<arr4.length;i++){
//     if(arr4[i]){
// count++;
//     }
// }
// console.log(count)
//4.
// count=0
// for(i=0;i<arr4.length;i++){
//     if(typeof arr4[i]=="string"){
// count++;
//     }
// }
// console.log(count)
//5.
// count=0
// for(i=0;i<arr4.length;i++){
//     if(!arr4[i]){
// count++;
//     }
// }
// console.log(count)
                                 //task10
//1.                                 
// let obj={
//     Name:"Fuad",
//     Surname:"Rahimli",
//     Age:"18",
//     City:"Baku"
// }
// console.log(obj)
//2.
// if(obj.Name=="Fuad"){
//     obj.Name="Jhon"
// }
// console.log(obj)
const obj = {
    email: 'ulfat@gmail.com',
    info: {
        gender: 'Male',
        loc: {
            city: "Baku",
            street: 'Nizami 22',
            education: {
                "uni name": "ADNSU",
            }
        }
    }
}
// console.log(obj.info.gender);
// console.log(obj.info.loc.city);
// console.log(obj.info.loc.education["uni name"]);