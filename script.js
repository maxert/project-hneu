window.onload = () => {
  var massiveSave = {};
  var massiveGet = JSON.parse(localStorage.getItem("massiveSave"));
  document.querySelectorAll(".text_edit").forEach((Element, i) => {
    if (massiveGet !== null) {
      if(massiveGet[i]==="undefined"){

      }else{
      Element.innerText = massiveGet[i];
      }
    }
    Element.setAttribute("data-index", i);
    massiveSave[i] = Element.innerText;
  });

  document.addEventListener("click", function (event) {
    document.querySelectorAll(".text_edit").forEach(Element => {
      var e = Element;
      if (e.contains(event.target)) {
        if (Element.contentEditable === true) {
          e.contentEditable = "false";
        } else {
          e.contentEditable = "true";
          e.focus();
        }
      } else if (event.target.classList.contains("edit")) {
        event.target.parentElement.querySelectorAll(".text_edit")[0].contentEditable = "true";


        event.target.parentElement.querySelectorAll(".text_edit")[0].focus();
      } else if (event.target.classList.contains("save")) {
        event.target.parentElement.querySelectorAll(".text_edit")[0].contentEditable = "false";
        localStorage.setItem("massiveSave", JSON.stringify(massiveSave, null, 4));
      } else {
        e.contentEditable = "false";
        localStorage.setItem("massiveSave", JSON.stringify(massiveSave, null, 4));
      }
    });
  });
  document.querySelectorAll(".text_edit").forEach(Element => {
    Element.onkeypress = () => {
      massiveSave[Element.dataset.index] = Element.innerText;
      localStorage.setItem("massiveSave", JSON.stringify(massiveSave, null, 4));
    }
    Element.onkeyup = () => {
      massiveSave[Element.dataset.index] = Element.innerText;
      localStorage.setItem("massiveSave", JSON.stringify(massiveSave, null, 4));
    }
  })


};