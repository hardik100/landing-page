/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const newElement = document.getElementById('navbar__list');
const newSection = document.getElementById('allsections');

//creating fourth section 
let fourthSec = document.createElement('div');
fourthSec.innerHTML = `<section id="section4" data-nav="Section 4">
                          <div class="landing__container Section-4">
                              <h2>Section 4</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

                              <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
                         </div>
                        </section>`
newSection.appendChild(fourthSec);

//added styles for fourth section
const section4 = document.querySelector('.Section-4')
section4.style.float = 'right';
section4.style.textAlign = 'right';



// build the nav
let newListElement = document.createElement('li');
newListElement.innerHTML = `<a href="#section1">Section 1</a>
                            <a href="#section2">Section 2</a>
                            <a href="#section3">Section 3</a>
                            <a href="#section4">Section 4</a>`;
    newElement.appendChild(newListElement);

// Add class 'active' to section when near top of viewport
// Set sections as active

document.addEventListener('scroll', event => {
    var navbar = document.querySelector('nav');
    var navList = document.querySelector('li')
    if(window.scrollY >= 0 && window.scrollY <= 470) {
        navbar.classList.add('top');
        navList.classList.add('list');
    }
    else{
        navbar.classList.remove('top');
        navList.classList.remove('list');
    }
});

document.addEventListener('scroll', event => {
    let navLinks = document.querySelectorAll('nav ul li a');
  
    
    navLinks.forEach(link => {
        let section = document.querySelector(link.hash);
      
        if (
            section.offsetTop <= scrollY && 
            section.offsetTop + section.offsetHeight > scrollY
        ) {
            link.classList.add('menu__link');
            section.classList.add('your-active-class')
        } else {
            link.classList.remove('menu__link');
            section.classList.remove('your-active-class')
        }
    });
});






