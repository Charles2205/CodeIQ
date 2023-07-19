function clearSelection() {
    var radioButtons = document.getElementsByName("flexRadioDefault");
    for (var i = 0; i < radioButtons.length; i++) {
      radioButtons[i].checked = false;
    }
  }


const btnClear =document.querySelector('#btnClear')
btnClear.addEventListener('click',clearSelection)
