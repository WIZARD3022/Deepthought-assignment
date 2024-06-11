const moveright = () => {
    document.querySelector(".slider").setAttribute("style", "margin-top: 15px;width: 300px;height: 250px;border: 1px solid white;border-radius: 5px;transform:translateX(-5px);box-shadow: 5px 4px 10px 0px grey;");
    document.querySelector(".p").innerHTML = `<button onclick="moveleft()" type="button"><img src="./assets/Left.svg" alt="" srcset=""></button>`;
    document.querySelector(".control").innerHTML = `<ul><li><b>Explore the world of management</b></li><li>Technical Project Management</li><li>Threadbuild</li><li>Structure you pointers</li><li>4SA Method</li></ul>`;
    document.querySelector(".control").setAttribute("style", "display: flex;justify-content: flex-start; padding-left:35px; background-color: white;");
}

const moveleft = () => {
    document.querySelector(".slider").setAttribute("style", "margin-top: 15px;width: 300px;height: 250px;border: 1px solid white;border-radius: 5px;transform:translateX(-195px);box-shadow: 5px 4px 10px 0px grey;");
    document.querySelector(".p").innerHTML = `<button onclick="moveright()" type="button"><img src="./assets/Right.svg" alt="" srcset=""></button>`;
    document.querySelector(".control").innerHTML = `<div class="text">1</div>`;
    document.querySelector(".control").setAttribute("style", "display: flex;background-color: white;justify-content: flex-end;");
}