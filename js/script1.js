// question 1
 cat = {
    complain: function() {
        console.log("meow");
    }
}
cat.complain();


// question 2
const heading = document.querySelector("h3");
heading.innerHTML = "updated heading";

// question 3
heading.style.fontSize = "2em";

// question 4
const headingOne = document.querySelector("h3");

headingOne.classList.add("subheading");


// question 5
const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    console.dir(paragraphs[i].innerHTML);
    
}

paragraphs[0].style.color = "red";
paragraphs[1].style.color = "red";
paragraphs[2].style.color = "red";


// question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML+= "<p>New paragraph</p>";
resultsContainer.style.color = "yellow";

// question 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
 function nameOfCats(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name + " is the name")
       
    }
}
nameOfCats(cats);

 // question 8

function createCats(cats) {

    let htmlFormat = "";

    for(let i = 0; i < cats.length; i++) {

    let catAge = "Age unknown";

        if(cats[i].age) {
            catAge = cats[i].age;
        }

        htmlFormat += `<div class=".cat-container">
                    <h5>${cats[i].name}</h5>
                    <p>Age: ${catAge}</p>
                </div>`;
        
    
               
    }

    return htmlFormat;
    

}
createCats(cats);

const newHTMLFormat = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTMLFormat;

