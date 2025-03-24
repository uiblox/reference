import "../../../styles/main.scss";

const lorim = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, nulla! Pariatur qui accusantium dolorem repellendus inventore velit quasi corrupti sapiente tempora, officiis in nesciunt impedit voluptates odit a nihil maiores?'


function splitString(string: string) {
    const stringArr = string.split(" ");
    return () => stringArr.length
}

const total = splitString(lorim)()
console.log(total)
