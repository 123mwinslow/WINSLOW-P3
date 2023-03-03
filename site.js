const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
        return {
            // This holds your movies.json data.
            movies: [],
            title: "IMDB + Michael's Top 8 Movies",
            owner: "Michael",
            github: "https://github.com/123mwinslow/WINSLOW-P3",
           
            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
      
      }
    },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
            getMonthtext(dateArray){
                  // the switch statement will go through every json object, looking at each date in each movie, when it finds a match, it will take that date and convert it into us date format
                  // maybe make the code in the expression a number that goes up everytime it does not find the right movie, and loops back once it tries to go past the fifth movie
                  // to make the number go up, maybe make an if else statement? but why would i make an if else statement when the switch statement is meant to replace the need of an if else statement
                  // oki i got it to work thanks to jesse
                  switch (dateArray[1]) {
            case 0:
                  return "Error";
                  break;
                  case 1:
                        return "January" +" "+dateArray[2]+", "+ dateArray[0];
                        break;
                        case 2:
                        return "Feburary" +" "+dateArray[2]+", "+ dateArray[0];
                        break;
                        case 3:
                        return "March" +" "+dateArray[2]+", "+ dateArray[0];
                        break;
                        case 4:
                        return "April" +" "+dateArray[2]+", "+ dateArray[0];
                        break;
                        case 5:
                        return "May" +" "+dateArray[2]+", "+ dateArray[0];
                        break;
                        case 6:
                        return "June" +" "+dateArray[2]+", "+ dateArray[0];
                        break;
                        case 7:
                        return "July" +" "+dateArray[2]+", "+ dateArray[0];
                        break;
                        case 8:
                        return "August" +" "+dateArray[2]+", "+ dateArray[0];
                        break;
                        case 9:
                        return "September" +" "+dateArray[2]+", "+ dateArray[0];
                        break;
                        case 10:
                        return "October" +" "+dateArray[2]+", "+ dateArray[0];
                        break;
                        case 11:
                        return "November" +" "+dateArray[2]+", "+ dateArray[0];
                        break;
                        case 12:
                        return "December" +" "+dateArray[2]+", "+ dateArray[0];
                        break;
                        default:
                        return "Error";
                        break;
                      }
            },
            posterClick(index){
var x = this.movies[index].posterindex;
var y = this.movies[index].posters.length;
if(x < y-1) {
      this.movies[index].posterindex++;
}
else {
      this.movies[index].posterindex = 0;
}
            },
            timeText(minutes){
var hours = Math.trunc(minutes/60);
var min = minutes % 60;
return hours + "h" + min + "m"
            },
      },



})



vue_app.mount("#vue_app")