function zakat_caluculator() {
       let C_A_H = + document.querySelector("#cash1").value;
       let B_H_I_B_A = + document.querySelector("#bba1").value;
       let R_V_O_S = + document.querySelector("#resale1").value;
       let P_H_A_I = + document.querySelector("#pro1").value;
       let O_I = +  document.querySelector("#oi1").value;
       res1 =(C_A_H + B_H_I_B_A + R_V_O_S + P_H_A_I + O_I); 
       res2 =(C_A_H + B_H_I_B_A + R_V_O_S + P_H_A_I + O_I) *0.025;

       //document.querySelector("#res1").innerHTML=("Zakat-Eligible Total " + res1 );
       //document.querySelector("#res2").innerHTML=("Your Zakat " + res2 );

       document.querySelector("#box1").value = (res1);
       document.querySelector("#box2").value = (res2);
    
}