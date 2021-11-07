
// Create leaf 'bring in leaf' set the variables
class Leaf {
    constructor(size, x, y, aniDuration, aniDirection){
      this.size = size
      this.x = x
      this.y = y
      if(aniDuration) this.aniDuration = aniDuration
      if(aniDirection) this.aniDirection = aniDirection
      this.imgSrc = 'images/leaf.png'
      this.create()
    }
    create(){
        const leafImg = document.createElement('img')
        leafImg.className = 'leaf'
        leafImg.src = this.imgSrc
        
       // size width + height
        leafImg.style.width = this.size +'px'
        leafImg.style.height = this.size +'px'
        
        // set position
        leafImg.style.position = 'absolute'
        leafImg.style.left = this.x+'px'
        leafImg.style.top = this.y+'px'
    
        // set css animation
        if(this.aniDuration) leafImg.style.animationDuration = this.aniDuration+'s'
        if(this.aniDirection) leafImg.style.animationDirection = aniDirection
    
        document.body.append(leafImg)
      }
    }

    function generateLeaf1(){
        for(let i = 0; i < 50; i++){
          
          const size = Math.random()*50
          const x = Math.random()*document.body.clientWidth
          const y = Math.random()*document.body.clientHeight
          // create leaf
          const Leaf = new Leaf(size, x, y)
        }
      }
      
      function generateLeaf2(){
        for(let i = 0; i < 200; i++){
          
          // set size + position
          const size = Math.random()*50
          const x = Math.random()*document.body.clientWidth
          const y = Math.random()*document.body.clientHeight
      
          // randomise the animation settings
          let aniDuration = Math.random()*9
          if(aniDuration < 6){
            aniDuration += 3
          }
      
      
         // create leaf animation
          const leaf = new Leaf(size, x, y, aniDuration)
      
        }
      }
      
      generateLeaf2()

// create and find element - it now exscits in Javascript - the menu and hamburger button
const hamburgerBtn = document.querySelector('.hamburger-btn')
const primaryMenu = document.querySelector('.primary-menu')

// Adds listen for click event, once clikec on it will show
hamburgerBtn.addEventListener('click', () => {
  primaryMenu.classList.toggle('show')
})

// Scroll trigger animation - adding the element
gsap.registerPlugin(ScrollTrigger);

// GSAP - finding the image and creating vairables such as duration, scale etc for it to run 
gsap.from(".about-image", {
  scrollTrigger: ".about-image" ,
  duration: 3, 
  x: 300, 
  opacity: 0, 
  scale: 0.5
});


// GSAP - finding the image and creating vairables such as duration, scale etc for it to run 
gsap.from(".main-image", {
  duration: 3, 
  x: 300, 
  opacity: 0, 
  scale: 0.5
});

//Show lace signup button - finding it and adding to javascript
const signupBtn = document.querySelector('.signup-btn')
const signupDialog = document.querySelector('.signup-dialog')

// sign up btn click
signupBtn.addEventListener('click', () => {
  signupDialog.show()
})