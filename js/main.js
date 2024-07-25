

var site_nameinput = document.getElementById("site-name")
var site_urlinput = document.getElementById("site-url")
var submitbtninput = document.getElementById("submitbtn")

var productList;
if (localStorage.getItem('list') !== null) {
    productList = JSON.parse(localStorage.getItem('list'))
}
else {
    productList = []
}

function addProduct() {
    var object = {
        name: site_nameinput.value,
        url: site_urlinput.value
    }
    productList.push(object)
    localStorage.setItem('list', JSON.stringify(productList))
    //
    displayProduct()
    clearForm()

    if (site_nameinput.value === '' && site_urlinput.value === '') {
        site_nameinput.style.border = ''
        site_urlinput.style.border = ''
    }

}

function displayProduct() {
    var table = ''
    for (var i = 0; i < productList.length; i++) {
        table += `
        <tr>
        <td>${i + 1}</td>
        <td>${productList[i].name}</td>
        <td class="visit">
           <a target='_blank' href="${productList[i].url}"> <button ><i class="fa-regular fa-eye"></i> visit</button></a>
    
        </td>
        <td class="delete">
            <button onclick=(deleteproduct(${i})) ><i class="fa-solid fa-trash-can"></i> delete</button>
    
        </td>
     </tr>
        `
    }
    if (productList.length === 0) {
        document.getElementById("tbody").innerHTML = ''

        document.getElementById("no").innerHTML = `  <h4 class="data">No Data Added</h4>`
    } else {
        document.getElementById("tbody").innerHTML = table
        document.getElementById("no").innerHTML = ``
    }

}
function deleteproduct(i) {
    productList.splice(i, 1)
    localStorage.setItem('list', JSON.stringify(productList))
    displayProduct()
}


displayProduct()




function clearForm() {
    site_nameinput.value = ''
    site_urlinput.value = ''

}



submitbtninput.onclick = () => {
    if (site_nameinput.value.length < 3) {
        alert('Site name must contain at least 3 characters')
    } else if (!site_urlinput.value.includes('https://')) {
        alert('Site URL must be a valid one')
    } else {
        addProduct()
    }

}
site_nameinput.oninput = () => {
    if (site_nameinput.value.length < 3) {
        site_nameinput.style.border = '2px solid red'
    }
    else {
        site_nameinput.style.border = '2px solid green'
    } if (site_nameinput.value === '') {
        site_nameinput.style.border = ''
    }

}
site_urlinput.oninput = () => {
    if (!site_urlinput.value.includes('https://')) {
        site_urlinput.style.border = '2px solid red'
    } else {
        site_urlinput.style.border = '2px solid green'
    } if (site_urlinput.value === '') {
        site_urlinput.style.border = ''
    }

}
 