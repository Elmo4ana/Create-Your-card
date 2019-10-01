/*jslint plusplus:true , evil:true */
/*global $,document,window ,URL*/

$(function () {

    //dom is ready lets go

    'use strict';

var nam = document.getElementById('name'),

    img = document.getElementById('img'),

    self = document.getElementById('self'),

    country = document.getElementById('country'),

    email = document.getElementById('email'),

    address = document.getElementById('address'),

    phone = document.getElementById('phone'),

    about = document.getElementById('about'),

    rname = document.getElementById('rname'),

    imgc = document.getElementById('imgc'),

    ff = document.getElementById('ff'),

    cc = document.getElementById('cc'),

    bb = document.getElementById('bb'),

    click = document.getElementById('click'),

    l1 = document.getElementById("l1"),

    l3 = document.getElementById("l3"),

    l4 = document.getElementById("l4"),

    l5 = document.getElementById("l5"),

    inpp = document.getElementById("inpp"),

    hh = document.getElementById("hh"),

    uu = document.getElementById("uu"),

    clickk = document.getElementById("clickk"),

    e = document.getElementById('e');

    window.URL = window.URL || window.webkitURL || window.mozURL;

    img.onchange = function () {

      var url = URL.createObjectURL(this.files[0]);

        imgc.src = url;

    };


  $("#inpp").on("keyup blur focus", "#self, #name, #country, #email, #address, #phone" , function () {

    if ($("#self").val() !== "" && $("#name").val() !== "" && $("#country").val() !== "" && $("#email").val() !== "" && $("#address").val() !== "" && $("#phone").val() !== "") {

        $("#click").attr("disabled", false);

    } else {

      $("#click").attr("disabled", true);
    }

  });



  click.onclick = function () {

      'use strict';

      rname.textContent = nam.value;

      about.textContent = self.value;

      l1.textContent = email.value;

      l3.textContent = country.value;

      l4.textContent = phone.value;

      l5.textContent = address.value;

      ff.style.minHeight = '500px';

      bb.style.minHeight = '500px';

      cc.style.width = '100%';

      l1.style.fontSize = '30px';

      l3.style.fontSize = '30px';

      l4.style.fontSize = '30px';

      l5.style.fontSize = '30px';

      imgc.style.width = '200px';

      imgc.style.height = '200px';

      hh.style.height = '130px';

      ff.style.marginBottom = '60px';

      rname.style.marginTop = '120px';

      inpp.style.transform = "scale(0,0)";

      cc.style.marginTop = "-420px";

      uu.style.paddingTop = "80px";

      click.style.display = "none";

      $('.carding').css("height", "420px");


  };


  clickk.onclick = function () {

      'use strict';

      ff.style.minHeight = '250px';

      bb.style.minHeight = '250px';

      cc.style.width = '300px';

      l1.style.fontSize = '15px';

      l3.style.fontSize = '15px';

      l4.style.fontSize = '15px';

      l5.style.fontSize = '15px';

      imgc.style.width = '100px';

      imgc.style.height = '100px';

      hh.style.height = '80px';

      ff.style.marginBottom = '0px';

      rname.style.marginTop = '10px';

      inpp.style.transform = "scale(1,1)";

      cc.style.marginTop = "20px";

      uu.style.paddingTop = "25px";

      click.style.display = "block";

      $('.carding').css("height", "auto");

  };


  $('#cf').on('click', function () {

      $('#img').trigger('click');
  });


});
