// html version:



// <div id="app">
// {{ message }}
// </div>



// .js version


// var app = new Vue({ 
//     el: '#app',
//     data: {
//         message: 'Hello Vue!'
//     }
// });

// -------------------------------------------------------------


// HMTL for Header

// <!-- Header -->
// <section id="header_">
//     <header>
//         <span class="image avatar">
//             <img src="images/portrait.jpg" alt="" />
//         </span>
//         <h1 id="logo">
//             <a href="#">{{name}}</a>
//         </h1>
//         <p>{{paragraph1}}</p>
//     </header>
//     <nav id="nav">
//         <ul>
//             <li>
//                 <a href="#one" class="active">{{menuitem1}}</a>
//             </li>
//             <li>
//                 <a href="#two">{{menuitem2}}</a>
//             </li>
//             <li>
//                 <a href="#three">{{menuitem3}}</a>
//             </li>
//             <li>
//                 <a href="#four">{{menuitem4}}</a>
//             </li>
//         </ul>
//     </nav>
//     <footer>




// new Vue({
//     el: '#header_',
//     data: {
//         name: 'Marianne Cruzat',
//         paragraph1: 'food, travel, and food enthusiast',
    
//     }
// });

// new Vue({
//     el: '#nav_',
//     data: {
//         name: 'Marianne Cruzat',
//         paragraph1: 'food, travel, and food enthusiast',
//         menuitem1: 'About Marianne',
//         menuitem2: 'Things I Can Do',
//         menuitem3: 'Works',
//         menuitem4: 'Contact Me'
//     }
// });


new Vue({
    el: '#one',
    data: {
        title: 'Things I Can Do',
        subtitle1: 'Check out my work',
        paragraph1: 'Faucibus sed lobortisFaucibus sed lobortisFaucibus sed lobortisFaucibus sed lobortisFaucibus sed lobortisFaucibus sed lobortisFaucibus sed lobortisFaucibus sed lobortisFaucibus sed lobortis',

    }
});


new Vue({
    el: '#two',
    data: {
        title: 'My Portfolio',
        paragraph1: 'Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac fauci',
        ul1: 'Stack small boxes',
        ul2: 'Read books and stuff',
        ul3: 'Drink much coffee',
        ul4: 'Lightning bolt',
        ul5: ' Shadow clone techniques',
        ul6: 'write all code'
    }
});

new Vue({
    el: '#three',
    data: {
        title: 'Works',
        description: 'Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac fauci',
        subtitle1: 'Possibly broke spacetime',
        paragraph1: 'Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.',
        subtitle2: 'Terraformed a small moon',
        paragraph2: 'Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.',
        subtitle3: 'Snapped dark matter in the wild',
        paragraph3: 'write all code'
    }
});

// new Vue({
//     el: '#four',
//     data: {
//         title: 'Contact Me',
//         description: 'Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac fauci'
//     }
// });



new Vue({
    el: '#five',
    data: {
        counter: localStorage.getItem("counter-value") || 0,
        title: 'Cheer me on as I build and update this website!'
        
    },
    methods: {
        newvisitor: function() {
            this.counter=this.counter+1;
            localStorage.setItem("counter-value", this.counter)
        }
    }
});