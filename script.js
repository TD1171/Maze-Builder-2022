let index = 1;
let checker = 0;
let counter = 0;
let atEnd = false;
document.addEventListener("DOMContentLoaded", () => {
    let submit = document.getElementById('submit');
    let remake = document.getElementById('remake');
    let solution = document.getElementById('solution');
    
    let width;
    let height;
   
    let canvas;
    solution.addEventListener('click', (evt) => {
        // let ctx = canvas.getContext('2d');
        // ctx.clearRect(0,0,1000,1000);
        // counter = 0;
        //TODO implement solution thingys
       });
   remake.addEventListener('click', (evt) => {
    console.log(checker);
    if(checker == 0){
        alert ("You Must Create A Maze Before Remaking It!");
    }else if(checker == 1){
        alert ("You Must Wait for the Maze to Finish Forming before Remaking it!")
    }else if(checker == 2){
        let ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,1000,1000);
    counter = 0;
        checker = 0;
    }
   });
    submit.addEventListener('click', (evt) => {
        
        height = document.getElementById('height').value;
        console.log(height);
        width = document.getElementById('width').value;
        console.log(width);
        canvas = document.getElementById('maze');
        if(counter != 0){
            console.log(counter);
            alert ("You Must Press the Remake Button to Remake the Maze, then You Can Resubmit");
        }
        if(counter == 0){
        let ctx = canvas.getContext('2d');
        let maze = new Array();
        for(let i = 0; i < height; i++){
            maze[i] = new Array(width);
            for(let j = 0; j < width; j++){
                maze[i][j] = new Array(i, j);    
            }
        }
        let xCordinate = 1000/width;
        console.log(xCordinate);
        let yCordinate = 1000/height;
        console.log(yCordinate);
        ctx.strokeRect(0,0, 1000, 1000);
        ctx.strokeStyle="#0000FF";
        checker = 1;
       
        for(let i = 1; i < height; i++){
            ctx.beginPath();
            ctx.moveTo(0,yCordinate*i);
            ctx.lineTo(1000, yCordinate*i);
            ctx.stroke();
        }
       
        for(let i = 1; i < width; i++){
            ctx.beginPath();
            ctx.moveTo(xCordinate*i,0);
            ctx.lineTo(xCordinate*i, 1000);
            ctx.stroke();
        }
       
        let next = new Array();
        let stack = new Array();
       
        stack.push(maze[0][0]);
        next.push(maze[0][0]);
        console.log(stack);
        console.log(next);
 
 
        dfs(0, 0, maze, stack, width, height, ctx, next);
       
        ctx.clearRect(1, 0, xCordinate-1, 1);
        ctx.fillRect(1, 0, xCordinate-2, yCordinate-1);
        counter = 1;
        console.log(counter + " " + checker);
    }
    });
});
function solution(i, j, solution, ctx){
    if(atEnd == true){
      //implement solution mnethods.
    }else{
        alert ("It has not reached the end yet!");
    }
}


function awedfs(i, j, maze, width, height, ctx, visited){
    let x = [1, -1, 0, 0];
    let y = [0, 0, 1, -1];
    let xCordinate = 1000/width;
    let yCordinate = 1000/height;
    while(x.length>0){
        let direction = Math.floor(Math.random()*x.length);
        let newx = j+1;
        let newy = i+0;
        let xpos = (j+1)*xCordinate;
        let ypos = (i+0)*yCordinate;
        if(j+1 > -1 && j+1 < width && i+0 > -1 && i+0 < height){
            if(visited.includes(maze[newy][newx])){
                x.splice(direction,1);
                y.splice(direction,1);
                continue;
            }
            visited.push(maze[newy][newx]);
            index++;
            if(1==1){
                setTimeout(destroy(xpos-1, ypos+1, 2, yCordinate-1-1, ctx), 10000);
            }
            else if(1==-1){
                setTimeout(destroy(xpos+1, ypos+1, xCordinate+1, yCordinate-1-1, ctx), 10000);
            }
            if(0==1){
                setTimeout(destroy(xpos+1, ypos-1, xCordinate-1-1, 2, ctx), 10000);
            }
            else if(0==-1){
                setTimeout(destroy(xpos+1, ypos+1, xCordinate-1-1, yCordinate+1, ctx), 10000);
            }
 
            dfs(i+0,j+1,maze,maze[i+0][j+1], width, height, ctx, visited);
        }  
        x.splice(direction,1);
        y.splice(direction,1);
        console.log("("+xCordinate+", "+yCordinate);
    }
}
 
