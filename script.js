const loadLink = (inputText) => {
    const url = `https://api.shrtco.de/v2/shorten?url=${inputText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayShortLink(data.result.short_link))
}
 
const displayShortLink = links => {
    // console.log(links);
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    if(inputText === ''){
        alert('enter your link');
    }

    // console.log(inputText);
    loadLink(inputText)
    const modalContainer = document.getElementById('modal-content');
    modalContainer.innerHTML = `
    <h4 class="text-dark">Short Link: ${links}</h4>
    <div class="d-flex gap-3">
    <input type="text" value="${links}" id="myInput" class="form-control w-75">
    <button class="btn btn-primary" onclick="myFunction()">Copy Link</button>
    </div>
    `
    const disableModalEye = document.getElementById('modal-eye');
    disableModalEye.classList.remove('disabled');
}



// modal inside
function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    // alert("Copied the text: " + copyText.value);
  }



// const linkSample = "https://www.youtube.com/watch?v=rtbeimxcdQI";
loadLink('https://shrtco.de/tools/shorten');