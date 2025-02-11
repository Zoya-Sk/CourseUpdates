const classInfo = {
    aman: {
        grade: 'A+',
        city: "delhi"
    },
    shradha: {
        grade: 'A',
        city: "pune"
    },
    karan: {
        grade: 'O',
        city: "mumbai"
    }
};

// console.log(classInfo);

classInfo.aman;
classInfo.shradha.city;
classInfo.karan.city = "gurgaon";

console.log(classInfo.karan);