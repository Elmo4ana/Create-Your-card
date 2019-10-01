/*jslint plusplus:true , evil:true*/
/*global $,document,window*/

var inpu = document.getElementById('inpu'),

    div = document.getElementById('login'),

    di = document.getElementById('di'),

    pas = document.getElementById('pas'),

    pass = String.fromCharCode(97, 49, 50, 51, 52, 53, 54);




window.onload = function () {

    'use strict';

    div.style.top = "50%";



};

pas.onclick = function () {

    'use strict';


    if (inpu.value === pass) {


        window.location.replace('file:///E:/IT/My%20All%20works/website/Card%20template/Card.html');

    } else {

        window.alert('كلمة السر خاطئة حاول مرة أخرى');
    }

};




//var _0xc52e=["\x6F\x6E\x63\x6C\x69\x63\x6B","\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x76\x61\x6C\x75\x65","\x66\x69\x6C\x65\x3A\x2F\x2F\x2F\x44\x3A\x2F\x49\x54\x2F\x4D\x79\x25\x32\x30\x41\x6C\x6C\x25\x32\x30\x77\x6F\x72\x6B\x73\x2F\x77\x65\x62\x73\x69\x74\x65\x2F\x43\x61\x72\x64\x25\x32\x30\x74\x65\x6D\x70\x6C\x61\x74\x65\x2F\x43\x61\x72\x64\x2E\x68\x74\x6D\x6C","\x72\x65\x70\x6C\x61\x63\x65","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\u0643\u0644\u0645\u0629\x20\u0627\u0644\u0633\u0631\x20\u063A\u064A\u0631\x20\u0635\u062D\u064A\u062D\u0629\x20\u0627\u0644\u0631\u062C\u0627\u0621\x20\u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629\x20\u0645\u0631\u0647\x20\u0623\u062E\u0631\u0649","\x61\x6C\x65\x72\x74"];pas[_0xc52e[0]]= function(){_0xc52e[1];if(inpu[_0xc52e[2]]=== pass){window[_0xc52e[5]][_0xc52e[4]](_0xc52e[3])}else {window[_0xc52e[7]](_0xc52e[6])}}
