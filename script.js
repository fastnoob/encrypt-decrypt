function display() {
        let string = document.getElementById("istring").value;
        var i=string.length-1;
        var ans = "";
       while(i>=0) {
            if(string.charAt(i)=='A') {
                ans+='W';
            } else if(string.charAt(i)=='B') {
                ans+='H';
            } else if(string.charAt(i)=='C') {
                ans+='L';               
            } else if(string.charAt(i)=='D') {
                ans+='U';
            } else if(string.charAt(i)=='E') {
                ans+='S';
            } else if(string.charAt(i)=='F') {
                ans+='Y';
            } else if(string.charAt(i)=='G') {
                ans+='N';
            } else if(string.charAt(i)=='H') {
                ans+='B';
            } else if(string.charAt(i)=='I') {
                ans+='M';
            } else if(string.charAt(i)=='J') {
                ans+='P';
            } else if(string.charAt(i)=='K') {
                ans+='O';
            } else if(string.charAt(i)=='L') {
                ans+='C';
            } else if(string.charAt(i)=='M') {
                ans+='I';
            } else if(string.charAt(i)=='N') {
                ans+='G';
            } else if(string.charAt(i)=='O') {
                ans+='K';
            } else if(string.charAt(i)=='P') {
                ans+='J';
            } else if(string.charAt(i)=='Q') {
                ans+='V';
            } else if(string.charAt(i)=='R') {
                ans+='X';
            } else if(string.charAt(i)=='S') {
                ans+='E';
            } else if(string.charAt(i)=='T') {
                ans+='Z';
            } else if(string.charAt(i)=='U') {
                ans+='D';
            } else if(string.charAt(i)=='V') {
                ans+='Q';
            } else if(string.charAt(i)=='W') {
                ans+='A';
            } else if(string.charAt(i)=='X') {
                ans+='R';
            } else if(string.charAt(i)=='Y') {
                ans+='F';
            } else if(string.charAt(i)=='Z') {
                ans+='T';
            }
            else if(string.charAt(i)=='a') {
                ans+='y';
            } else if(string.charAt(i)=='b') {
                ans+='r';
            } else if(string.charAt(i)=='c') {
                ans+='t';
            } else if(string.charAt(i)=='d') {
                ans+='v';
            } else if(string.charAt(i)=='e') {
                ans+='w';
            } else if(string.charAt(i)=='f') {
                ans+='u';
            } else if(string.charAt(i)=='g') {
                ans+='n';
            } else if(string.charAt(i)=='h') {
                ans+='x';
            } else if(string.charAt(i)=='i') {
                ans+='o';
            } else if(string.charAt(i)=='j') {
                ans+='m';
            } else if(string.charAt(i)=='k') {
                ans+='p';
            } else if(string.charAt(i)=='l') {
                ans+='q';
            } else if(string.charAt(i)=='m') {
                ans+='j';
            } else if(string.charAt(i)=='n') {
                ans+='g';
            } else if(string.charAt(i)=='o') {
                ans+='i';
            } else if(string.charAt(i)=='p') {
                ans+='k';
            } else if(string.charAt(i)=='q') {
                ans+='l';
            } else if(string.charAt(i)=='r') {
                ans+='b';
            } else if(string.charAt(i)=='s') {
                ans+='z';
            } else if(string.charAt(i)=='t') {
                ans+='c';
            } else if(string.charAt(i)=='u') {
                ans+='f';
            } else if(string.charAt(i)=='v') {
                ans+='d';
            } else if(string.charAt(i)=='w') {
                ans+='e';
            } else if(string.charAt(i)=='x') {
                ans+='h';
            } else if(string.charAt(i)=='y') {
                ans+='a';
            } else if(string.charAt(i)=='z') {
                ans+='s';
            } else if(string.charAt(i)=='0') {
                ans+='7'
            } else if(string.charAt(i)=='1') {
                ans+='6'
            } else if(string.charAt(i)=='2') {
                ans+='5'
            } else if(string.charAt(i)=='3') {
                ans+='8'
            } else if(string.charAt(i)=='4') {
                ans+='9'
            } else if(string.charAt(i)=='5') {
                ans+='2'
            } else if(string.charAt(i)=='6') {
                ans+='1'
            } else if(string.charAt(i)=='7') {
                ans+='0'
            } else if(string.charAt(i)=='8') {
                ans+='3'
            } else if(string.charAt(i)=='9') {
                ans+='4'
            } else if(string.charAt(i)=='!') {
                ans+="_";
            } else if(string.charAt(i)=='@') {
                ans+="=";
            } else if(string.charAt(i)=='#') {
                ans+="*";
            } else if(string.charAt(i)=='$') {
                ans+="&";
            } else if(string.charAt(i)=='%') {
                ans+="+";
            } else if(string.charAt(i)=='^') {
                ans+=".";
            } else if(string.charAt(i)=='&') {
                ans+="$";
            } else if(string.charAt(i)=='*') {
                ans+="#";
            }  else if(string.charAt(i)=='+') {
                ans+="%";
            } else if(string.charAt(i)=='-') {
                ans+=";";
            } else if(string.charAt(i)=='/') {
                ans+="!";
            } else if(string.charAt(i)=='.') {
                ans+="^";
            } else if(string.charAt(i)==',') {
                ans+=">";
            } else if(string.charAt(i)==':') {
                ans+="<";
            } else if(string.charAt(i)==';') {
                ans+="-";
            } else if(string.charAt(i)=='?') {
                ans+="/";
            } else if(string.charAt(i)=='>') {
                ans+=",";
            } else if(string.charAt(i)=='<') {
                ans+=":";
            } else if(string.charAt(i)=='=') {
                ans+="@";
            } else if(string.charAt(i)=='_') {
                ans+="!";
            } else {
                ans+=string.charAt(i);
            }
            i--;
        }
        var reverse="";
        for(var k=ans.length-1;k>=0;k--) {
            reverse+=ans.charAt(k);
        }
        document.getElementById("output").value = reverse;
}