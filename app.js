const notescontainer = document.querySelector(".notes-container");
const createNode = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
function showData() {
  notescontainer.innerHTML = localStorage.getItem("notes");
}
showData();
function saveNotesToLocalStorage() {
  localStorage.setItem("notes", notescontainer.innerHTML); //يخزن كلشي موجود داخل الكونتينر عشكل نص
  //بينما لو قلتله يخزن مصفوفة النوتس فهي مصفوفة ورح يخزنها كسترينج لهيك ما رح يزبط
}

createNode.addEventListener("click", () => {
  let inputbox = document.createElement("p");
  let image = document.createElement("img");
  inputbox.className = "input-box";
  inputbox.setAttribute("contenteditable", "true");
  image.src = "images/delete.png";
  notescontainer.appendChild(inputbox).appendChild(image);
  //   saveNotesToLocalStorage(); بحطهاش هون عشان اذا عملت نوت ومكتبتش فيها متنحفظش
});
notescontainer.addEventListener("click", function (e) {
  //لم اضغط باي مكان داخل الكونتينر تاع النوتس
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    //هاي معناها انه اذا كان الايفنت الي صار انه كان الهدف تاعي بالكونتينر هو تاج من نوع صورة
    //يعني اذا كبست على صورة داخل كونتينر الملاحظات والي هي فش غيرها صورة الديليت فهو رح يشيل البارينت تاعها من الكونتينر
    saveNotesToLocalStorage(); //بعد كل حذف بعدل الستوراج
  } else if (e.target.tagName === "P") {
    //هيك عشان اذا الي ضغطت عليه فقرة جبلي اياهن كلهن بنفس الطريقة واذا كتبت باي وحدة فيهن حدثلي البيانات بالستوراج
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        saveNotesToLocalStorage();
      };
    });
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
    //الي عملته هون خليت وظيفة كبسة انتر هي تنزل سطر جديد بس بينما لو معملتش هيك لو عملت نوت وكبست انتر داخلها فرح يصيؤ مشكلة وينشئ نوت جديدة مع كل انتر وخربشة كثير
  }
});
