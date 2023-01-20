document.addEventListener("keydown", function (event){
    if (event.ctrlKey){
         event.preventDefault();
        }
    if(event.keyCode == 123){
         event.preventDefault();
        }
});

const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', () => {

    document.body.classList.toggle('dark')
})

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname) 
            {
                for(tablink of tablinks)
                {
                    tablink.classList.remove("active-link");
                }

                for(tabcontent of tabcontents)
                {
                    tabcontent.classList.remove("active-tab");
                }

                event.currentTarget.classList.add("active-link");
                document.getElementById(tabname).classList.add("active-tab");
            }

            const scriptURL = 'https://script.google.com/macros/s/AKfycbxhjBFG3wfDygm6Mr_NBoDOPyZ-Su54p6ZBT0vPHQrCOpdMKQfMqOftA6-8xOXW9TTV/exec'
            const form = document.forms['submit-to-google-sheet']
            const msg = document.getElementById("msg")
                      
                form.addEventListener('submit', e => {
                     e.preventDefault()
                        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                            .then(response => {
                                msg.innerHTML = "Yay! Message was sent successfully!"
                                setTimeout(function() {
                                    msg.innerHTML = " "
                                }, 5000)
                                form.reset()
                            })
                            .catch(error => console.error('Error!', error.message))
                        })
            