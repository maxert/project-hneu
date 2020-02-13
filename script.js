window.onload = () => {
  var massiveSave = [];

  var massiveGet = localStorage.getItem("massiveSave");
  if (massiveGet === null) {

  } else {
    var sliceGet = massiveGet.split(",")
  }



  document.querySelectorAll(".text_edit").forEach((Element, i) => {
    if (sliceGet !== undefined) {
      Element.innerText = sliceGet[i];
    }
    Element.setAttribute("data-index", i);
    massiveSave.push(Element.innerText);
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
        localStorage.setItem("massiveSave", massiveSave);
      } else {
        e.contentEditable = "false";
        localStorage.setItem("massiveSave", massiveSave);
      }
    });
  });
  document.querySelectorAll(".text_edit").forEach(Element => {
    Element.onkeypress = () => {
      massiveSave[Element.dataset.index] = Element.innerText;
      localStorage.setItem("massiveSave", massiveSave);
    }
    Element.onkeyup = () => {
      massiveSave[Element.dataset.index] = Element.innerText;
      localStorage.setItem("massiveSave", massiveSave);
    }
  })


};
