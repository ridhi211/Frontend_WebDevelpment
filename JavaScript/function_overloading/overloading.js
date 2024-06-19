function displayName(param1, param2, option) {  
    switch(option) {
       case 'JUST_NAME':
           return `Hi ${param1}`; 
       case 'FULL_NAME':
           return `Hi ${param1} ${param2}`;
      default:
          return 'No option provided.';
     }
}  

displayName('Ana', '', 'JUST_NAME');    // 'Hi Ana' 
displayName('Ana', 'Jhonson', 'FULL_NAME');    // 'Hi Ana Jhonson' 
displayName('Anonymous');    // 'No option provided.


function one(a, b){
    console.log(a+b)
}
one(2,3)
one(4,7)