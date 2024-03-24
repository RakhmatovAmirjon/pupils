import { students } from "./db.js";

function reloadId() {
    let list_footer = document.querySelector(".list_footer");

    for (let student of students) {
        let column = document.createElement("div");
        let student_name_text = document.createElement("div");
        let born_year_text = document.createElement("div");
        let edit_delete = document.createElement("div");
        let edit = document.createElement("div");
        let deleting = document.createElement("div");
        let number_text = document.createElement("div");

        number_text.innerHTML = student.idx;
        student_name_text.innerHTML = student.name;
        born_year_text.innerHTML = student.born;

        column.classList.add("column");
        born_year_text.classList.add("number_text");
        student_name_text.classList.add("student_name_text");
        edit_delete.classList.add("edit_delete");
        edit.classList.add("edit");
        deleting.classList.add("deleting");
        number_text.classList.add("number_text");
        edit_delete.classList.add("edit_delete");
        edit.classList.add("edit");
        deleting.classList.add("delete");
        list_footer.append(column);
        column.append(number_text, student_name_text, born_year_text, edit_delete);
        edit_delete.append(edit, deleting);
    }

    let count = 7

    let form = document.querySelector(".form");

    form.onsubmit = (e) => {
        e.preventDefault()

        let fd = new FormData(form)
        let obj = {};


        fd.forEach((value, key) => {
            obj[key] = value
        })
        
        let column = document.createElement("div")
        let student_name_text = document.createElement("div")
        let born_year_text = document.createElement("div")
        let edit_delete = document.createElement("div")
        let edit = document.createElement("div")
        let deleting = document.createElement("div")
        let number_text = document.createElement("div")
        count++
        number_text.innerHTML = count
        student_name_text.innerHTML = obj.name
        born_year_text.innerHTML = 2024 - obj.age

        column.classList.add("column")
        born_year_text.classList.add("number_text")
        student_name_text.classList.add("student_name_text")
        edit_delete.classList.add("edit_delete")
        edit.classList.add("edit")
        deleting.classList.add("deleting")
        number_text.classList.add("number_text")
        edit_delete.classList.add("edit_delete")
        edit.classList.add("edit")
        deleting.classList.add("delete")
        list_footer.append(column)
        column.append(number_text, student_name_text, born_year_text, edit_delete)
        edit_delete.append(edit, deleting)
        deleting.onclick = () => {
            column.remove()
            count--
        }



        edit.onclick = () => {
            modal.classList.add("active")
            
            let form2 = document.querySelector(".form2");
            
            modal.classList.add("active");
            
            let close = document.querySelector(".close")
            close.onclick = () => {
                modal.classList.remove("active");
            };
            form2.onsubmit = (e) => {
                e.preventDefault();
                let fd = new FormData(form2);
                let obj = {};
                fd.forEach((value, key) => {
                    obj[key] = value;
                });
                
                born_year_text.innerHTML = 2024 - obj.age1
                student_name_text.innerHTML = obj.name1
            };
        };
    };

}

reloadId()