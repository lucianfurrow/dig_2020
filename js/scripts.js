(function () {

    let sections = null;
    let targets = [];

    window.addEventListener('load', function() {
        sections = document.getElementsByTagName('section');
        createObserver();
    }, false);

    function observeSection(section, observer) {
        observer.observe(section);
    }

    function createObserver() {
        let observer;

        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        }

        observer = new IntersectionObserver(handleIntersect, options);

        for (let i = 0; i < sections.length; i++) {
            observer.observe(sections[i]);
        }

    }

    function handleIntersect(entries, observer) {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                console.log('in the view');
            } else {
                console.log('out of view');
            }
        });
    }

/*
    let callback = (entries, observer) => {
        entries.forEach(entry => {
            console.log(entry);
            if (entry.isIntersecting) {
                console.log(entry.target);
            }
            // Each entry describes an intersection change for one observed
            // target element:
            //   entry.boundingClientRect
            //   entry.intersectionRatio
            //   entry.intersectionRect
            //   entry.isIntersecting
            //   entry.rootBounds
            //   entry.target
            //   entry.time
        });
    };

    let targets = [];

    let sections = document.getElementsByTagName('section');

    for (let i = 0; i < sections.length; i++) {

        let id = sections[i].getAttribute('id');
        targets[id] = document.querySelector(`#${id}`);
        observer.observe(targets[id]);
        // console.log(sections[i].getAttribute('id'));

    }

    // console.log(targets);
    // console.log(sections);

    document.addEventListener('keydown', function (e) {

        for (let i = 0; i < sections.length; i++) {

            // console.log(sections[i]);
            // console.log(sections[i].getAttribute('id'));

        }

    });

    function jump(h) {
        var url = location.href;               //Save down the URL without hash.
        location.href = "#" + h;                 //Go to the target element.
        history.replaceState(null, null, url);   //Don't like hashes. Changing it back.
    }
*/
})();