async function dfs(i, j, maze, stack, width, height, ctx, next){
    let pole = "";
    let xCordinate = 1000/width;
    let yCordinate = 1000/height;
    console.log("("+xCordinate+", "+yCordinate);
    while(stack.length>0){
        ctx.fillStyle="#0dc6ff";
       
        let cell = stack.pop();  
        i = cell[0];
        j = cell[1];
        let possibleDirections = [0, 1, 2, 3];
       
        while(possibleDirections.length>0){
            let index = Math.floor(Math.random()*possibleDirections.length);
            console.log(index);
            let direction = possibleDirections[index];
            if(direction == 0){
                let newx = j+1;
                let newy = i+0;
                console.log((j+1) + " " + (i+0) + " " + width + " " + height);
                let xpos = (j+1)*xCordinate;
                let ypos = (i+0)*yCordinate;
                console.log(newx);
                console.log(newy);
                console.log(xpos);
                console.log(ypos);
             
                if(j+1 > -1 && j+1 < width && i+0 > -1 && i+0 < height){
                    if(next.includes(maze[newy][newx])){
                        //console.log(possibleDirections.splice(index,1));
                        possibleDirections.splice(index,1);
                        continue;
                    }
                    else{
                        stack.push(cell);
                        next.push(maze[newy][newx]);
                        stack.push(maze[newy][newx]);
                        index++;
                        console.log("test" + index);
                        
 
                        destroy(xpos-1, ypos+1, 2, yCordinate-1-1, ctx);
                        ctx.fillRect(xpos+3, ypos+3, xCordinate-6, yCordinate-6);
                        await sleep(10);
                        ctx.clearRect(xpos+2, ypos+2, xCordinate-4, yCordinate-4);
                        break;
                    }  
                }
            }
            else if(direction == 1){
                pole = "north";
                let newx = j+-1;
                let newy = i+0;
                console.log((j+-1) + " " + (i+0) + " " + width + " " + height);
                let xpos = (j+-1)*xCordinate;
                let ypos = (i+0)*yCordinate;
                console.log(newx);
                console.log(newy);
                console.log(xpos);
                console.log(ypos);
               
                if(j+-1 > -1 && j+-1 < width && i+0 > -1 && i+0 < height){
                    if(next.includes(maze[newy][newx])){
                        //console.log(possibleDirections.splice(index,1));
                        possibleDirections.splice(index,1);
                        continue;
                    }
                    else{
                        stack.push(cell);
                        next.push(maze[newy][newx]);
                        stack.push(maze[newy][newx]);
                        index++;
                        console.log("test" + index);
                        
 
                        destroy(xpos+1, ypos+1, xCordinate+1, yCordinate-1-1, ctx);
                        ctx.fillRect(xpos+3, ypos+3, xCordinate-6, yCordinate-6);
                        await sleep(10);
                        ctx.clearRect(xpos+2, ypos+2, xCordinate-4, yCordinate-4);
                        break;
                    }  
                }
            }
            else if(direction == 2){
                pole = "east";
                let newx = j+0;
                let newy = i+1;
                console.log((j+0) + " " + (i+1) + " " + width + " " + height);
                let xpos = (j+0)*xCordinate;
                let ypos = (i+1)*yCordinate;
                console.log(newx);
                console.log(newy);
                console.log(xpos);
                console.log(ypos);
             
                if(j+0 > -1 && j+0 < width && i+1 > -1 && i+1 < height){
                    if(next.includes(maze[newy][newx])){
                        //console.log(possibleDirections.splice(index,1));
                        possibleDirections.splice(index,1);
                        continue;
                    }
                    else{
                        stack.push(cell);
                        next.push(maze[newy][newx]);
                        stack.push(maze[newy][newx]);
                        index++;
                        console.log("test" + index);
                        
 
                        destroy(xpos+1, ypos-1, xCordinate-1-1, 2, ctx);
                        ctx.fillRect(xpos+3, ypos+3, xCordinate-6, yCordinate-6);
                        await sleep(10);
                        ctx.clearRect(xpos+2, ypos+2, xCordinate-4, yCordinate-4);
 
                        break;
                    }  
                }
            }
            else if(direction == 3){
                pole = "west";
                let newx = j+0;
                let newy = i+-1;
                console.log((j+0) + " " + (i+-1) + " " + width + " " + height);
                let xpos = (j+0)*xCordinate;
                let ypos = (i+-1)*yCordinate;
                console.log(newx);
                console.log(newy);
                console.log(xpos);
                console.log(ypos);
                
       
                if(j+0 > -1 && j+0 < width && i+-1 > -1 && i+-1 < height){
                    if(next.includes(maze[newy][newx])){
                        //console.log(possibleDirections.splice(index,1));
                        possibleDirections.splice(index,1);
                        continue;
                    }
                    else{
                        stack.push(cell);
                        next.push(maze[newy][newx]);
                        stack.push(maze[newy][newx]);
                        index++;
                        console.log("test" + index);
                      
 
                        destroy(xpos+1, ypos+1, xCordinate-1-1, yCordinate+1, ctx);
                        ctx.fillRect(xpos+3, ypos+3, xCordinate-6, yCordinate-6);
                        await sleep(10);
                        ctx.clearRect(xpos+2, ypos+2, xCordinate-4, yCordinate-4)  
 
                        break;
                    }  
                }
            }
            possibleDirections.splice(index);
            atEnd = true;
        }
    }
    checker = 2;
    ctx.fillStyle="#000000";
    ctx.fillRect(xCordinate*(width-1)+1, yCordinate*(height-1)+1, xCordinate-2, yCordinate);
    console.log(counter + " " + checker);
   
}
 

 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function destroy(xpos, ypos, xboxSize, yboxSize, ctx){
    console.log(xpos);
    console.log(ypos);
    console.log(xboxSize);
    console.log(yboxSize);
    ctx.clearRect(xpos, ypos, xboxSize, yboxSize);
 
}
