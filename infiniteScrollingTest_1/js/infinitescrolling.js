  
            window.onload = function() {

                const images = [
                'https://images.unsplash.com/photo-1553531384-cc64ac80f931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
                'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1556703588-6eae2585e025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1547106429-11e696f446d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
                ]

                const viewportHeight = document.documentElement.clientHeight;

                function createContainer() { //creates the container(row) that the images will be placed inside
                    const section = document.createElement('section');
                    section.setAttribute('class', 'container');
                    return section;
                }
                function createImageElement(img) { //creates an image ELEMENT that is put into the container, not just a normal, simple, primitive image
                    const imgEl = document.createElement('img');
                    imgEl.setAttribute('src', img);
                    imgEl.setAttribute('width', 200);
                    return imgEl;
                }
                function getRandomImage(){
                    return images[ Math.floor (Math.random() * images.length ) ]; //gets random image
                }
                function createPictureRow() { //makes a row with random picures
                    const section = createContainer();
                    // four images per row
                    for (let i=0; i<1; i++){
                        const img = getRandomImage();
                        const imgEl = createImageElement(img);
                        section.appendChild(imgEl);
                    }
                    return section;

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
             
            
            
            }