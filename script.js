const testimonials = [
    {
        name: 'Tanya Sinclair',
        occupation: 'UX Engineer',
        quote: `“ I’ve been interested in coding for a while but never taken the jump, until now.
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so
        excited about the future. ”`,
        img: "./images/image-tanya.jpg"
    },
    {
        name: 'John Tarkpor',
        occupation: 'Junior Front-end Developer',
        quote: `“ If you want to lay the best foundation possible I’d recommend taking this course.
        The depth the instructors go into is incredible. I now feel so confident about
        starting up as a professional developer. ”`,
        img: "./images/image-john.jpg"
    }
]

const buttons = document.querySelectorAll('.button-img');
const quote = document.querySelector('.quote');
const name = document.querySelector('.name');
const occupation = document.querySelector('.occupation');
const img = document.querySelector('.hero-img');
let count = 0;

buttons.forEach(btn => {
    if (btn.classList.contains('prev')) {
        btn.addEventListener('click', () => {
            count--;
            if (count < 0) {
                count = testimonials.length - 1;
            }
            updateTestimonial();
        });
    } else {
        btn.addEventListener('click', () => {
            count++;
            if (count > testimonials.length - 1) {
                count = 0;
            }
            updateTestimonial();
        });
    }
});

function updateTestimonial() {
    const testimonial = testimonials[count];
    quote.textContent = testimonial.quote;
    name.textContent = testimonial.name;
    occupation.textContent = testimonial.occupation;
    img.src = testimonial.img;
}