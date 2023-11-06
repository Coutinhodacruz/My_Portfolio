let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset= sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }

    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.
        scrollHeight);
}


    const contactBtn = document.getElementById('contactBtn');
    const phoneNumberDiv = document.getElementById('phoneNumber');

    contactBtn.addEventListener('click', function(event) {
        event.preventDefault();
        phoneNumberDiv.style.display = 'block';
    });

    const contactForm = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const fullName = document.querySelector('input[name="fullName"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const phoneNumber = document.querySelector('input[name="phoneNumber"]').value;
        const emailSubject = document.querySelector('input[name="emailSubject"]').value;
        const message = document.querySelector('textarea[name="message"]').value;
    
        // Send form data to the server
        fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullName: fullName,
                email: email,
                phoneNumber: phoneNumber,
                emailSubject: emailSubject,
                message: message
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                confirmationMessage.textContent = 'Message sent successfully!';
                confirmationMessage.style.color = 'green';
            } else {
                confirmationMessage.textContent = 'Failed to send message. Please try again later.';
                confirmationMessage.style.color = 'red';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            confirmationMessage.textContent = 'Failed to send message. Please try again later.';
            confirmationMessage.style.color = 'red';
        });
    });
    


// const form = useRef();
    
// const sendEmail = (e) => {
// e.preventDefault();

// emailjs.sendForm('service_ku4bld9', 'template_3qq4xle', form.current, 'VC96-OTq_Ig9_FULE')
//     .then((result) => {
//         console.log("Email response --> ",result.text);
//         e.target.reset();
//         alert('Email Sent !')
//     }, (error) => {
//         console.log(error.text);
//     });
// };


