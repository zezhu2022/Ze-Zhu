function switchPage(pageId) {
    if (pageId.id == 'Projects') {
        window.location.href = "Projects.html"

    }
    else if (pageId.id == 'About me'){
        window.location.href = "About Me.html"
    }
    else {
        window.location.href = "Contact Me.html"
    }

}