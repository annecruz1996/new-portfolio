new Vue ({
    el: '#signup-form',
    data: {
        title: 'Contact Me',
        description: 'Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac fauci',
        
        name: 'ASDF',
        email: 'ASFD',
        subject: 'ASDF', 
        message: 'ADSF',
        errors: {
            name: false,
            email: false
        }
    },

methods: {
    processForm: function() {
        console.log({name: this.name, email: this.email, subject: this.subject, message: this.message});
        alert('Processing!');
    }
}

});