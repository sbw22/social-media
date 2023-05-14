  //This is the java file that updates the social media page with actual twitter posts
            
            window.onload = function() {
                let redWidth = document.querySelector(".scrollingBox1").offsetWidth;
                console.log(redWidth);
                
                
                
                
                const rawLink = [
                    //<a class="twitter-timeline" href="https://twitter.com/rPrequelMemes?ref_src=twsrc%5Etfw">Tweets by rPrequelMemes</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>,
                   // <a class="twitter-timeline" href="https://twitter.com/fasc1nate?ref_src=twsrc%5Etfw">Tweets by fasc1nate</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                  // <a class="twitter-timeline" data-width="500" href="https://twitter.com/SportsCenter?ref_src=twsrc%5Etfw">Tweets by SportsCenter</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                  // <a class="twitter-timeline" data-width="500" href="https://twitter.com/NBA_Jayhawks?ref_src=twsrc%5Etfw">Tweets by NBA_Jayhawks</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                ]
                const anchorsHref = [
                'https://twitter.com/rPrequelMemes?ref_src=twsrc%5Etfw',
                'https://twitter.com/fasc1nate?ref_src=twsrc%5Etfw',
                'https://twitter.com/SportsCenter?ref_src=twsrc%5Etfw',
                'https://twitter.com/NBA_Jayhawks?ref_src=twsrc%5Etfw'
                ]
                
                //img = a
                //image = anchor
                //images = anchors

                const viewportHeight = document.documentElement.clientHeight;

                function createContainer() { //creates the container(row) that the anchors and scripts will be placed inside
                    const section = document.createElement('section');
                    section.setAttribute('class', 'container');
                    return section;
                }
                function createAnchorElement(a) { //creates an anchor ELEMENT that is put into the container, not just a normal, simple, primitive image
                    const aEl = document.createElement('a');
                    aEl.setAttribute('href', a);
                    aEl.setAttribute('class', 'twitter-timeline')
                    aEl.setAttribute('data-width', redWidth);
                    
                    return aEl;
                    /*function setImageWidth(redWidth){
                        imgEl.setAttribute('width', redWidth);
                    } */
                }
                function createScriptElement(scr) {
                    const sEl = document.createElement('script');
                    sEl.setAttribute('src', 'https://platform.twitter.com/widgets.js');
                    sEl.setAttribute('charset', 'UTF-8')
                    //sEl.setAttribute('attribute', 'async')
                    return sEl;
                }
                
                function getRandomHref(){
                    return anchorsHref[ Math.floor (Math.random() * anchorsHref.length ) ]; //gets random image
                }

                function createPictureRow() { //makes a row with random picures
                    const section = createContainer();
                    // four images per row (changed it to 1)
                    for (let i=0; i<1; i++){
                        const a = getRandomHref();
                        const aEl = createAnchorElement(a);
                        section.appendChild(aEl);
                    }
                    
                    const scrEl = createScriptElement();
                    section.appendChild(scrEl);
                    return section;

                }
                let biggerThan750 = 1;
                window.onresize = function(event){  //changes size of images on window resize
                    console.log(window.innerWidth);
                    
                    
                    if (window.innerWidth < 750 && biggerThan750 == 1){
                        const exPage = document.querySelector(".explore");
                        exPage.remove();
                        biggerThan750 = 0;
                    }
                    if(window.innerWidth > 750 && biggerThan750 == 0){
                        const explore = document.createElement('div');
                        explore.setAttribute('class', 'explore');
                        const main = document.querySelector('main');
                        main.appendChild(explore)
                        const exploreTitle = document.createElement('h2');
                        //exploreTitle.setAttribute('EXPLORE PAGE')
                        explore.appendChild(exploreTitle);
                        exploreTitle.setAttribute('class', 'exploreHeader')
                        h2_0 = document.querySelector('.exploreHeader').innerHTML = "EXPLORE PAGE";

                        biggerThan750 = 1;
                    }
                    
                    const aEl = document.querySelectorAll('.twitter-timeline'); //this is an array
                    /*if(window.innerWidth > 750){
                        redWidth = 10;
                    } else{
                        redWidth = document.querySelector(".scrollingBox1").offsetWidth;
                    }*/
                    for(let i = 0; i < aEl.length; i++){ //loops through the array of images to individually change the size of each one
                        //if (redWidth > 500){
                        //    break;
                        //}
                        aEl[i].setAttribute('data-width', redWidth);
                    }    
                } 

                const scrollingBox = document.querySelector('.scrollingBox1'); //creates a variable for 'scrollingBox' div

                for (let i=0; i<5; i++){
                    scrollingBox.appendChild(createPictureRow()); //creates a box of 5 rows
                }

                //on scroll
                window.addEventListener('scroll', function(event){

                //see if scrolled position is greater than or equal to age height

                const scrolledY = window.scrollY; //the value the user has scrolled to
                const pageHeight = document.documentElement.scrollHeight; //the height of the document/page

                const scrolledToEnd = (scrolledY + viewportHeight + 1000) >= pageHeight; //checks to see if user has scrolled to the bottom of the page. (The extra 1000 value makes the next few images load smoother because the new image generation triggers when user is higher up in the webpage.).

                
                console.log(scrolledY);

                //console.log(scrolledToEnd);

                //if yes append picture group to the DOM (if user has scrolled to the bottom of the page, create new rows of images)
                if (scrolledToEnd){
                    scrollingBox.appendChild(createPictureRow());
                }
                })
                
                let anchorWidth = redWidth;
                /* get image element */

                
            
            }