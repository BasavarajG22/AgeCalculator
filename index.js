let inputDOB=document.getElementById("dob");
inputDOB.max=new Date().toISOString().split("T")[0];

function ageCalculation(){
    let dt=new Date(inputDOB.value);
    let y1=dt.getFullYear();
    let m1=dt.getMonth()+1;
    let d1=dt.getDate();

    let cdt=new Date();
    let currentYear=cdt.getFullYear();
    let currentMonth=cdt.getMonth()+1;
    let currentDay=cdt.getDate();

    let y2,m2,d2;

    y2=currentYear-y1;

    if(currentMonth>=m1){
        m2=currentMonth-m1;
    }
    else{
        y2=y2-1;
        m2=12+currentMonth-m1;
    }

    if(currentDay>=d1){
        d2=currentDay-d1;
    }
    else{
        m2--;
        d2=currentDay+getDaysInMonth(m1,y1)-d1;
    }
    if(m2<0){
        m2=11;
        y2=y2-1;
    }

    document.getElementById("display").innerHTML="You are "+y2+" Years, "+m2+" Months, "+d2+" days Old";
}

function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate()
}