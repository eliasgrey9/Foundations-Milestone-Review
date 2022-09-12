let streetAddress = document.querySelector("input.streetAddress")
let propertyType = document.querySelector("input.propertyType")
let city = document.querySelector("input.city")
let state = document.querySelector("input.state")
let addBtn = document.querySelector("button.addBtn")
let listings = document.querySelector("ul.listings");


addBtn.addEventListener("click", () => {
const li = document.createElement("li");

li.textContent = [streetAddress.value," " + propertyType.value, " " + city.value, state.value];


const removeBtn = document.createElement("button");
removeBtn.classList.add("removeBtn")
li.appendChild(removeBtn)
removeBtn.textContent = "Remove listing";
listings.append(li);

removeBtn.addEventListener("click", removeListing)
function removeListing(){
listings.removeChild(li);
}

const commentBtn = document.createElement("button");
commentBtn.classList.add("commentBtn");
li.appendChild(commentBtn);
commentBtn.textContent = "Leave Comment";
listings.append(li);

commentBtn.addEventListener("click",addInput)

function addInput(){
const input = document.createElement("input");
input.classList = "commentInput";
li.appendChild(input)
const submitComment = document.createElement("button");
submitComment.textContent = "Send"
li.appendChild(submitComment)

submitComment.addEventListener("click",()=>{
const li2 = document.createElement("li");
li2.textContent = input.value;
li.appendChild(li2);

})


}

});

