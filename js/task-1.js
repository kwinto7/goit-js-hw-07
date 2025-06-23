

const list = document.querySelector("#categories");
const categoriesItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item, index) => {
    const title = item.querySelector("h2");
    const innerLi = item.querySelectorAll("li");
    const innerUl = item.querySelector("ul");
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${innerLi.length}`);
    
    innerUl.style.padding = `${0}px`;
    
    item.style.listStyle = 'none';
    
    Object.assign(title.style, {
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 600,
        fontSize: `${24}px`,
        lineHeight: 1.34,
        letterSpacing: `${0.04}em`,
        color: '#2e2f42',
        marginTop: `${0}px`,
        marginBottom: `${16}px`
    });
    
    Object.assign(item.style, {
        backgroundColor: '#f6f6fe',
        borderRadius: `${8}px`,
        padding: `${16}px`,
        width: `${392}px`,
    });

    if (index < categoriesItems.length - 1) {
        item.style.marginBottom = `${24}px`;
      }

    
    innerLi.forEach((item, index) => {
        item.style.listStyle = "none";

        Object.assign(item.style, {
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 400,
            fontSize: `${16}px`,
            lineHeight: 1.5,
            letterSpacing: `${0.04}em`,
            color: '#2e2f42',
            border: `${1}px solid #808080`,
            borderRadius: `${4  }px`,
            width: `${360}px`,
            padding: `${8}px ${16}px`,
        });
        
        if (index < innerLi.length - 1) {
            item.style.marginBottom = `${8}px`;
        }
    });
});

Object.assign(list.style, {
    width: `${440}px`,
    heigth: `${880}px`,
    padding: `${24}px`,
    borderRadius: `${8}px`,
    backgroundColor: '#fff'
});







